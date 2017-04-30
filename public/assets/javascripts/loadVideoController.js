var app = angular.module('mainApp');


app.controller('loadVideoController', function ($scope, $http, $rootScope, $location, $routeParams) {

    var id = $routeParams.video;
    console.log('ID ***************' + id);
    console.log('refresh');
    var indata = JSON.stringify({'_id': id});
    console.log(indata);

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
                    $('#showComments').append("<div class='singleCommentDiv'><div><span>" + comment.user + "</span><span class='commentDate'>" + comment.date + "</span></div></br><div>" + comment.comment + "</div></div>");
                })
            }
        }
    });
});