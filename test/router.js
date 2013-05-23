var router = require('../lib/router')
	, express = require('express')
	, assert = require('assert');

var mockControllerFactory = {
	controllerName: null,
	makeController: function (name) {
		controllerName = name;
	}
}

describe('Router', function () {
	var mapper, app;

	beforeEach(function () {

	});

	describe('.match(route, controller, method)', function () {
		app = express();
		mapper = new router.Mapper(app, mockControllerFactory);

		mapper.match('/user', 'user', 'index');
		it('should create route to /user', function () {
			assert.equal('/user', app.routes['get'][0].path);
		});
	});
});