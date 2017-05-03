var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var db = req.db;
    var videos = db.get('videos');
    var searchingArray = req.body.word.split(' ');

    videos.find({
        // title: {
        //     $text: {
        //         $search: { $regex: req.body.word},
        //         $caseSensitive: false,
        //         $diacriticSensitive: true
        //     }
        // }
    })
        .then(function (data) {
            for (var index = 0; index < searchingArray.length; index++) {
                var wordReg = new RegExp(searchingArray[index], 'gi');
                var result = [];
                data.forEach(function (obj) {
                    if (obj.title.match(wordReg) != null) {
                        if (result.indexOf(obj) == -1) {
                            result.push(obj);
                        }
                    }
                });
            }
            console.log(data);
            res.json(result);
        }).catch(function (err) {
        res.json(500, err);
    });


});

module.exports = router;