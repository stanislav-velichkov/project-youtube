var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var id = req.body._id;
    console.log('updating user');
    console.log(req.body._id);
    var db = req.db;
    var users = db.get('users');

    users.findOneAndUpdate({_id: id}, {$set: {likes: req.body.likes}});
    users.findOneAndUpdate({_id: id}, {$set: {history: req.body.history}});
});

module.exports = router;