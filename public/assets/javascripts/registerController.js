var app = angular.module('mainApp');


app.controller('registerController', function ($scope, $http, $location) {

    $scope.register = function() {

        var Indata = {'username': $scope.user.username, 'password': $scope.user.password, 'email': $scope.user.email};
        $http.post('/register', Indata)
            .then(function(response, status, headers, config) {
                console.log("Poluchix suobshtenieto");
                console.log("Nodemon raboti");
                
                console.log(typeof(response.data));
                console.log(response.data);
                // if(typeof(response.data) != 'string' ) {
                if(response.data != '' ) {
                    alert('Username Exists');
                    // Globalna promenliva za da mojete da q vijdate ot vsqkude v angular trqbva da q includnete i gore $rootScope
                    // $rootScope.user = response.data
                } else {
                    console.log('registered')
                    $location.path("/login");
                }

            }, function(response, status, headers, config) {
                alert('Server Error');
            })

    }
});
