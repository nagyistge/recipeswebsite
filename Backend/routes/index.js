var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Connecting to local mongodb database call recipes
  where our api data will be stored */
MongoClient.connect("mongodb://localhost:27017/recipes", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }

  //Finds users collection in recipes database and querys everything
  var collection = db.collection('users');
  collection.findOne({}, function(err, item) {
    if(err) {
      console.log(err);
    }

  });
});

module.exports = router;
