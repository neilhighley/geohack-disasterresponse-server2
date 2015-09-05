var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/assign ', function(req, res, next) {
    res.render('assign', { title: 'Assign' });
});

module.exports = router;