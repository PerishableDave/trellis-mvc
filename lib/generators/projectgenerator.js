var fs = require('fs')
	, process = require('process')
	, path = require('path');

function ProjectGenerator(name) {
	var currentDir = proccess.cwd();
	var appDir = path.join(currentDir, name);

	fs.mkdirSync(appDir);

	[
		'app/',
		'app/models',
		'app/controllers'
		'app/views'
		'config/'
	].forEach(function(elem) {
		fs.mkdirSync(path.join(appDir, elem));
	})
}

module.exports = ProjectGenerator;