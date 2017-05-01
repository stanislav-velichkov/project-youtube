var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var db = req.db;
    var videos = db.get('videos');

    videos.findOneAndUpdate({_id: req.body._id}, {$set: {comments: req.body.comments}})
        .then(function () {
            res.json('COMMENT ADDED');
        }).catch(function (err) {
        res.json(500, err);
    });
});

module.exports = router;