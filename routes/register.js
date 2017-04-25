var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var db = req.db;
    var users = db.get('users');
    console.log(username);
    users.find({$or: [{username: username}, {email: email}]})
        .then(function (data) {
            if (data.length > 0) {
                req.session.userId = data[0]._id;
                var user = data[0];
                res.json(user);
                //req.session.userId
            } else {
                var userDB = req.body;
                userDB.password = passwordHash.generate(userDB.password);
                users.insert(req.body);
                console.log('regna sa');
                res.json('');
            }
        }).catch(function (err) {
            res.json(500, err);
        });
});

module.exports = router;