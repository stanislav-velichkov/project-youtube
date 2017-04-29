var app = angular.module('mainApp');

app.controller('HomeCtrl', function ($sce, $rootScope) {

    console.log($rootScope.currentVideo);
    this.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl($rootScope.currentVideo.src),
                type: "video/mp4"
            }

        ],
        tracks: [
            {
                src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }
        ],
        theme: "assets/bower_components/videogular-themes-default/videogular.css",
        autoPlay: true,
        plugins: {
            // poster: $rootScope.currentVideo.snapshot
        }
    };
});