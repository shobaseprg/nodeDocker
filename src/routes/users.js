const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});

module.exports = router;
