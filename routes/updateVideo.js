var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var id = req.body._id;
    var db = req.db;
    var videos = db.get('videos');

    videos.findOneAndUpdate({_id: id}, {$set: {likes: req.body.likes}});
    videos.findOneAndUpdate({_id: id}, {$set: {views: req.body.views}});
});

module.exports = router;
