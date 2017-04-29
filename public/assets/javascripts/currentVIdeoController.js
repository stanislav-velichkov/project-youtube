var app = angular.module('mainApp');


app.controller('currentVideoController', function ($scope, $http, $rootScope, $location) {
    $scope.getVideo = function () {

        var id = $('#videoID').text()
        var indata = {'_id': id};
        console.log(indata);
        // console.log(indata);
        $http.post('/getVideo', indata)
            .then(function (response, status, headers, config) {

                $rootScope.currentVideo = response.data[0];
                console.log("Eto go obekta: ");
                console.log($rootScope.currentVideo);
                $location.path("/video");


            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })

    }
});