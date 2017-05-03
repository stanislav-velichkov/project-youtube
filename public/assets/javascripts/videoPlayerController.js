var app = angular.module('mainApp');

app.controller('HomeCtrl', function ($sce, $rootScope, $scope, $http) {
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
    $scope.like = function () {

        if ($rootScope.username != undefined) {
            if ($rootScope.user.likes.indexOf($rootScope.currentVideo._id) == -1) {

                $rootScope.currentVideo.likes += 1;
                $rootScope.user.likes.push($rootScope.currentVideo._id);

                $http.post('/updateUser', $rootScope.user)
                    .then(function (response, status, headers, config) {

                    }, function (response, status, headers, config) {
                        // alert('Session Error');
                    });

                $http.post('/updateVideo', $rootScope.currentVideo)
                    .then(function (response, status, headers, config) {

                    }, function (response, status, headers, config) {
                        // alert('Session Error');
                    });
            } else {
                $rootScope.currentVideo.likes -= 1;
                var videoIndex = $rootScope.user.likes.indexOf($rootScope.currentVideo._id);

                $rootScope.user.likes.splice(videoIndex, 1);

                $http.post('/updateUser', $rootScope.user)
                    .then(function (response, status, headers, config) {

                    }, function (response, status, headers, config) {
                        // alert('Session Error');
                    });

                $http.post('/updateVideo', $rootScope.currentVideo)
                    .then(function (response, status, headers, config) {

                    }, function (response, status, headers, config) {
                        // alert('Session Error');
                    });
            }
        }
    };
});