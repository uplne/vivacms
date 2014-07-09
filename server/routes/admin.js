var config    = require('../config'),
    helpers   = require('./helpers'),
    async     = require('async'),
    mongoose  = require('mongoose'),
    fs        = require('fs'),
    login     = require('../controllers/login-controller'),
    appRoot   = config.paths.appRoot,
    path      = require('path'),
    redirects = require('../controllers/redirects'),
    admin     = require('../controllers/admin-controller');

module.exports = function(app) {

    app.get('/', admin.homepage);

    // Login page
    app.get('/login', admin.loginLanding);
    app.post('/login', admin.loginHandler);

    // Dashboard
    app.get('/dashboard', admin.dashboard);
};
