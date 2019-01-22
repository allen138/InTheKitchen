require("../controllers/passport");
var passport = require("passport");

module.exports = function(app) {
  app.get("/auth/google/callback", passport.authenticate("google"), function(
    req,
    res
  ) {
    res.redirect("/home");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/api/current_user", function(req, res) {
    res.send(req.user);
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
