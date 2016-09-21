var mongoose = require("mongoose");

var mongoSchema = mongoose.Schema;

var userSchema = {
  username : { type:String, required: true, unique: true },
  firstname : String,
  lastname : String,
  email : { type:String, required: true },
  password : { type:String, required: true },
  admin : Boolean,
  created_at : { type: Date, default: Date.now }
};

module.exports = mongoose.model('User', userSchema);
