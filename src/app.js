const express = require('express')
const RouteListController = require('./controllers/route-list')
const StopsController = require('./controllers/stops')
const VehiclesController = require('./controllers/vehicles')
const cors = require('cors')

function init (config) {
  const app = express()
  app.use(cors())
  app.get('/route-list', RouteListController)
  app.get('/stops/:route', StopsController)
  app.get('/vehicles/:route', VehiclesController)
  return app
}

module.exports = init
