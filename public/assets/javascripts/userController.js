var app = angular.module('mainApp');

app.controller('userController', function ($scope, $http, $rootScope, $location) {
    $scope.loggedInUser = function () {
        if($rootScope.username != undefined) {
            $location.path('/');
            return true;
        } else {
            $location.path('/login');
            return false; 
        }  
    }
    console.log($scope.loggedInUser());
});

app.controller('regController', function ($scope, $http, $rootScope, $location) {
    $scope.registeredUser = function () {
        if ($rootScope.username != undefined) {
            $location.path('/');
            return true;
        } else {
            $location.path('/register');
            return false;
        }
    }
    console.log($scope.registeredUser());
});

app.controller('historyController', function ($scope, $http, $rootScope, $location) {
    $scope.loggedInHistory = function () {
        console.log(!$rootScope.username);
        if($rootScope.username != undefined) {
            $location.path('/history');
            return true;
        } else {
            $location.path('/login');
            return false; 
        }  
    }
    console.log($scope.loggedInHistory());
});

app.controller('profileController', function ($scope, $http, $rootScope, $location) {
    $scope.loggedInProfile = function () {
        if($rootScope.username != undefined) {
            $location.path('/profile');
            return true;
        } else {
            $location.path('/login');
            return false; 
        }  
    }
    console.log($scope.loggedInProfile());
});

