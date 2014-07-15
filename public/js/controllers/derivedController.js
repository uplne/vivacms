define(['app', 'jquery'], function (app, $) {
    return app.controller('DerivedController', ['$scope', 'sharedModel',
        function DerivedController($scope, sharedModel) {
            $scope.model = sharedModel;

            $scope.updateValue = sharedModel.updateValue;
        }
    ]);
});
