var app = angular.module('mainApp');

app.controller('searchController', function ($scope, $http, $location) {
    $scope.search = function () {
        console.log('Eto go searcha ' + $scope.q.search);

        $http.post('/finder', {word: $scope.q.search})
            .then(function (response, status, headers, config) {
                $('#find').val('');
            }, function (response, status, headers, config) {
                alert('Server Error');
            })
    }
});
