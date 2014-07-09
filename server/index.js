var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    favicon        = require('static-favicon'),
    errorHandler   = require('errorhandler'),
    path           = require('path'),
    config         = require('./config'),
    routes         = require('./routes'),
    helpers        = require('./helpers'),
    db             = require('./config/db'),
    dbmodels       = require('./controllers/dbmodels'),
    appRoot        = config.paths.appRoot,
    cookieParser   = require('cookie-parser'),
    session        = require('express-session');

function init() {
    app = express();

    setupServer();
}

function setupServer() {

    // Configure server
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(session({secret: 'cmssecret'}));
    app.use(favicon(config.paths.images + '/favicon.ico'));
    app.use(express.static(path.join(appRoot, 'public')));
    app.use('/public/images', express.static(config.paths.images));
    app.use('/public/js', express.static(config.paths.js));
    app.use('/public/css', express.static(config.paths.css));
    app.use('/public/tmpl', express.static(config.paths.tmpl));
    app.use(errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    // Start server
    app.listen(config.server.port, function() {
        console.log('Express server listening on port %d in %s mode', config.server.port, app.settings.env);
    });

    // Connect to mongodb
    db.connect();

    // Normal routes
    routes.admin(app);

    // Routes behing auth
    routes.secure(app);
}

module.exports = init;
