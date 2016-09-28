var mongoose = require("mongoose");

var mongoSchema = mongoose.Schema;

var recipesSchema = new mongoSchema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  image: String,
  video: String,
  macronutrients: String,
  ingredients: {type: String, required: true},
  method: {type: String, required: true}
});

module.exports = mongoose.model('recipes', recipesSchema)
