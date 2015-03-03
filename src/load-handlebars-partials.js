var async = require('async'),
	Handlebars = require('handlebars'),
	http = require('http'),
	Util = require('./util');

module.exports = function loadHandlebarsPartials(partials, callback) {
	var loadPromises = [];
	for (var partialName in partials) {
		if (partials.hasOwnProperty(partialName)) {
			var path = partials[partialName];
			//LoadPromises need to accept a single argument: callback
			var loader = (function (partialName, path) {
				return function (loadCallback) {
					loadPartial(partialName, path, loadCallback);
				}
			})(partialName, path);
			loadPromises.push(loader);
		}
	}
	async.parallel(loadPromises, function (err, results) {
		callback(results);
	})
};

function loadPartial(name, path, callback) {
	return Util.loadTemplate(path, function (template) {
		Handlebars.registerPartial(name, template);
		callback(null, name);
	});
}