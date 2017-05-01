var app = angular.module('mainApp');


app.controller('loginController', function ($scope, $http, $rootScope, $location) {
    $scope.login = function () {


        var indata = { 'username': $scope.user.username, 'password': $scope.user.password };
        $http.post('/login', indata)
            .then(function (response, status, headers, config) {
                console.log("Poluchix suobshtenieto");
                console.log("Nodemon raboti");

                console.log(typeof (response.data));

                // if(typeof(response.data) != 'string' ) {
                if (response.data != '') {
                    // Globalna promenliva za da mojete da q vijdate ot vsqkude v angular trqbva da q includnete i gore $rootScope
                    $rootScope.user = response.data;
                    $rootScope.username = $rootScope.user.username;
                    window.sessionStorage.setItem('user', JSON.stringify(response.data));

                    console.log($rootScope.user);
                    $location.path("/");
                    $('#homeBtn').addClass('active');

                    $('#popularBtn').removeClass('active');
                    $('#historyBtn').removeClass('active');
                    $('#bestOfBtn').removeClass('active');
                    $('#profBtn').removeClass('active');
                    menuToLoggedIn();
                } else {
                    $('#loginErrorMsg').html('Username or Password invalid!');
                }

            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })

    }
});

