var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    function Video(title, description, tags, src, userId) {
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

    var video = new Video(req.body.title, req.body.description, tags, './uploads/' + req.body.title, userId);
    videos.insert(video);
    // Use the mv() method to place the file somewhere on your server
    uploadVideo.mv('./uploads/' + req.body.title, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

module.exports = router;