var express = require('express')
  , controllerFactory = require('controllerfactory')
  , router = require('router')
  , routes = require('../config/routes.js');

function Trellis() {

}

Trellis.prototype.bootstrap = function () {
  var mapper = new router.Mapper(this, controllerFactory);
  routes(mapper);
};

Trellis.prototype.listen = function () {
  var app = express();
  app.listen(arguments);
};