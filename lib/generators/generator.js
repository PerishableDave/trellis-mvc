var project = require('projectgenerator')
	, model = require('modelgenerator')
	, view = require('viewgenerator')
	, controller = require('controllergenerator');

function Generator(type) {
	var type = arguments.shift();

	switch (type) {
		case "project":
			controller(arguments);
			break;
		case "model":
			break;
		case "view":
			break;
		case "controller":
			break;
		default:
			console.log('Generator for ' + type + ' is unavailable.');
	}
}