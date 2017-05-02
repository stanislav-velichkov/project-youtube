var app = angular.module('mainApp');


app.controller('registerController', function ($scope, $http, $location) {

    $scope.register = function () {

        var indata = new User($scope.user.username, $scope.user.email, $scope.user.password);
        console.log(indata);
        $http.post('/register', indata)
            .then(function (response, status, headers, config) {
                if (response.data != '') {
                    $('#regErrorMsg').html('Username or Email already in use!');
                } else {
                    $location.path("/login");
                    $('#profBtn').addClass('active');

                    $('#historyBtn').removeClass('active');
                    $('#bestOfBtn').removeClass('active');
                    $('#homeBtn').removeClass('active');
                }

            }, function (response, status, headers, config) {
                alert('Server Error');
            })

    }
});
