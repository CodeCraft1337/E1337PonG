//Will need to be updated when we'll get URL for server

/*
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')

const User = require('../db/schemas/User')

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
*/