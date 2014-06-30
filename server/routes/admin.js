var config    = require('../config'),
    helpers   = require('./helpers'),
    async     = require('async'),
    mongoose  = require('mongoose'),
    fs        = require('fs'),
    login     = require('../controllers/login-controller'),
    appRoot   = config.paths.appRoot,
    path      = require('path'),
    express   = require('express'),
    redirects = require('../controllers/redirects'),
    admin     = require('../controllers/admin-controller');

module.exports = function(app) {

    app.get('/', function(res, req, next) {
        res.render('content/index', {
            cssAssets: config.paths.css
        });
    });

    // Login page
    app.get('/login', admin.login);
};
