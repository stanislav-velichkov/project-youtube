var app = angular.module('mainApp');


app.controller('loginController', function ($scope, $http, $rootScope, $location) {
    $scope.login = function () {

        var indata = { 'username': $scope.user.username, 'password': $scope.user.password };
        $http.post('/login', indata)
            .then(function (response, status, headers, config) {
                if (response.data != '') {
                    $rootScope.user = response.data;
                    $rootScope.username = $rootScope.user.username;
                    window.sessionStorage.setItem('user', JSON.stringify(response.data));

                    $location.path("/");
                    $('#homeBtn').addClass('active');

                    $('#historyBtn').removeClass('active');
                    $('#bestOfBtn').removeClass('active');
                    $('#profBtn').removeClass('active');
                    menuToLoggedIn();
                } else {
                    $('#loginErrorMsg').html('Username or Password invalid!');
                }

            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })
    }
});

