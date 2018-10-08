const mongoose = require('mongoose')
const secret = require('./secret')

const connection = mongoose.connect(`mongodb+srv://gp:${secret.password}@cluster0-jbiyo.mongodb.net/test?retryWrites=true`)
.then(() => {
    console.log("\x1b[32m","Connected to MongoDB")
    module.exports = connection
})
.catch((err) => {
    console.log("\x1b[31m", err)
})