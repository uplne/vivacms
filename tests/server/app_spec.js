var app = require('./server/');

describe("Admin routes", function() {
    var res;

    beforeEach(function () {
        res = {
            redirect: sandbox.spy(),
            render: sandbox.spy()
        };

        sandbox.stub(api.posts, 'browse', function () {
            return when({posts: {}, meta: {pagination: { pages: 3}}});
        });

        apiSettingsStub = sandbox.stub(api.settings, 'read');
        apiSettingsStub.withArgs('postsPerPage').returns(when({
            settings: [{
                'key': 'postsPerPage',
                'value': 6
            }]
        }));
    });

    it('Redirects to home if page number is -1', function () {
        var req = {params: {page: -1}, route: {path: '/page/:page/'}};

        frontend.homepage(req, res, null);

        res.redirect.called.should.be.true;
        res.redirect.calledWith('/').should.be.true;
        res.render.called.should.be.false;

    });


});
