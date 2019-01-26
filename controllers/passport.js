var googleStratergy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
var passport = require("passport");
var db = require("../models");
var google = "GOOGLE";
var facebook = "FACEBOOK";

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.Auths.findById(id).then(function(user) {
    done(null, user);
  });
});

// config
passport.use(
  new FacebookStrategy(
    {
      clientID: "2380051518732127",
      clientSecret: "64bc75ec67ebe1741d4f3108e4cfd731",
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "displayName", "name", "gender", "photos", "emails"]
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("FaceBook ID" + profile.id);
      console.log("FaceBook Last Name" + profile.name.familyName);
      console.log("FaceBook First Name" + profile.name.givenName);
      console.log("FaceBook Photo:::" + profile.photos[0].value);
      db.Auths.findOne({
        where: { authModeID: profile.id }
      }).then(function(existingUser) {
        if (existingUser) {
          console.log("Logged In User : " + profile.id);
          console.log("Logged In User : " + existingUser.id);
          done(null, existingUser);
        } else {
          db.Auths.create({
            authModeID: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            avatar: profile.photos[0].value,
            authMode: facebook
          }).then(function(user) {
            console.log(user.id);
            done(null, user);
          });
        }
      });
    }
  )
);

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
      db.Auths.findOne({
        where: { authModeID: profile.id }
      }).then(function(existingUser) {
        if (existingUser) {
          console.log("Logged In User : " + profile.id);
          console.log("Logged In User : " + existingUser.id);
          done(null, existingUser);
        } else {
          db.Auths.create({
            authModeID: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            authMode: google
          }).then(function(user) {
            console.log(user.id);
            done(null, user);
          });
        }
      });
    }
  )
);
