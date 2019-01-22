var googleStratergy = require("passport-google-oauth20").Strategy;
var passport = require("passport");
var db = require("../models");
var google = "GOOGLE";
// var facebook = "FACEBOOK";

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.Auth.findById(id).then(function(user) {
    done(null, user);
  });
});

passport.use(
  new googleStratergy(
    {
      clientID:
        "52401465745-75h2bjmdbmu3jmi6po7m53992c32tn5o.apps.googleusercontent.com",
      clientSecret: "BWQ14HHc-gJVTFpoafKvg6D7",
      callbackURL: "http://localhost:5000/auth/google/callback"
    },
    function(accesstoken, refreshtoken, profile, done) {
      // console.log(profile);
      db.Auth.findOne({
        where: { googleId: profile.id }
      }).then(function(existingUser) {
        if (existingUser) {
          console.log("Logged In User : " + profile.id);
          console.log("Logged In User : " + existingUser.id);
          done(null, existingUser);
        } else {
          db.Auth.create({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            mode: google
          }).then(function(user) {
            console.log(user.id);
            done(null, user);
          });
        }
      });
    }
  )
);
