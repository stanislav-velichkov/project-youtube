var app = angular.module('mainApp');

app.directive('vid', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'assets/htm/vid.htm'
    }
});


app.directive('video', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'assets/htm/historyVid.htm'
    }
});

app.directive('videoUpload', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'assets/htm/uploadsVid.htm'
    }
});

app.directive('findVid', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'assets/htm/searchVid.htm'
    }
});


app.controller('videosController', function ($scope, $http, $rootScope, $location) {

    $http.get('/allVideos')
        .then(function (response, status, headers, config) {
            console.log('front end getting videos');
            if (response.data != '') {
                $scope.videos = response.data;
                console.log($scope.videos);
            } else {
                alert('No videos found');
            }
        }, function (response, status, headers, config) {
            alert('DataBase Error');
        })

});

app.controller('historyController', function ($scope, $http, $rootScope, $location) {
    if ($rootScope.username != undefined) {
        var indata = $rootScope.user.history;

        $http.post('/getHistory', indata)
            .then(function (response, status, headers, config) {
                console.log('front end getting videos');
                if (response.data != '') {
                    $scope.historyVideos = response.data;
                    console.log('eto go history');
                    console.log($scope.historyVideos);
                } else {
                    alert('No videos found');
                }
            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })
    }
});

app.controller('uploadsController', function ($scope, $http, $rootScope, $location) {
    if ($rootScope.username != undefined) {
        var indata = $rootScope.user._id;

        $http.post('/getUploads', {id: indata})
            .then(function (response, status, headers, config) {
                console.log('getting uploads');
                if (response.data != '') {
                    $scope.uploadVideos = response.data;
                    console.log('eto gi uploads');
                    console.log($scope.uploadVideos);
                }

            }, function (response, status, headers, config) {
                alert('DataBase Error');
            })
    }
});

app.controller('searchController', function ($scope, $http, $location, $rootScope) {
    $scope.search = function () {
        console.log('Eto go searcha ' + $scope.q.search);

        $http.post('/finder', {word: $scope.q.search})
            .then(function (response, status, headers, config) {
                if (response.data != '') {
                    $rootScope.searchVideos = response.data;
                    console.log($scope.searchVideos);
                }
                $location.path('/search');

            }, function (response, status, headers, config) {
                alert('Server Error');
            })
    }
});