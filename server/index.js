var express      = require('express'),
    bodyParser   = require('body-parser'),
    methodOverride = require('method-override'),
    favicon      = require('static-favicon'),
    errorHandler = require('errorhandler'),
    exphbs       = require('express-hbs'),
    path         = require('path'),
    config       = require('./config'),
    routes       = require('./routes'),
    helpers      = require('./helpers'),
    db           = require('./config/db'),
    dbmodels     = require('./controllers/dbmodels'),
    appRoot      = config.paths.appRoot,
    cookieParser = require('cookie-parser'),
    session      = require('express-session');

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

    app.use(errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    // Template engine
    app.engine('hbs', exphbs.express3({
        partialsDir: appRoot + '/public/views/partials',
        defaultLayout: appRoot + '/public/views/layouts/default.hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', appRoot + '/public/views');

    helpers.registerHelpers();

    // Start server
    app.listen(config.server.port, function() {
        console.log('Express server listening on port %d in %s mode', config.server.port, app.settings.env);
    });

    // Connect to mongodb
    db.connect();

    // Normal routes
    routes.frontend(app);

    // Routes behing auth
    routes.secure(app);
}

module.exports = init;
