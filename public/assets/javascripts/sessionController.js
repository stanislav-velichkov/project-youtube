var app = angular.module('mainApp');

app.controller('sessionController', function ($scope, $http, $rootScope, $location) {
    $scope.currentSession = function () {

        if (window.sessionStorage.getItem('user')) {
            $rootScope.user = JSON.parse(window.sessionStorage.getItem('user'));
            $rootScope.username = JSON.parse(window.sessionStorage.getItem('user')).username;
            menuToLoggedIn();
        } else {

        $http.post('/session')
            .then(function (response, status, headers, config) {
                if (response.data != '') {
                    menuToLoggedIn();
                    $rootScope.user = response.data;
                    $rootScope.username = $rootScope.user.username;
                    console.log($rootScope.user);
                } else {
                    menuToLoggedout();
                }
            }, function (response, status, headers, config) {
            });
        }
    };
});

