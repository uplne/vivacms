define(['app', 'jquery'], function (app, $) {
    return app.controller('ProgramController', ['$scope',
        function ProgramController($scope) {

            $scope.programData = [
                {"title": "Nosferatu", "img": "nosferatu.jpg", "path": "/nosferatu", "datenum": 22},
                {"title": "Noc svatojanska", "img": "sen.jpg", "path": "/noc-svatojanska", "datenum": 23}
            ];
        }
    ]);
});
