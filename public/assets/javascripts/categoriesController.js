var app = angular.module('mainApp');


app.controller('categoriesController', function ($scope, $http, $rootScope, $location, $routeParams) {



    $scope.getCat = function ($event) {
        var cat = $event.currentTarget.text;
        cat = cat.trim().toLowerCase();
        var indata = {cat: cat};
        
         $http.post('/category', indata)
            .then(function (response, status, headers, config) {
                if (response.data != '') {
                    $rootScope.searchVideos = response.data;
                    console.log($rootScope.searchVideos);
                } else {
                    $rootScope.searchVideos = '';
                }
                $location.path('/search');

            }, function (response, status, headers, config) {
                alert('Server Error');
            })
        
    };
});
