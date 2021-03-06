var express = require('express');
var router = express.Router();

const passport = require('passport')
const registerNewUser = require('../api/registerNewUser')

router.post('/register', (req, res) => {

    registerNewUser(req.data)
    .then((result) => {
        console.log("\x1b[32m", result)
        res.send(result)
    })

    .catch((err) => {
        console.log("\x1b[31m", err)
        res.send(err)
    })
})

//Login strategies /login/[strategyName]

router.post('/login/local', passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/login'
}))

//Checks if user is logged in.

router.get('/checkUser', (req, res) => {
    if(req.user) {
        res.send(req.user)
    } else {
        res.send(false)
    }
})


module.exports = router