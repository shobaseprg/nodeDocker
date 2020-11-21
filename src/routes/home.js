const express = require("express");
const app = express();
const router = express.Router();
const session = require("express-session");

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxage: 1000 * 60 * 30
  }
}));


/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.session);
  res.render('home', { name: req.session });
});


module.exports = router;
