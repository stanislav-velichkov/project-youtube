var app = angular.module('mainApp');


app.controller('loginController', function ($scope, $http) {
    $scope.login = function() {


        var Indata = {'username': $scope.username, 'password': $scope.password};
        $http.post('/login', Indata)
            .then(function(response, status, headers, config) {
                console.log("Poluchix suobshtenieto");
                console.log("Nodemon raboti");
                
                console.log(typeof(response.data));

                // if(typeof(response.data) != 'string' ) {
                if(response.data != '' ) {
                    // Globalna promenliva za da mojete da q vijdate ot vsqkude v angular trqbva da q includnete i gore $rootScope
                    // $rootScope.user = response.data
                    console.log("Logna se usershno")
                }

            }, function(response, status, headers, config) {
                alert('Error');
            })
        
    }
})