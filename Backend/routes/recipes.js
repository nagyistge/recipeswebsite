var express = require('express');
var macroModel = require('../models/macronutrient');
var recipeModel = require('../models/recipes');

module.exports = function(router) {

    router.get('/getRecipes', function(req, res) {
        recipeModel.find(function(err, recipe) {
            if (err) {
                res.send(err);
            }
            res.json(recipe);
        });
    });

    router.delete('/deleteRecipe/:recipe_id', function(req, res) {
      recipeModel.remove({_id: req.params.recipe_id}, function(err) {
        if (err) {
          res.send(err);
        }
        res.json({sucess: true, message: "Successfully delelted" });
      });
    });

    router.get('/getMacro', function(req, res) {
      macroModel.find(function(err, macro) {
        if(err)  {
          res.send(err);
        }
        res.json(macro);
      });
    });

    router.post('/addRecipe', function(req, res) {

        var recipe = new recipeModel();

        recipe.name = req.body.name;
        recipe.category = req.body.category;
        recipe.ingredients = req.body.ingredients;
        recipe.method = req.body.method;

        var macro = new macroModel({
            calories: req.body.calories,
            protein: req.body.protein,
            carbohydrates: req.body.carbohydrates,
            fats: req.body.fats
        });


        recipe.save(function(err) {
            if (err) {
                res.send(err);
            }

            macro._recipe = recipe._id;
            macro.save(function(err) {
                if (err) {
                    res.send(err);
                }

                recipe.macronutrients.push(macro);
                recipe.save(function(err) {
                  if(err) {
                    res.send(err);
                  }

                  res.json(200, {message: 'sucess'});
                })

            });
        });

    });

};
