# koat

umm don't forget your coat?

koa app ready to rock.

includes
* koa-logger
* koa-bodyparser
* koa-router which you can use with `app.get('/', function *(next){})`
* smart response type setting for json
* debug statements with app.debug()

usage
```js
var app = require('koat')
app.get('/', function *() { this.body = "🎉🌮 taco party 🌮🎉"})
app.listen(3000);
```
