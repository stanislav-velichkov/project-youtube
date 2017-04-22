var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "assets/htm/index.htm",
        // controller: 'loginController'
    })
    .when('/login', {
        templateUrl: "assets/htm/login.htm",
        // controller: 'loginController'
    })
    .when('/register', {
        templateUrl: "assets/htm/register.htm",
        // controller: 'loginController'
    })
    .when('/history', {
        templateUrl: "assets/htm/history.htm"
    })
});

