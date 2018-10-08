var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const User = require('../db/schemas/User')

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({username: username}) 
        .then((user) => {
            user = new User({...user})

            /* if (!user) {
                return done(null, false, { message: 'Incorrect username.' })
            } */ 

            user.validPassword(password)
            .then((done) => {
                if(done) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Incorrect password.' })
                }
            })
            .catch((err) => {
                console.log("\x1b[31m", err)
            })
        })
        .catch((err) => {
            return done(err)
        })
    }
))