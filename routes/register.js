var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var db = req.db;
    var users = db.get('users');
    users.insert({user: username, password: password, email: email})
        .then(function () {
            res.redirect('..#!/login');
        });
});

module.exports = router;