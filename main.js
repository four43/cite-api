var _ = require('lodash'),
	Handlebars = require('handlebars'),
	async = require('async'),
	LoadHandlebarsPartials = require('./src/load-handlebars-partials'),
	Util = require('./src/util');

Handlebars.registerHelper('equals', function(variable, expected, options) {
	if(variable === expected) {
		return options.fn(this);
	}
});

Handlebars.registerHelper('ifRequired', function(required, property, options) {
	if(required instanceof Array && required.indexOf(property)) {
		return options.fn(this);
	}
});

Handlebars.registerHelper('defaultVal', function(property, defaultVal, options) {
	if(property == null && property !== 0) {
		return defaultVal;
	}
	return property;
});

var CiteApi = function (options) {
	var defaultOptions = {
		maxDepth: 2,
		schema: '',
		templateDir:      'template',
		containerElement: null,
		templatePartials: {
			'typeNumber': 'types/number.handlebars',
			'typeString': 'types/string.handlebars'
		}
	};

	this.options = _.merge(defaultOptions, options);

	for(var i in this.options.templatePartials) {
		this.options.templatePartials[i] = this.options.templateDir + '/' + this.options.templatePartials[i];
	}
	LoadHandlebarsPartials(this.options.templatePartials, function(result) {
		console.log(result);
	})
};

CiteApi.prototype.render = function (schemaPath) {
	Util.loadSchema(schemaPath, function(schema) {
		Util.loadTemplate(this.options.templateDir + '/main.handlebars', function(template) {
			this.options.containerElement.innerHTML = template(schema);
		}.bind(this));
	}.bind(this));
};


module.exports = CiteApi;