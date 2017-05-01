var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    var db = req.db;
    var videos = db.get('videos');
    var vids = req.body;

    videos.find({_id: {$in: vids}})
        .then(function (data) {
            res.json(data);

        }).catch(function (err) {
        res.json(500, err);
    });
});

module.exports = router;