export function picomask(raw: string, pattern = '') {
  let chars = pattern.split('')
  let sanitized = raw.replace(/[^0-9]/gi, '').split('')
  let value = ''
  let parts: { [key: string]: string } = {}

  while (chars.length) {
    const char = chars.shift() as string

    if (/[^a-z]/i.test(char) && sanitized.length) {
      value += char
      continue
    }

    const val = sanitized.shift()

    if (!val) break

    value += val
    parts[char] = parts[char] || ''
    parts[char] += val
  }

  return Object.assign({ value }, parts)
}

export function transform(parts: { [key: string]: string }, pattern = '') {
  const sanitized = Object.keys(parts).reduce(
    (obj, k) => {
      obj[k] = parts[k].split('')
      return obj
    },
    {} as {
      [k: string]: string[]
    }
  )
  let chars = pattern.split('')
  let value = ''

  while (chars.length) {
    const char = chars.shift() as string

    if (/[^a-z]/i.test(char)) {
      value += char
      continue
    }

    value += sanitized[char].shift() || ''
  }

  return picomask(value, pattern)
}
