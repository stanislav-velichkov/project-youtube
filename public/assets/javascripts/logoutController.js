var app = angular.module('mainApp');


app.controller('logoutController', function ($scope, $http, $rootScope, $location) {
    $scope.logout = function () {
        
        $http.get('/logout')
            .then(function (response, status, headers, config) {
                menuToLoggedout();
                $rootScope.user = '';
                console.log('destroyed session')
            }, function (response, status, headers, config) {
                // alert('Server Error');
            })

    }
});

function menuToLoggedout() {
    $(document).ready(function () {
        $("#profileButton").css('display', 'none');
        $("#logoutButton").css('display', 'none');

        $("#loginButton").css('display', 'block');
        $("#registerButton").css('display', 'block');
    });
}
