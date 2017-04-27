var app = angular.module('mainApp');

app.controller('HomeCtrl',
    ["$sce", function ($sce) {
        this.config = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl("/assets/videos/kuche.mp4"),
                    type: "video/mp4"
                },
                {
                    src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
                    type: "video/webm"
                },
                {
                    src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
                    type: "video/ogg"
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
            plugins: {
                poster: "http://www.videogular.com/assets/images/videogular.png"
            }
        };
    }]);