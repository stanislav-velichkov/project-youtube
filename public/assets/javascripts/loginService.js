var app = angular.module('mainApp', ['ngRoute']);



app.controller('loginController', function($scope, $http) {
    $http.get('login').then(function (response) {
        $scope.login = response.data;
    })
})