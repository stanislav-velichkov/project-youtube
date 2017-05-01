var app = angular.module('mainApp');


app.controller('registerController', function ($scope, $http, $location) {

    $scope.register = function() {

        var indata = new User($scope.user.username, $scope.user.email, $scope.user.password);
        console.log(indata);
        $http.post('/register', indata)
            .then(function(response, status, headers, config) {
                console.log("Poluchix suobshtenieto");
                console.log("Nodemon raboti");
                
                console.log(typeof(response.data));
                console.log(response.data);
                // if(typeof(response.data) != 'string' ) {
                if(response.data != '' ) {
                    $('#regErrorMsg').html('Username or Email already in use!');
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
