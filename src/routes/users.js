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

router.post("/signup", [
  // checkメソッドを使用してバリデーションを実行
  check('name').not().isEmpty().withMessage('名前は必須です'),
  check('email').not().isEmpty().withMessage('メールは必須です'),
  check('password').not().isEmpty().withMessage('パスワードは必須です'),
  check('password').isLength({ min: 7 }).withMessage('パスワードは７文字以上です'),
  check('password').
    custom((value, { req }) => {
      if (req.body.password === req.body.confirmPassword) {
        return true;
      }
    }).withMessage('パスワードが一致しません。')
],
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let messages = [];
      errors.errors.forEach((error) => {
        messages.push(error.msg);
      });
      res.render('users/signup', { messages: messages })
    } else {
      req.session.name = req.body.name;
      console.log(req.session);
      res.redirect("/home");
    }
  });

module.exports = router;
