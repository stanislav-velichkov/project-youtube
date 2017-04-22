var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    console.log("Make post login request")
    var username = req.body.username;
    var password = req.body.password;
    console.log(username + " e imeto a parolata e " + password);
    var db = req.db;
    var users = db.get('users');
    users.find({ user: username, password: password })
        .then(function (data) {
            if (data.length > 0) {
                req.session.userId = data[0]._id;
                var user = data[0];  
                console.log(user);              
                res.json(user);
                //req.session.userId
            } else {
                res.json('');
            }
        }).catch(function (err) {
            res.json(500, err);
        });
});

module.exports = router;
