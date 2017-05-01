var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var db = req.db;
    var videos = db.get('videos');
    var id = req.body.id;
    console.log('Uploads: ');
    videos.find({userId: id}, {})
        .then(function (data) {
            res.json(data);
            console.log('uploads');
            console.log(data);

        }).catch(function (err) {
        res.json(500, err);
    });
});

module.exports = router;