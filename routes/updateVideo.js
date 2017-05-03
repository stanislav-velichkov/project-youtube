var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var id = req.body._id;
    var db = req.db;
    var videos = db.get('videos');

    videos.findOneAndUpdate({ _id: id }, { $set: { likes: req.body.likes } })
        .then(function () {
            res.json('UPDATED VIDEO LIKES');
        }).catch(function (err) {
            res.json('likes error');
        });
    // videos.findOneAndUpdate({ _id: id }, { $set: { views: req.body.views } })
    //     .then(function () {
    //         res.json(data);
    //         console.log(data);
    //     }).catch(function (err) {
    //         res.json(500, err);
    //     });
});

module.exports = router;
