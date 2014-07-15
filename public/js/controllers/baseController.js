define(['app', 'jquery'], function (app, $) {
    return app.controller('BaseController', ['$scope', 'sharedModel',
        function BaseController($scope, sharedModel) {
            $scope.model = sharedModel;

            $scope.updateValue = sharedModel.updateValue;
        }
    ]);
});
