var express = require('express');
var macroModel = require('../models/macronutrient');
var recipeModel = require('../models/recipes');

module.exports = function(router) {

  router.get('/getRecipes', function(req, res) {
    recipeModel.find(function(err, recipe) {
      if(err) {
        res.send(err);
      }
      res.json(recipe);
    });
  });

  router.post('/addRecipe', function(req, res) {

    var recipe = new recipeModel();

    recipe.name = req.body.name;
    recipe.category = req.body.category;
    recipe.ingredients = req.body.ingredients;
    recipe.method = req.body.method;

    recipe.save(function (err) {
      if (err) {
        res.send(err);
      }

      var macro = new macroModel({
        _recipe: recipe._id,
        calories: req.body.calories,
        protein: req.body.protein,
        carbohydrates: req.body.carbohydrates,
        fats: req.body.fats
      });


      macro.save(function (err) {
        if(err) {
          res.send(err);
      }

      recipe.macronutrients.push(macro);
      
      });

      res.json({
          message: "Recipe has been saved"
      });
    });

    recipeModel.
  });

};
