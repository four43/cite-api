/*jslint nomen: true */
/*global define */

define(['handlebars', 'ajax'], function(Handlebars, ajax) {
	'use strict'

	function compile(templatePath) {
		return ajax.get(templatePath).done(function(content) {
			return Handlebars.compile(content);
		});
	}

	return compile;
});