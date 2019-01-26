var multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function(req, file, cb) {
    if (req.Recipes) {
      // TODO: consider adding file type extension
      return cb(null, req.Recipes.title.toString());
    }
    // fallback to the original name if you don't have a book attached to the request yet.
    return cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
var db = require("../models");

module.exports = function(app) {
  /// ****** this if for Recipe
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
    db.Recipes.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
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

  //post photo
  app.post("/photo", upload.single("avatar"), function(req, res) {
    console.log(req.body); // form files
    res.status(204).end();
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
  // log errs
  app.use(function(err, req, res, next) {
    console.log(err);
    next(err);
  });
};
