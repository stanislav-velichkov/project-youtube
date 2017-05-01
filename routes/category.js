var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log('Categorying: ');
    var db = req.db;
    var videos = db.get('videos');
    var category = req.body.cat;


    videos.find({})
        .then(function (data) {
            
                var result = [];
                data.forEach(function (obj) {
                    if (obj.tags.indexOf(category) != -1) {
                        if (result.indexOf(obj) == -1) {
                            result.push(obj);
                        }
                    }
                });

            if (result.length > 0) {
                res.json(result);
            } else {
                res.json('');
            }
        }).catch(function (err) {
            res.json(500, err);
        });


});

module.exports = router;