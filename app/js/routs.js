'use strict';
define([], function()
{
    return {
        defaultRoutePath: '/login',
        routes: {
            '/login': {
                templateUrl: 'app/views/login.html',
                controller:'loginCtrl',               
                dependencies: ['controllers/loginCtrl','services/login']
            },
            '/signup': {
                templateUrl: 'app/views/signup.html',
                controller:'',
                dependencies: ['directives/directive']
            },
            '/bird/home': {
                templateUrl: 'app/views/home.html',
                controller:'homeCtrl',
                dependencies: ['controllers/homeCtrl','services/home']
            }
        }
    };
});