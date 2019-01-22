require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var cookieSession = require("cookie-session");

var db = require("./models");
var app = express();
var PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["my secret Key"]
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/authRoutes")(app);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
