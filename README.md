[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Doctype Plugin</h1>
  <p>Simplify working with doctypes</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-doctype
```

<h2 align="center">Usage</h2>

## Options

###### { doctype : 'HTML 5' }
```html
<!DOCTYPE html>
```

###### { doctype : 'HTML 4.01 Strict' }
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

###### { doctype : 'HTML 4.01 Transitional' }
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

###### { doctype : 'HTML 4.01 Frameset' }
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

###### { doctype : 'XHTML 1.0 Strict' }
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

###### { doctype : 'XHTML 1.0 Transitional' }
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

###### { doctype : 'XHTML 1.0 Frameset' }
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

###### { doctype : 'XHTML 1.1' }
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

<h2 align="center">Example</h2>

```js
const posthtml = require('posthtml'),

const html = `
  <html>
  <head>
    <title>Wow</title>
  </head>
  <body>
    <div class="button">
      <div class="button__text">Text</div>
    </div>
  </body>
  </html>
`

posthtml([require('posthtml-doctype')({ doctype: 'HTML 5' })])
    .process(html)
    .then((result) => console.log(result.html))
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Wow</title>
</head>
<body>
  <div class="button">
    <div class="button__text">Text</div>
  </div>
</body>
</html>
```

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) 2016 PostHTML Ivan Voischev

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-doctype.svg
[npm-url]: https://npmjs.com/package/posthtml-doctype

[deps]: https://david-dm.org/posthtml/posthtml-doctype.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-doctype

[travis]: http://img.shields.io/travis/posthtml/posthtml-doctype.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-doctype

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-doctype/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-doctype?branch=master
