var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    req.session.destroy();
    console.log('destroy')
});

module.exports = router;