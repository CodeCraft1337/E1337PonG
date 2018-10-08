const bcrypt = require('bcryptjs')
const User = require('../config/db/schemas/User')

const registerNewUser = ({username, password, passwordConfirm, email}) => {
    return new Promise((resolve, reject) => {

        validatePassword(password, passwordConfirm)

        .then((hash) => {
            checkForDuplicates(username, email)

            .then(() => {
                saveUser({username, hash, email})

                .then((result) => {
                    resolve(result)
                })

                .catch((err) => {
                    reject(err)
                })

            })

            .catch((err) => {
                reject(err)
            })

        })
        .catch((err) => {
            reject(err)
        })
    })
}

module.exports = registerNewUser

const validatePassword = (password, passwordConfirm) => {
    return new Promise((resolve, reject) => {
        if(password === passwordConfirm) {
            bcrypt.genSalt(5)
            .then((salt) => {
                bcrypt.hash(password, salt)
                .then((hash) => {
                    resolve(hash)
                })
                .catch((err) => {
                    reject(err)
                })
            })
            .catch((err) => {
                reject(err)
            })
        } else {
            reject('Passwords does not match')
        }
    })
}

const checkForDuplicates = (username, email) => {
    checkIfAvailable('username', username)
    .then(() => {
        checkIfAvailable('email', email)
        .then(() => {
            resolve(true)
        })
        .catch(() => {
            reject('Username already in use!')
        })
    })
    .catch(() => {
        reject('Username already in use!')
    })
}

const checkIfAvailable = (type, item) => {
    return new Promise((resolve, reject) => {
        User.find({[type]: item}).exec()
        .then((result) => {
            reject(false)
        })
        .catch(() => {
            resolve(true)
        })
    })
}

const saveUser = ({username, password, email}) => {
    return new Promise((resolve, reject) => {
        const newUser = new User({username: username, password: password, email: email})

        newUser.save()
        .then(() => {
            resolve('User created')
        })
        .catch((err) => {
            reject(err)
        })
    })
}