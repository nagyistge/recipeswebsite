var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find(function (err, users) {
    if (err) {
      return next(err);
    }
    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  user.create(req.body, function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

module.exports = router;
