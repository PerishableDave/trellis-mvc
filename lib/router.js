//
// Mapper
//

function Mapper(app, controllerFactory) {
  this.app = app;
  this.controllerFactory = controllerFactory;
}

Mapper.prototype.match = function (route, controller, method) {
  this.app.get(route, function (req, res) {
    Mapper.callOrFail(controller, method, req, res);
  });
};


Mapper.prototype.resource = function (resource, controllerName) {
  this.app.get(resource, function (req, res) {
    Mapper.callOrFail(controllerName, 'index', req, res);
  });

  this.app.get(resource, function (req, res) {
    Mapper.callOrFail(controllerName, 'new', req, res);
  });

  this.app.post(resource, function (req, res) {
    Mapper.callOrFail(controllerName, 'create', req, res);
  });

  this.app.get(resource + '/:id', function (req, res) {
    Mapper.callOrFail(controllerName, 'show', req, res);
  });

  this.app.get(resource + '/:id/edit', function (req, res) {
    Mapper.callOrFail(controllerName, 'edit', req, res);
  });

  this.app.put(resource + '/:id', function (req, res) {
    Mapper.callOrFail(controllerName, 'update', req, res);
  });

  this.app.del(resource + '/:id', function (req, res) {
    Mapper.callOrFail(controllerName, 'destroy', req, res);
  });
};

Mapper.callOrFail = function (controllerName, methodName, req, res) {
  var controller = this.controllerFactory.makeController(controllerName);
  if (controller && controller[methodName] !== undefined) {
    controller[methodName].apply(controller, [req, res]);
  } else {
    res.send(404);
  }
};

module.exports.Mapper = Mapper;