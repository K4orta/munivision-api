const express = require('express')
const RouteListController = require('./controllers/route-list')

function init(config) {
  const app = express();
  app.get('/route-list', RouteListController);
  return app;
}

module.exports = init;
