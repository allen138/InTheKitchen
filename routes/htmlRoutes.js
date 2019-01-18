var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // app.get("/", function(req, res) {
  //   db.Recipes.findAll({}).then(function(dbRecipes) {
  //     res.render("index", {
  //       title: dbRecipes
  //     });
  //   });
  // });
  // Load page to create a post.
  app.get("/createPost", function(req, res) {
    res.render("createPost");
  });
  //-------------------------------------------------------
  //load blog page --- only for test use --- will delete later
  app.get("/blog", function(req, res) {
    res.render("recipeBlog");
  });
  //--------------------------------------------------------
  // Load recipe page and pass in an recipe by id
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipes.findOne({ where: { id: req.params.id } }).then(function(
      dbRecipe
    ) {
      res.render("recipeBlog", {
        Recipes: dbRecipe
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
