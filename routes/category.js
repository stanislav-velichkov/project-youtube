var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var db = req.db;
    var videos = db.get('videos');
    var category = req.body.cat;

    videos.find({tags: {$regex: category}})
        .then(function (data) {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.json('');
            }
        }).catch(function (err) {
        res.json(500, err);
    });


});

module.exports = router;