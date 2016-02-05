# koat

umm don't forget your coat?

koa app ready to rock.

includes
* koa-logger
* koa-bodyparser
* koa-router which you can use with `app.get('/', function *(next){})`
* smart response content types
* debug statements with `app.debug('💯')`
* static with `app.static(root, opts)`

usage
```js
var app = require('koat')
app.get('/', function *() { this.body = "🎉🌮 taco party 🌮🎉"})
app.listen(3000);
```
