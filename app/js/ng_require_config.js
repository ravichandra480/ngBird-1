"use strict";
require.config({
    baseUrl: 'app/js/',
    paths: {
		angular: 'vendors/angular.min',
		angularRoute: 'vendors/angular-route.min',
        angularAnimate: 'vendors/angular-animate.min',
        angularResource: 'vendors/angular-resource.min'
    },
	shim: {
		'app': {
			deps: ['angular', 'angularRoute', 'angularAnimate', 'angularResource']
		},
		'angularRoute': {
			deps: ['angular']
		},
        'angularAnimate': {
            deps: ['angular']
        },
        'angularResource': {
            deps: ['angular']
        }
	}
});

require(['app'], function (app) {
    angular.bootstrap(document, ['app']);
});