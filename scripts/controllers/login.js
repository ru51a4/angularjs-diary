'use strict';

angular.module('angularjsSimpleWebsiteApp')
    .controller('LoginCtrl', function ($scope, $http, $location, api) {
        $scope.email = "";
        $scope.password = "";
        let init = () => {
            api.checkAuth();
        };
        init();
        $scope.login = () => {
            console.log($scope.email, $scope.password)
            api.login({ email: $scope.email, password: $scope.password }).then(function successCallback(response) {
                if (response.data.token) {
                    localStorage.setItem("jwt", response.data.token);
                    $location.path("/dashboard");
                }

            });
        };
    });
