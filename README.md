# picomask

[![npm version](https://img.shields.io/npm/v/picomask?style=flat&colorA=4488FF&colorB=4488FF)](https://www.npmjs.com/package/picomask) [![test coverage](https://img.shields.io/coveralls/github/sure-thing/picomask?style=flat&colorA=223355&colorB=223355)](https://coveralls.io/github/sure-thing/picomask?branch=main) [![npm bundle size](https://badgen.net/bundlephobia/minzip/picomask?color=223355&labelColor=223355)](https://bundlephobia.com/package/picomask)

Very small integer text mask for basic applications.

## Usage

```javascript
import { picomask } from 'picomask'

picomask('09072021', 'mm/dd/yyyy')

// => { value: '09/07/2021', m: '09', d: '07', y: '2021' }
```

## Other Examples

```javascript
picomask('07092021', 'dd-mm-yyyy') // => { value: '07-09-2021', ... }
picomask('20210907', 'yyyy-mm-dd') // => { value: '2021-09-07', ... }
picomask('1231231234', '(nnn) nnn-nnnn') // => { value: '(123) 123-1234', ... }
picomask('0624', 'mm/yy') // => { value: '06/24', ... }
picomask('4242424242424242', 'cccc cccc cccc cccc') // => { value: '4242 4242 4242 4242', ... }
```

## License

MIT License © [Truework](https://www.truework.com)
