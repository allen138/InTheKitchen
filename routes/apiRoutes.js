var db = require("../models");
var cloudinary = require("cloudinary").v2;
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

module.exports = function(app) {
  // Get all recipe
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({ where: { id: req.params.id } }).then(function(
      dbRecipes
    ) {
      res.json(dbRecipes);
    });
  });

  // Create a new example
  app.post("/api/newrecipes", function(req, res) {
    multipartMiddleware(req, res, () => {
      if (req.files && req.files.image && req.files.image.path) {
        var imageFile = req.files.image.path;
        cloudinary.uploader
          .upload(imageFile, { tags: "recipe_image" })
          .then(image => {
            db.Recipes.create({
              cuisine: req.body.cuisine,
              title: req.body.title,
              image: image.secure_url,
              desc: req.body.description,
              AuthId: req.user.id
            }).then(res.redirect("/home"));
          })
          .catch(err => console.log(err));
      } else {
        res.redirect("/createPost");
      }
    });
  });

  //update example
  app.put("/api/updateRecipe", function(req, res) {
    console.log(req.body);
    db.Recipes.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  // Delete an example by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipes.destroy({ where: {} }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
  /// ****** this if for Chef

  // Get all chefs
  app.get("/api/chefs", function(req, res) {
    db.Chefs.findAll({}).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  // Create a new chefs
  app.post("/api/chefs", function(req, res) {
    db.Chefs.create(req.body).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  // Delete an example by id
  app.delete("/api/chefs/:id", function(req, res) {
    db.Chefs.destroy({ where: { id: req.params.id } }).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  //post likes
  app.post("/api/newfavorite", function(req, res) {
    db.Favorites.create(req.body).then(function(dbFav) {
      res.json(dbFav);
    });
  });

  var userId;

  //delete a favorite
  app.delete("/api/deletefavorite/:id", function(req, res) {
    userId = req.user.id;
    console.log(userId);
    db.Favorites.destroy({
      where: {
        RecipeId: req.params.id,
        AuthorId: userId
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
  // delete your recipe
  app.delete("/api/deleteRecipe/:id", function(req, res) {
    userId = req.user.id;
    console.log(userId);
    db.Recipes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });
  // log errs
  app.use(function(err, req, res, next) {
    console.log(err);
    next(err);
  });
};
