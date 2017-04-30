var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var id = req.body._id;
    console.log(req.body._id);
    console.log('getting video');
    var db = req.db;
    var videos = db.get('videos');
    videos.find({_id: id}, {})
        .then(function (data) {
            console.log('Zaqvkata rabiti');
            res.json(data);

        }).catch(function (err) {
        res.json(500, err);
    });

    videos.find({_id: id}, {})
        .then(function (data) {
            var views = data[0].views + (1 / 4);
            console.log(views);
            videos.findOneAndUpdate({_id: id}, {$set: {views: views}})
        })
});

module.exports = router;
