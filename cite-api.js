define(function(require) {
	'use strict';

	var handlebars = require('handlebars');

	var helloWorld = require('src/hello-world');
	return {
		version: 'v0.0.1',
		compile: helloWorld
	}
});