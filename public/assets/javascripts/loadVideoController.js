var app = angular.module('mainApp');


app.controller('loadVideoController', function ($scope, $http, $rootScope, $location, $routeParams) {

    var id = $routeParams.video;
    console.log('ID ***************' + id);
    console.log('refresh');
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
                $('#showComments').html('');
                comments.forEach(function (comment) {
                    $('#showComments').append("<div><span>" + comment.user + "</span><span>" + comment.date + "</span></div><div>" + comment.comment + "</div>");
                });
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