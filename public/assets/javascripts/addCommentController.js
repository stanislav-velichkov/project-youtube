var app = angular.module('mainApp');


app.controller('addCommentController', function ($scope, $rootScope, $http, $location) {

    $scope.addComment = function () {

        var indata = {
            comment: $('#newCommentArea').val(),
            user: $rootScope.username,
            date: (new Date()).toGMTString(),
            videoId: $rootScope.currentVideo._id
        };
        $rootScope.currentVideo.comments.push(indata);
        console.log(indata);
        $http.post('/comment', $rootScope.currentVideo)
            .then(function (response, status, headers, config) {
                console.log("potvurjdenie za komentar");
                $('#newCommentArea').val('');


            }, function (response, status, headers, config) {
                alert('Server Error');
            })

    }
});
