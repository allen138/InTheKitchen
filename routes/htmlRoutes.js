var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render("index");
    }
  });
  // Load page to create a post.
  app.get("/createPost", function(req, res) {
    if (req.user) {
      res.render("createPost");
    } else {
      res.redirect("/login");
    }
  });
  var userId;
  // Home Page for a Logged in User
  app.get("/home", function(req, res) {
    console.log("Logged In User ID:" + req.user.id);
    userId = req.user.id;
    console.log("Logged In firstName:" + req.user.firstName);
    console.log("Logged In LastName:" + req.user.lastName);
    console.log("Logged In Avatar:" + req.user.avatar);
    res.render("myHome");
  });
  var array = [];
  // My favorites page for a logged in user
  app.get("/favorites", function(req, res) {
    db.Favorites.findAll({
      where: { AuthorId: userId },
      attributes: [["RecipeId", "id"]]
    })
      .then(function(dbRecipe) {
        for (i = 0; i < dbRecipe.length; i++) {
          array.push(dbRecipe[i].dataValues.id);
        };
      })
      .then(function() {
        db.Recipes.findAll({
          where: { id: array }
        }).then(function(data) {
          res.render("myFavorites", { Recipes: data });
        });;
      });
  });
  // My posted recipes for a logged in user
  app.get("/yourrecipes", function(req, res) {
    console.log(userId);
    var modeltoUse = db.Auths;
    db.Recipes.findAll({
      include: {
        model: modeltoUse,
        where: { id: userId }
      }
    }).then(function(dbRecipe) {
      res.render("yourRecipes", { Recipes: dbRecipe });
    });
  });
  // Render Login Page
  app.get("/login", function(req, res) {
    console.log(req.user);
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
