var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Load page to create a post.
  app.get("/createPost", function(req, res) {
    res.render("createPost");
  });
  // Home Page for a Logged in User
  app.get("/home", function(req, res) {
    res.render("myHome");
  });
  // My favorites page for a logged in user
  app.get("/favorites", function(req, res) {
    res.render("myFavorites");
  });
  // Render Login Page
  app.get("/login", function(req, res) {
    res.render("signInPage");
  });
  // Load recipe page and pass in an recipe by id
  app.get("/api/getrecipes/:id", function(req, res) {
    db.Recipes.findAll({ where: { cuisine: req.params.id } }).then(function(
      dbRecipe
    ) {
      //console.log(dbRecipe[0].title);
      res.render("recipeBlog", {
        Recipes: dbRecipe
      });
    });
  });
  // Routes for the buttons on the grid.
  app.get("/api/getrecipes/American", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Mexican", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Italian", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Indian", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Asain", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Breakfast", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Dessert", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  app.get("/api/getrecipes/Other", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine: American
      }
    }).then(function(dbRecipe) {
      res.render("recipeBlog", { Recipes: dbRecipe });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
