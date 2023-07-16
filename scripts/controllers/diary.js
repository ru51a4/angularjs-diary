'use strict';

angular.module('angularjsSimpleWebsiteApp')
    .controller('DiaryCtrl', function ($scope, $http, $location, $routeParams, api) {
        $scope.diary = [];
        $scope.id = $routeParams.id;
        let init = () => {
            api.getDiary($scope.id).then(function successCallback(response) {
                if (response.data) {
                    $scope.diary = response.data

                }
                console.log($scope.diary)
            }, function (error) {
                console.log(error);
            });

        };
        init();
    });
