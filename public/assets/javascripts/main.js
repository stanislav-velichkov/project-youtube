var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: "assets/htm/login.htm",
        // controller: 'loginController'
    })
    .when('/register', {
        templateUrl: "assets/htm/register.htm",
        // controller: 'loginController'
    })
});
