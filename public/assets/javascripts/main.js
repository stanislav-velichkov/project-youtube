var app = angular.module('mainApp', [
    'ngRoute',
    "ngSanitize",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.buffering",
    "com.2fdevs.videogular.plugins.poster"
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "assets/htm/index.htm",
        })
        .when('/login', {
            templateUrl: "assets/htm/login.htm",
            resolve: {
                'check': function ($rootScope, $location) {
                    if ($rootScope.username != undefined) {
                        $location.path('/');
                        $('#homeBtn').addClass('active');

                        $('#popularBtn').removeClass('active');
                        $('#historyBtn').removeClass('active');
                        $('#bestOfBtn').removeClass('active');
                        $('#profBtn').removeClass('active');
                    }
                }
            }
        })
        .when('/register', {
            templateUrl: "assets/htm/register.htm",
            resolve: {
                'check': function ($rootScope, $location) {
                    if ($rootScope.username != undefined) {
                        $location.path('/');
                        $('#homeBtn').addClass('active');

                        $('#popularBtn').removeClass('active');
                        $('#historyBtn').removeClass('active');
                        $('#bestOfBtn').removeClass('active');
                        $('#profBtn').removeClass('active');
                    }
                }
            }
        })
        .when('/history', {
            templateUrl: "assets/htm/history.htm",
            resolve: {
                'check': function ($rootScope, $location) {
                    if ($rootScope.username == undefined) {
                        $location.path('/login');
                        $('#profBtn').addClass('active');

                        $('#popularBtn').removeClass('active');
                        $('#historyBtn').removeClass('active');
                        $('#bestOfBtn').removeClass('active');
                        $('#homeBtn').removeClass('active');
                    }
                }
            }
        })
        .when('/profile', {
            templateUrl: "assets/htm/profile.htm",
            resolve: {
                'check': function ($rootScope, $location) {
                    if ($rootScope.username == undefined) {
                        $location.path('/login');
                        $('#profBtn').addClass('active');

                        $('#popularBtn').removeClass('active');
                        $('#historyBtn').removeClass('active');
                        $('#bestOfBtn').removeClass('active');
                        $('#homeBtn').removeClass('active');
                    }
                }
            }
        })
        .when('/video/:video', {
            templateUrl: "assets/htm/video.htm",
            controller: 'loadVideoController'
        })
        .when('/search', {
            templateUrl: "assets/htm/search.htm",
            controller: 'searchController'
        })
});