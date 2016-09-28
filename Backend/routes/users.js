var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});


});

module.exports = router;
