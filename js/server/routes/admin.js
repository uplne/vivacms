var config = require('../config');

module.exports = function(app) {
    // Home route
    app.get("/", function(req, res) {
        res.render('content/index', {
            title: 'Login page',
            imageAssets: config.paths.images,
            cssAssets: config.paths.css
        });
    });
};
