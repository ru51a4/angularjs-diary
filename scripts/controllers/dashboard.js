'use strict';

angular.module('angularjsSimpleWebsiteApp')
    .controller('DashboardCtrl', function ($scope, $http, $location) {
        $scope.diary = "";
        let init = () => {
            console.log($scope.email, $scope.password)
            $http({
                method: 'GET',
                url: 'http://laraveldiary.1123875-cc97019.tw1.ru/api/dashboard/1',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("jwt")}`
                }
            }).then(function successCallback(response) {
                if (response.data.d) {
                    $scope.diary = response.data.d;
                } else {
                    localStorage.setItem("jwt", "");
                    $location.path("login")
                }

            }, function errorCallback(response) {
                console.log(response)

            });
        };
        init();
    });
