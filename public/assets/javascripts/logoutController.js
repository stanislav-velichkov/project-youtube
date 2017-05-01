var app = angular.module('mainApp');


app.controller('logoutController', function ($scope, $http, $rootScope, $location) {
    $scope.logout = function () {
        window.sessionStorage.removeItem('user');
        $http.get('/logout')
            .then(function (response, status, headers, config) {
                menuToLoggedout();
                $rootScope.user = new User();
                $rootScope.username = undefined;
                $location.path('/');
                $('#homeBtn').addClass('active');

                $('#popularBtn').removeClass('active');
                $('#historyBtn').removeClass('active');
                $('#bestOfBtn').removeClass('active');
                $('#profBtn').removeClass('active');
            }, function (response, status, headers, config) {
                // alert('Server Error');
            })

    }
});

