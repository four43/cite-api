//Load common code that includes config, then load the app logic for this page.
requirejs.config({
	baseUrl: '../../lib',
	paths: {
		CiteApi: '../../../cite-api',
		src: '../../../src'
	}
});

requirejs(['CiteApi', 'handlebars'], function(CiteApi, Handlebars, ajax) {

	var citeApi = new CiteApi({
		maxDepth: 3,
		containerElement: document.querySelector('#doc-container')
	});

});