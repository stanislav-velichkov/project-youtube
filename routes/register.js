var express = require('express');
var passwordHash = require('password-hash');
var router = express.Router();

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var hashedPassword = passwordHash.generate(req.body.password);
    var email = req.body.email;
    var db = req.db;
    var users = db.get('users');

    users.find({user: username, email: email})
        .then(function (data) {
            if (data.length > 0) {
                req.session.userId = data[0]._id;
                var user = data[0];                
                res.json(user);
                //req.session.userId
            } else {
                users.insert({user: username, password: hashedPassword, email: email})
                console.log('regna sa');
                res.json('');
            }
        }).catch(function (err) {
            res.json(500, err);
        });
});

module.exports = router;