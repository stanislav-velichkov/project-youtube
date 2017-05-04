var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var db = req.db;
    var videos = db.get('videos');
    videos.find({title: {$regex: req.body.word, $options: 'gi'}})
        .then(function (data) {
            res.json(data);
        }).catch(function (err) {
        res.json(500, err);
    });
});

module.exports = router;