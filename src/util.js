var Handlebars = require('handlebars'),
	http = require('http');

function loadTemplate(templatePath, callback) {
	loadRemoteData(templatePath, function(data) {
		callback(Handlebars.compile(data));
	});
}

function loadSchema(schemaPath, callback) {
	loadRemoteData(schemaPath, function(data) {
		callback(JSON.parse(data));
	});
};

function loadRemoteData(path, callback) {
	http.get({path: path}, function (res) {
		var buffer = '';
		res.on('data', function (data) {
			buffer += data;
		});
		res.on('end', function () {
			callback(buffer);
		});
	});
}

module.exports = {
	loadSchema: loadSchema,
	loadTemplate: loadTemplate
};