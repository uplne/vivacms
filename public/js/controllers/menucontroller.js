define(['app', 'jquery'], function (app, $) {
    return app.controller('MenuController', ['$scope', '$location',
        function MenuController($scope, $location) {

            console.log('MenuController');

            if ($location.path() === '') {
                $location.path('/');
            }

            $scope.location = $location;

            $scope.$watch('location.path()', function (path) {
                $scope.statusFilter = (path === '/active') ?
                    { completed: false } : (path === '/completed') ?
                    { completed: true } : null;
            });


            $scope.clickHandler = function() {
                console.log('click');
            }
        }
    ]);
});
