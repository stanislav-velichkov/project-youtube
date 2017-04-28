var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var id = req.body._id;
    console.log('getting video');
    var db = req.db;
    var videos = db.get('videos');
    videos.find({_id: id})
        .then(function (data) {

                res.json(data);

        }).catch(function (err) {
            res.json(500, err);
        });
});

module.exports = router;
