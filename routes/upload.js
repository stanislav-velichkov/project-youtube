var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {

    function Video(fileName, title, description, tags, src, userId, snapshot) {
        this.fileName = fileName;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.src = src;
        this.userId = userId;
        this.snapshot = snapshot;
    }

    var db = req.db;
    var videos = db.get('videos');

    if (!req.files.uploadVideo)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadVideo = req.files.uploadVideo;
    let uploadPoster = req.files.poster;

    var userId = req.session.userId;
    var tags = req.body.tags;
    tags = tags.split(' ');

    var fileName = req.body.title + userId + Date.now() + '.mp4';

    // Use the mv() method to place the file somewhere on your server
    uploadVideo.mv('./public/assets/videos/' + fileName, function (err) {

        // if (err)
        //     return res.status(500).send(err);

        // res.send('File uploaded!');
    });

    var posterName = req.body.title + userId + Date.now() + '.png'
    uploadPoster.mv('./public/assets/images/screenshots/' + posterName, function (err) {

        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });

   



    var video = new Video(fileName, req.body.title, req.body.description, tags, './assets/videos/' + fileName, userId, './assets/images/screenshots/' + posterName);
    videos.insert(video);
});

module.exports = router;