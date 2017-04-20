var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var db = req.db;
    var users = db.get('users');
    users.find({user: username})
    .then(function(data) {
        if(data.length > 0) {
            req.session.userId = data[0]._id;
            res.redirect('/');
        } else {
            res.render('login', { message: 'Try again'});
        }
    })
})

module.exports = router;
