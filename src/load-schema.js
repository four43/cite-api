/*jslint nomen: true */
/*global define */

define([], function () {
	'use strict';

	function loadSchema(schemaPath, callback) {
		try {
			var request = new XMLHttpRequest();
			request.open('GET', schemaPath, true);
			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					// Success!
					callback(JSON.parse(request.responseText));
				} else {
					// We reached our target server, but it returned an error
					console.error("Couldn't get template file: " + schemaPath);
				}
			};

			request.onerror = function () {
				// There was a connection error of some sort
				console.error("Couldn't get template file: " + schemaPath);
			};
			request.send();
		}
		catch (err) {
			console.error(err.stack());
		}
	}
	return loadSchema;
});