var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "assets/htm/index.htm",
        // controller: 'loginController'
    })
    .when('/login', {
        templateUrl: "assets/htm/login.htm",
        resolve: {
            'check': function($rootScope, $location) {
                if($rootScope.username != undefined) {
                    $location.path('/');
                }
            }
        }
    })
    .when('/register', {
        templateUrl: "assets/htm/register.htm",
        resolve: {
            'check': function($rootScope, $location) {
                if($rootScope.username != undefined) {
                    $location.path('/');
                }
            }
        }
    })
    .when('/history', {
        templateUrl: "assets/htm/history.htm",
        resolve: {
            'check': function($rootScope, $location) {
                if($rootScope.username == undefined) {
                    $location.path('/login');
                }
            }
        }
    })
    .when('/profile', {
        templateUrl: "assets/htm/profile.htm",
        resolve: {
            'check': function($rootScope, $location) {
                if($rootScope.username == undefined) {
                    $location.path('/login');
                }
            }
        }
    })
});

