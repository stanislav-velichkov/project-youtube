var app = angular.module('mainApp');


app.controller('addCommentController', function ($scope, $rootScope, $http, $location) {

    $('#newCommentArea').bind('input propertychange', function () {

        $("#commentsErr").css('display', 'none');

    });


    $scope.addComment = function () {
        if ($('#newCommentArea').val().trim().length > 0) {
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
                    $('#newCommentArea').val('');

                }, function (response, status, headers, config) {
                    alert('Server Error');
                })
        } else {
            $('#commentsErr').css('display', 'block');
        }
    }
});
