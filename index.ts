export function picomask(raw: string, pattern = "") {
  let chars = pattern.split("");
  let sanitized = raw.replace(/[^0-9]/gi, "").split("");
  let value = "";
  let parts: { [key: string]: string } = {};

  while (chars.length) {
    const char = chars.shift() as string;

    if (/[^a-z]/i.test(char)) {
      value += char;
      continue;
    }

    const val = sanitized.shift();

    if (!val) continue;

    value += val;
    parts[char] = parts[char] || "";
    parts[char] += val;
  }

  return Object.assign({ value }, parts);
}
