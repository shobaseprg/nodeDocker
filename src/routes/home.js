const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');


/* GET users listing. */
router.post("/", [
  // checkメソッドを使用してバリデーションを実行
  check('name').not().isEmpty()
],
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.render("home", { name: req.body.name });
  });

module.exports = router;
