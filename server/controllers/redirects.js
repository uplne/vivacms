var redirects = {
    redirectToDashboard: function (req, res, next) {
        return res.redirect('/');
    }
};

module.exports = redirects;
