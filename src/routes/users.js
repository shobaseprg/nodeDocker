const express = require('express');
const app = express();

const router = express.Router();
const { check, validationResult } = require('express-validator');
// const session = require("express-session");

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.render('users/login');
});

router.get('/signup', function (req, res, next) {
  let messages = [];
  res.render('users/signup', { messages: messages })
});


module.exports = router;
