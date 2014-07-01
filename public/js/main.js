'use strict';

require.config({
    "baseUrl": "/public/js",
    "paths": {
        angular: 'lib/angular/angular.min'
        //jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min'
        jquery: 'lib/jquery/jquery'
    },
    "shim": {
        'angular': {
            'exports': 'angular'
        },
        'jquery': {
            'exports': 'jquery'
        }
    },
    "priority": [
        'angular'
    ]
});

require([
    'angular',
    'jquery',
    'app'
], function (angular, $, App) {

    angular.element().ready(function() {
        angular.resumeBoostrap([app['name']]);
    });
});
