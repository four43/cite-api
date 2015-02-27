//Load common code that includes config, then load the app logic for this page.
requirejs.config({
	baseUrl: '../',
	paths: {
		lib: 'lib'
	}
});

requirejs(['app/main']);