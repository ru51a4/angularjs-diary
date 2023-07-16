'use strict';

angular.module('angularjsSimpleWebsiteApp')
    .controller('DashboardCtrl', function ($scope, $http, $location, $routeParams, api) {
        $scope.diary = [];
        $scope.pagintation = [];
        $scope.cPage = ($routeParams.page) ? Number($routeParams.page) : 1;
        let init = () => {
            api.getDashboard($scope.cPage).then(function successCallback(response) {
                console.log(response.data.d)
                if (response.data.d) {
                    $scope.diary = response.data.d;
                    $scope.pagintation = response.data.p;
                } else {
                    localStorage.setItem("jwt", "");
                    $location.path("login")
                }
            }, function (error) {
                console.log(error);
            });

        };
        init();
    });
