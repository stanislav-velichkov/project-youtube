var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var id = req.body._id;
    var db = req.db;
    var users = db.get('users');

    users.findOneAndUpdate({ _id: id }, { $set: { likes: req.body.likes } })
        .then(function () {
            
        }).catch(function (err) {
            
        });
    users.findOneAndUpdate({ _id: id }, { $set: { history: req.body.history } })
    .then(function () {
            res.json('updated user')
        }).catch(function (err) {
            res.json('user update error')
        });
});

module.exports = router;