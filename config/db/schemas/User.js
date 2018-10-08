const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    //Game Points or rankings
})

//User class methods

UserSchema.method.validateUser = function(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash)
        .then((done) => {
            resolve(done)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

const User = mongoose.model('User', UserSchema);

module.exports = User;