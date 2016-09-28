var mongoose = require("mongoose");

var mongoSchema = mongoose.Schema;

var userSchema = new mongoSchema({
  username : { type:String, required: true, unique: true },
  firstname : {type:String, required: true },
  lastname : {type:String, required: true },
  email : { type:String, required: true },
  password : { type:String, required: true },
  admin : Boolean,
  created_at : { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
