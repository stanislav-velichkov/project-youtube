var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var db = req.db;
    var users = db.get('users');
    users.find({ username: username })
        .then(function (data) {
            if (data.length > 0) {
                req.session.userId = data[0]._id;
                var hashedPassword = data[0].password;

                if (passwordHash.verify(password, hashedPassword)) {
                    var user = data[0];
                    res.json(user);
                } else {
                    res.json('');
                }
                //req.session.userId
            } else {
                res.json('');
            }
        }).catch(function (err) {
            res.json(500, err);
        });
});

module.exports = router;
