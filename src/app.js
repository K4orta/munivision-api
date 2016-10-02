const express = require('express')
const RouteListController = require('./controllers/route-list')
const StopsController = require('./controllers/stops')

function init (config) {
  const app = express()
  app.get('/route-list', RouteListController)
  app.get('/stops/:route', StopsController)
  return app
}

module.exports = init
