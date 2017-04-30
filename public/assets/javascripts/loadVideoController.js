var app = angular.module('mainApp');


app.controller('loadVideoController', function ($scope, $http, $rootScope, $location, $routeParams) {

    if (!$rootScope.currentVideo) {
        var id = $routeParams.video;
        console.log('ID ***************' + id);
        console.log('refresh')
        var indata = JSON.stringify({ '_id': id });
        console.log(indata);
        // console.log(indata);

        $.ajax({
            url: '/getVideo',
            type: 'POST',
            data: indata,
            processData: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (result) {
                console.log(result);
                $rootScope.currentVideo = result[0];
            }
        });



    }

});