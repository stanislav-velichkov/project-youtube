var app = angular.module('mainApp');


app.controller('logoutController', function ($scope, $http, $rootScope, $location) {
    $scope.logout = function () {
        
        $http.get('/logout')
            .then(function (response, status, headers, config) {
                menuToLoggedout();
                $rootScope.user = new User();
                $rootScope.username = undefined;
                console.log('destroyed session')
                $location.path('/');
            }, function (response, status, headers, config) {
                // alert('Server Error');
            })

    }
});

