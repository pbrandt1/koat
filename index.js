var koa = require('koa')
var app = module.exports = koa()

// boring stuff
app.debug = require('debug')('app')
app.use(require('koa-logger')())
app.use(require('koa-bodyparser')())

// smart type setting for json
app.use(function *(next) {
  yield next;
  if (typeof this.body === 'object') {
    this.type = 'json'
  }
})

// Set up fun fun fun router stuff
var router = require('koa-router')()
app.use(router.routes())

// need to support both router and regular koa forms of app.use
//   app.use('/route', function *(){})
//   app.use(function *() {})
app.use = function(route, middleware) {
  if (typeof route === 'function') {
    middleware = route;
    route = '/'
  }
  router.use(route, middleware);
}

// add shortcuts for the methods right into app
var methods = ['get', 'post', 'put', 'delete']
methods.map(function(method) {
  app[method] = router[method].bind(router);
})
