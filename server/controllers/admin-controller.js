var config    = require('../config');

var adminControllers = {
    'homepage': function(req, res, next) {
        res.render('content/index', {
            cssAssets: config.paths.css
        });
    },

    'loginLanding': function (req, res) {
        res.sendfile('./public/tmpl/login.html');
    },

    'loginHandler': function(req, res) {
        var user = {
                user: req.param('username'),
                pswd: req.param('pswd')
            };

        if (typeof user === "undefined") {
            res.send('Oops!', 400);
        } else if (user.user === 'steve' && user.pswd === 'heslo') {
            req.session.user = user;
            res.redirect("/dashboard");
        } else {
            res.send('Wrong username or password!', 400);
        }
    },

    'dashboard': function(req, res) {
        res.sendfile('./public/tmpl/dashboard.html');
    }
};

module.exports = adminControllers;
