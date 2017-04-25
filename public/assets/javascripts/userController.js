var app = angular.module('mainApp');

app.controller('userController', function ($scope, $http, $rootScope, $location) {
    $scope.loggedIn = function () {
        if($rootScope.user) {
            $location.path('/');
            return true;
        } else {
            $location.path('/login');
            return false; 
        }  
    }
});

