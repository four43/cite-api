//Load common code that includes config, then load the app logic for this page.
requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		citeApi: '../../../cite-api',
		src: '../../../src'
	}
});

requirejs(['citeApi', 'handlebars', 'ajax'], function(citeApi, Handlebars, ajax) {
	console.log('Ajax1:');
	console.log(ajax);
	var display = function(template) {
		var data = {data: "Wow this actually works"};
		document.querySelector('#doc-container').innerHTML = template(data);
	};
	citeApi.compile('templates/echo.handlebars', display);
});