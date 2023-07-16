
angular.module('angularjsSimpleWebsiteApp').factory('api', function ($http, $location) {
    return {
        getDashboard: (page) => {
            return $http({
                method: 'GET',
                url: `http://laraveldiary.1123875-cc97019.tw1.ru/api/dashboard/${page}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("jwt")}`
                }
            })
        },
        login: ({ email, password }) => {
            return $http({
                method: 'POST',
                url: 'http://laraveldiary.1123875-cc97019.tw1.ru/api/login',
                data: {
                    email: email,
                    password: password
                }
            })
        },
        getDiary: (id) => {
            return $http({
                method: 'GET',
                url: `http://laraveldiary.1123875-cc97019.tw1.ru/api/diary/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("jwt")}`
                }
            })
        },
        checkAuth: () => {
            $http({
                method: 'POST',
                url: `http://laraveldiary.1123875-cc97019.tw1.ru/api/get_user`,
                data: {
                    token: localStorage.getItem("jwt")
                }
            }).then(function successCallback(response) {
                if (response.data.user) {
                    $location.path("/dashboard");
                } else {
                    localStorage.removeItem("jwt")
                }

            }, function () {

            });
        }

    };
})