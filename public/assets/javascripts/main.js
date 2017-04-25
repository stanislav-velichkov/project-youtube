var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "assets/htm/index.htm",
        // controller: 'loginController'
    })
    .when('/login', {
        templateUrl: "assets/htm/login.htm",
        controller: 'userController'
    })
    .when('/register', {
        templateUrl: "assets/htm/register.htm",
        controller: 'regController'
    })
    .when('/history', {
        templateUrl: "assets/htm/history.htm",
        controller: 'historyController'
    })
    .when('/profile', {
        templateUrl: "assets/htm/profile.htm",
        controller: 'profileController'
    })
});

