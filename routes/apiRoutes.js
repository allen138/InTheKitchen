var express = require('express')
var multer  = require('multer')
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
var upload = multer({ dest: './public/uploads' })
var db = require("../models");

module.exports = function(app) {
  /// ****** this if for Recipe
  // Get all recipe
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Create a new example
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Delete an example by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipe.destroy({ where: { id: req.params.id } }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
/// ****** this if for Chef

  // Get all recipe
  app.get("/api/chefs", function(req, res) {
    db.Chef.findAll({}).then(function(dbChefs) {
      res.json(dbChefs);
    });
  });

  // Create a new example
  app.post("/api/chefs", function(req, res) {
    db.Chef.create(req.body).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  // Delete an example by id
  app.delete("/api/chefs/:id", function(req, res) {
    db.Chef.destroy({ where: { id: req.params.id } }).then(function(dbChef) {
      res.json(dbChef);
    });
  });
//post photo
app.post('/photo', upload.single('avatar'), function (req, res, next) {
    console.log(req.body);  // form fields
    console.log("body");
    console.log(req.files); // form files
    console.log("files");
    res.status(204).end()
  })
};