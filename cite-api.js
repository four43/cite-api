define(function(require) {
	'use strict';

	var merge = require('lodash/object/merge');

	var CiteApi = function(options) {
		var defaultOptions = {
			maxDepth: 2,

			templateDir: './template',
			containerElement: null
		};

		this.options = merge(defaultOptions, options);

		var display = function(template) {
			var data = {data: "Wow this actually works"};
			this.options.containerElement.innerHTML = template(data);
		}.bind(this);
		this.loadTemplate(this.options.templateDir + '/echo.handlebars', display);
	};

	CiteApi.prototype.load = function(schema) {

	};

	CiteApi.prototype.loadSchema = require('src/load-schema');
	CiteApi.prototype.loadTemplate = require('src/load-template');

	return CiteApi;
});