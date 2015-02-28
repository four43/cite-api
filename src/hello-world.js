/*jslint nomen: true */
/*global define */

define(['handlebars', 'ajax'], function(Handlebars, ajax) {
	'use strict';

	function compile(templatePath, callback) {
		try {
			return ajax(templatePath, {
				complete: function(content) {
					callback(Handlebars.compile(content));
				}
			});
		}
		catch (err) {
			console.log('Ajax:');
			console.log(ajax);
			console.log(Handlebars);
			console.error(err.stack());
		}
	}

	return compile;
});