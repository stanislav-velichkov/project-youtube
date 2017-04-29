var app = angular.module('mainApp');

app.directive('vid', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'assets/htm/vid.htm'
    }
});


app.controller('videosController', function ($scope, $http, $rootScope, $location) {
        
        $http.get('/allVideos')
            .then(function (response, status, headers, config) {
                console.log('front end getting videos');
                if (response.data != '') {
                    $scope.videos = response.data;
                    console.log($scope.videos);
                    $rootScope.currentVideo = response.data[0];
                    console.log($rootScope.currentVideo);
                } else {
                    alert('No videos found');
                }
            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })

    });