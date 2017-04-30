var app = angular.module('mainApp');


app.controller('addCommentController', function ($scope, $rootScope, $http, $location) {

    $scope.addComment = function() {

        var indata = {comment: $('#newCommentArea').val(), user: $rootScope.username, date: Date.now()};
        console.log(indata);
        $http.post('/comment', indata)
            .then(function(response, status, headers, config) {
                console.log("potvurjdenie za komentar");
                $('#newCommentArea').val('');


            }, function(response, status, headers, config) {
                alert('Server Error');
            })

    }
});
