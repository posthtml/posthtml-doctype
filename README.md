# PostHTML-doctype
[![npm version](https://badge.fury.io/js/posthtml-doctype.svg)](http://badge.fury.io/js/posthtml-doctype)

## Usage

```js
var posthtml = require('posthtml'),
    html = '<html><head><title>Wow</title></head><body><div class="button"><div class="button__text">Text</div></div></body></html>';

posthtml()
    .use(require('posthtml')('<!DOCTYPE html>'))
    .process(html)
    .then(function(result) {
        console.log(result.html);
        //<!DOCTYPE html><html><head><title>Wow</title></head><body><div class="button"><div class="button__text">Text</div></div></body></html>
    })
```
