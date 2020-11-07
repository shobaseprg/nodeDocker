const express = require("express");
const router = express.Router();

/* GET users listing. */
router.post("/", function(req, res, next) {
  res.render("home", {name: req.body.name});
});

module.exports = router;
