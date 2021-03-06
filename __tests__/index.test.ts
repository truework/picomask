import tap from 'tap'

import { picomask, transform } from '../index'

tap.test('no pattern', async (t) => {
  const res = picomask('123')

  t.equal(res.value, '')
})

tap.test('limits length, aggregates', async (t) => {
  const res = picomask('123456', 'aaa')

  t.equal(res.value, '123')
  t.equal(res.a, '123')
})

tap.test('respects spacers', async (t) => {
  const res = picomask('123456', 'a-a a(a)')

  t.equal(res.value, '1-2 3(4)')
  t.equal(res.a, '1234')
})

tap.test('short string', async (t) => {
  const res = picomask('123', 'aaaaaa')

  t.equal(res.value, '123')
})

tap.test('partial mask', async (t) => {
  const date = 'mm/dd/yyyy'
  t.equal(picomask('0', date).value, '0')
  t.equal(picomask('02', date).value, '02')
  t.equal(picomask('020', date).value, '02/0')
})

tap.test('transform', async (t) => {
  t.equal(transform(picomask('02022020', 'mm/dd/yyyy')).value, '')
  t.same(transform(picomask('02022020', 'mm/dd/yyyy'), 'yyyy-mm-dd'), {
    value: '2020-02-02',
    y: '2020',
    m: '02',
    d: '02',
  })
  t.notSame(
    // extra pattern char
    transform(picomask('02022020', 'mm/dd/yyyy'), 'yyyyy-mm-dd'),
    {
      value: '2020-02-02',
      y: '2020',
      m: '02',
      d: '02',
    }
  )
})

tap.test('transform partial', async (t) => {
  t.same(transform(picomask('020', 'mm/dd/yyyy'), 'yyyy-mm-dd'), {
    value: '020',
    y: '020',
  })
})
