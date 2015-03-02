//Load common code that includes config, then load the app logic for this page.
requirejs.config({
	baseUrl: '../../lib',
	paths: {
		citeApi: '../../../cite-api',
		src: '../../../src'
	},
	shim: {
		ajax: {
			exports: 'ajax'
		}
	}
});

requirejs(['citeApi', 'handlebars'], function(citeApi, Handlebars, ajax) {
	var display = function(template) {
		var data = {data: "Wow this actually works"};
		document.querySelector('#doc-container').innerHTML = template(data);
	};
	citeApi.compile('templates/echo.handlebars', display);
});