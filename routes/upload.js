var express = require('express');
var router = express.Router();
// var ffprobe = require('ffprobe');
var fs = require('fs');
var nodeffprobe = require('node-ffprobe');
var thumbler = require('video-thumb');
// var ffmpegPath = require('../ffmpeg/').path;

var ffmpeg = require('fluent-ffmpeg');
var ffprobe = require('@ffprobe-installer/ffprobe');

var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);
// var command = ffmpeg();
console.log(ffmpeg.path, ffmpeg.version);


router.post('/', function (req, res) {

    function Video(fileName, title, description, tags, src, userId, screenshot) {
        this.fileName = fileName;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.src = src;
        this.userId = userId;
        this.screenshot = screenshot;
    }

    var db = req.db;
    var videos = db.get('videos');

    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadVideo = req.files.uploadVideo;

    var userId = req.session.userId;
    var tags = req.body.tags;
    tags = tags.split(' ');

    var fileName = req.body.title + userId + Date.now() + '.mp4';

    // Use the mv() method to place the file somewhere on your server
    uploadVideo.mv('./public/assets/videos/' + fileName, function (err) {

        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });

    ffmpeg('./public/assets/videos/' + fileName)
        .screenshots({
            timestamps: ['50%'],
            filename: fileName + '.png',
            folder: './public/assets/images/screenshots/',
            size: '320x240'
        });

    var video = new Video(fileName, req.body.title, req.body.description, tags, './public/assets/videos/' + fileName, userId, './public/assets/images/screenshots/' + fileName + '.png');
    videos.insert(video);
});

module.exports = router;