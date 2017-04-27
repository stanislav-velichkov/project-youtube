var express = require('express');
var router = express.Router();
var ffmpeg = require('fluent-ffmpeg');
var ffprobe = require('ffprobe');
var fs = require('fs');
var nodeffprobe = require('node-ffprobe');
var thumbler = require('video-thumb');


router.post('/', function (req, res) {

    function Video(fileName, title, description, tags, src, userId) {
        this.fileName = fileName;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.src = src;
        this.userId = userId;
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

    thumbler.extract('./public/assets/videos/' + fileName, fileName + '.png', '00:00:05', '200x125', function (image) {
        console.log(image);
        console.log('Screenshot');
    });

    // nodeFF('./public/assets/videos/' + fileName)
    //     .screenshots({
    //         timestamps: [30.5, '50%', '01:10.123'],
    //         filename: fileName + '.png',
    //         folder: './public/assets/images/screenshots/',
    //         size: '320x240'
    //     });

    // var proc = nodeFF('./public/assets/videos/' + fileName)
    //     .on(fileName + '.png', function (filename) {
    //         console.log('screenshots are ' + filename.join(', '));
    //     })
    //     .on('end', function () {
    //         console.log('screenshots were saved');
    //     })
    //     .on('error', function (err) {
    //         console.log('an error happened: ' + err.message);
    //     })
    //     .takeScreenshots({count: 2, timemarks: ['00:00:02.000', '6'], size: '150x100'}, './public/assets/images/screenshots/');

    var video = new Video(fileName, req.body.title, req.body.description, tags, './public/assets/videos/' + fileName, userId);
    videos.insert(video);
});

module.exports = router;