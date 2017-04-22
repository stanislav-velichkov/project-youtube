var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var userid = req.session.userId;
    console.log(req.session.userId);
    var db = req.db;
    var users = db.get('users');
    users.find({_id: userid})
        .then(function (data) {
            if (data.length > 0) {
                var user = data[0];
                console.log(user);
                res.json(user);
            } else {
                res.json('');
            }
        }).catch(function (err) {
        res.json(500, err);
    });
});

module.exports = router;
