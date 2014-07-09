'use strict';

require.config({
    "paths": {
        angular: 'lib/angular/angular',
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
    }
});

require([
    'angular',
    'app',
    'controllers/loginform',
    'controllers/menucontroller'
], function (ng) {
    ng.bootstrap(document, ['app']);
});
