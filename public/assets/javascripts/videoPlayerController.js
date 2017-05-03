var app = angular.module('mainApp');

app.controller('HomeCtrl', function($sce, $rootScope, $scope, $http) {
    this.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl($rootScope.currentVideo.src),
                type: "video/mp4"
            }
        ],
        theme: "assets/bower_components/videogular-themes-default/videogular.css",
        autoPlay: true,
    };
    $scope.like = function() {

        if ($rootScope.username != undefined) {

            var videoIndex = $rootScope.user.likes.indexOf($rootScope.currentVideo._id);
            if (videoIndex == -1) {

                $rootScope.currentVideo.likes += 1;
                $rootScope.user.likes.push($rootScope.currentVideo._id);

            } else {
                $rootScope.currentVideo.likes -= 1;


                $rootScope.user.likes.splice(videoIndex, 1);
            }
            $http.post('/updateUser', $rootScope.user)
                .then(function(response, status, headers, config) {
                    console.log(response);
                }, function(response, status, headers, config) {
                    // alert('Session Error');
                    console.log(response);
                });

            $http.post('/updateVideo', $rootScope.currentVideo)
                .then(function(response, status, headers, config) {
                    console.log(response);
                }, function(response, status, headers, config) {
                    // alert('Session Error');
                    console.log(response);
                });
        }
    }
});