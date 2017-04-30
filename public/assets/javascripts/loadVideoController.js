var app = angular.module('mainApp');


app.controller('loadVideoController', function ($scope, $http, $rootScope, $location) {
    // if(!$rootScope.currentVideo) {
    //     console.log('refresh')
    // var indata = { '_id': window.sessionStorage.getItem('currentVideo') };
    // console.log(indata);
    // // console.log(indata);
    // $http.post('/getVideo', indata)
    //     .then(function (response, status, headers, config) {

    //         $rootScope.currentVideo = response.data[0];
    //         console.log("Eto go obekta: ");
    //         console.log($rootScope.currentVideo);
    //         // $location.path("/video").search(window.sessionStorage.getItem('currentVideo'));


    //     }, function (response, status, headers, config) {
    //         alert('DataBase Error');
    //     })
    // }
});