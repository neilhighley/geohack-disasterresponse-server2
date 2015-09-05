var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tasks', function(req, res, next) {
    res.render('tasks', { title: 'Tasks' });
});

module.exports = router;