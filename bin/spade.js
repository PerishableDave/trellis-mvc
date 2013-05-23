var program = require('commander')
	, router = require('router');

program
	.version('0.0.1');

program
	.command('create')
	.description('create Trellis project')
	.action(function(env) {
		console.log('Creating Trellis project.')
	});

program
	.command('g <type> <name>')
	.description('generate new model, view, or controller')
	.action(function(type, name) {
		console.log('Generating new ' + type + ' with name ' + name);
	});

program.parse(process.argv);