/*jslint nomen: true */
/*global define */

define(['handlebars'], function (Handlebars) {
	'use strict';

	function compile(templatePath, callback) {
		try {
			var request = new XMLHttpRequest();
			request.open('GET', templatePath, true);
			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					// Success!
					callback(Handlebars.compile(request.responseText));
				} else {
					// We reached our target server, but it returned an error
					onsole.error("Couldn't get template file: " + templatePath);
				}
			};

			request.onerror = function () {
				// There was a connection error of some sort
				console.error("Couldn't get template file: " + templatePath);
			};
			request.send();
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