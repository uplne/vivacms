define(['app', 'jquery'], function (app, $) {
    return app.controller('LoginForm', ['$scope',
        function LoginForm($scope) {

            $scope.loginUser = function() {
                $.ajax({
                    url: "/login",
                    method: "POST"
                }).done(function(data) {
                    console.log('sent');
                });
            }
        }
    ]);
});
