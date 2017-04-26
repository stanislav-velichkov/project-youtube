var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var db = req.db;
    var videos = db.get('videos');
    console.log(name);
    videos.insert(req.body);
    console.log('upload video object');
    res.json('');
});

module.exports = router;