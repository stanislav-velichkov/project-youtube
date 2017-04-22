var app = angular.module('mainApp');


app.controller('sessionController', function ($scope, $http, $rootScope, $location) {
    $scope.currentSession = function () {

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
                    console.log($rootScope.user);
                }
            }, function (response, status, headers, config) {
                alert('Server Error');
            })

    }
})

function menuToLoggedIn() {
    $(document).ready(function () {
        $("#loginButton").html("Profile").attr('id', 'profileButton').attr('href', '#!/profile');
        $("#registerButton").html("Logout").attr('id', 'logoutButton').attr('href', '/');
    });
}