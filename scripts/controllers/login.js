'use strict';

$app
    .controller('LoginCtrl', function ($scope, $http, $location, api) {
        $scope.email = "";
        $scope.password = "";
        $scope.login = () => {
            api.login({ email: $scope.email, password: $scope.password }).then(function successCallback(response) {
                if (response.data.token) {
                    localStorage.setItem("jwt", response.data.token);
                    $location.path("/dashboard");
                }

            });
        };
    });
