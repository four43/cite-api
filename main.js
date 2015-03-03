var _ = require('lodash'),
	http = require('http'),
	Handlebars = require('handlebars');

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

Handlebars.registerPartial('numberType', '');

var CiteApi = function (options) {
	var defaultOptions = {
		maxDepth: 2,
		schema: '',
		templateDir:      './template',
		containerElement: null
	};

	this.options = _.merge(defaultOptions, options);
};

CiteApi.prototype.render = function (schemaPath) {
	this.loadSchema(schemaPath, function(schema) {
		this.loadTemplate(this.options.templateDir + '/main.handlebars', function(template) {
			this.options.containerElement.innerHTML = template(schema);
		}.bind(this));
	}.bind(this));
};

CiteApi.prototype.loadSchema = function(schemaPath, callback) {
	this._loadRemoteData(schemaPath, function(data) {
		callback(JSON.parse(data));
	});
};

CiteApi.prototype.loadTemplate = function (template, callback) {
	this._loadRemoteData(template, function(data) {
		callback(Handlebars.compile(data));
	});
};

CiteApi.prototype._loadRemoteData = function(path, callback) {
	http.get({path: path}, function (res) {
		var buffer = '';
		res.on('data', function (data) {
			buffer += data;
		});
		res.on('end', function () {
			callback(buffer);
		});
	});
};

module.exports = CiteApi;