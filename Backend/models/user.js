var mongoose = require("mongoose");
var mongoSchema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var userSchema = new mongoSchema({
  username : { type:String, required: true, unique: true },
  firstname : {type:String, required: true },
  lastname : {type:String, required: true },
  email : { type:String, required: true },
  password : { type:String, required: true },
  admin : Boolean,
  created_at : { type: Date, default: Date.now }
});

userSchema.pre("save", function(next) {
  var user = this;

  //only hash the password if it has been modified or new
  if(!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }

    //Hash the password using new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }

      //override cleartext password with hash one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password , function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
