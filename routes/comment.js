var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var comment = req.body.comment;
    var user = req.body.user;
    var date = req.body.date;

    var db = req.db;
    var comments = db.get('comments');

    comments.insert({comment: comment, user: user, date: date})
        .then(function (data) {
            
                res.json('COMMENT ADDED');
                //req.session.userId
        }).catch(function (err) {
            res.json(500, err);
        });
});

module.exports = router;