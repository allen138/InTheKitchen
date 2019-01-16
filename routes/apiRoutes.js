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
};
