var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', { title: 'Home' });

});

module.exports = router;
