var app = angular.module('mainApp');


app.controller('loadVideoController', function ($scope, $http, $rootScope, $location, $routeParams) {

    var id = $routeParams.video;
    var indata = JSON.stringify({'_id': id});

    $.ajax({
        url: '/getVideo',
        type: 'POST',
        data: indata,
        processData: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function (result) {

            $rootScope.currentVideo = result[0];
            if ($rootScope.currentVideo) {
                $rootScope.currentVideo.tags = $rootScope.currentVideo.tags.join(' ');
                var comments = $rootScope.currentVideo.comments;
                if($rootScope.username) {
                    $('#addCommentForm').css('display', 'inline-block');
                } else {
                    $('#addCommentForm').css('display', 'none');
                }
                $('#showComments').html('');
                comments.forEach(function (comment) {

                    $('#showComments').prepend("<div class='singleCommentDiv'><div class='commentHead'><span>" + comment.user + "</span><span class='commentDate'>" + comment.date + "</span></div></br><div>" + comment.comment + "</div></div>");
                })

                    
            }

            $scope.history = function ($event) {
                var id = $event.currentTarget.getAttribute('id');
                if ($rootScope.username != undefined && $rootScope.user.history.indexOf(id) == -1) {
                    $rootScope.user.history.push(id);
                    $http.post('/updateUser', $rootScope.user);
                }
            };
        }
    });
});