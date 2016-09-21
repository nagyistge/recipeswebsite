var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/recipes');

var mongoSchema = mongoose.Schema;

var usersSchema = {
  "username" : String,
  "firstname": String,
  "lastname": String,
  "email": String,
  "password": String
};

module.exports = mongoose.model('userLogin', usersSchema);
