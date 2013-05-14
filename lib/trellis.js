var express = require('express');

function Trellis() {

}

Trellis.prototype.listen() {
	var app = express();
	app.listen(arguments);
}