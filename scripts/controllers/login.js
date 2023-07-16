'use strict';

angular.module('angularjsSimpleWebsiteApp')
    .controller('LoginCtrl', function ($scope, $http, $location) {
        $scope.email = "";
        $scope.password = "";
        $scope.login = () => {
            console.log($scope.email, $scope.password)
            $http({
                method: 'POST',
                url: 'http://laraveldiary.1123875-cc97019.tw1.ru/api/login',
                data: {
                    email: $scope.email,
                    password: $scope.password
                }
            }).then(function successCallback(response) {
                if (response.data.token) {
                    localStorage.setItem("jwt", response.data.token);
                    $location.path("/dashboard");
                }

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };
    });
