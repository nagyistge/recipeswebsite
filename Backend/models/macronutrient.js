var mongoose = require("mongoose");

var mongoSchema = mongoose.Schema;

var macroSchema = new mongoSchema({
    _recipe: {type: mongoSchema.Types.ObjectId, ref: 'Recipe'},
    calories: {type: Number, required: true},
    protein: {type: Number, required: true},
    carbohydrates: {type: Number, required: true},
    fats: {type: Number, required: true}
});

module.exports = mongoose.model('Macronutrient', macroSchema)
