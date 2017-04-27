var app = angular.module('mainApp');

app.controller('sessionController', function ($scope, $http, $rootScope, $location) {
    $scope.currentSession = function () {

        if (window.localStorage.getItem('user')) {
            $rootScope.user = JSON.parse(window.localStorage.getItem('user'));
            $rootScope.username = JSON.parse(window.localStorage.getItem('user')).username;
            menuToLoggedIn();
        } else {

        $http.post('/session')
            .then(function (response, status, headers, config) {
                console.log("Poluchix suobshtenieto");
                console.log("Nodemon raboti");

                console.log(response.data);

                // if(typeof(response.data) != 'string' ) {
                if (response.data != '') {
                    menuToLoggedIn();
                    // Globalna promenliva za da mojete da q vijdate ot vsqkude v angular trqbva da q includnete i gore $rootScope
                    $rootScope.user = response.data;
                    $rootScope.username = $rootScope.user.username;
                    console.log($rootScope.user);
                } else {
                    menuToLoggedout();
                }
            }, function (response, status, headers, config) {
                // alert('Session Error');
            });
        }
    };
});

