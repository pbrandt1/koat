var app = require('./index.js');


app.use('/', function *(next) {
  app.debug('routed middleware for /')
  yield next;
})

app.use(function *(next) {
  app.debug('middleware koa style')
  yield next;
})


app.get('/', function *() {
  this.body = 'Hello'
})

app.get('/:something', function *() {
  this.body = this.params.something + ' rocks!'
})

app.get('/data', function *() {
  this.body = {a: 12}
})

app.static('.')

app.listen(3000);
console.log('listening on 3000')
