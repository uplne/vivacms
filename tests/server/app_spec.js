var app = require('../../server/');

describe("Admin routes", function() {
    var res;

    beforeEach(function () {
        res = {
            redirect: sandbox.spy(),
            render: sandbox.spy()
        };
    });

    it('should render content/index on /', function () {
        var req = {params: {page: '/'}, route: {path: '/'}};

        admin.homepage(req, res, null);

        res.render.called.should.be.true;
    });
});
