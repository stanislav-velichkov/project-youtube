var app = angular.module('mainApp');


app.controller('currentVideoController', function ($scope, $http, $rootScope, $location) {
    $scope.getVideo = function ($event) {
        
        var id = $event.currentTarget.getAttribute('id');

        window.sessionStorage.setItem('currentVideo', id);



        var indata = {'_id': id};
        console.log("INDATA --------------");
        console.log(indata);
        // console.log(indata);
        $http.post('/getVideo', indata)
            .then(function (response, status, headers, config) {

                $rootScope.currentVideo = response.data[0];
                console.log("Eto go obekta: ");
                console.log($rootScope.currentVideo);
                $location.path("/video").search(window.sessionStorage.getItem('currentVideo'));


            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })

    }
});