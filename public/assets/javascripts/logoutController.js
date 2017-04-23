var app = angular.module('mainApp');


app.controller('logoutController', function ($scope, $http, $rootScope, $location) {
    $scope.logout = function () {
        $http.get('/logout')
            .console.log('destroyed session')
            .then(function (response, status, headers, config) {
                console.log('destroyed session')

            }, function (response, status, headers, config) {
                alert('Server Error');
            })

    }
});
//
// function menuToLogout() {
//     $(document).ready(function () {
//         $("loginButton").html("Profile").attr('id', 'profileButton').attr('href', '#!/profile');
//         $("registerButton").html("Logout").attr('id', 'logoutButton').attr('href', '/');
//     });
// }
