const mongoose = require('mongoose')

const userSchmea = new mongoose.Schema({
    username: String,
    password: String,
    displayName: String,
    email: String
}, {timestamps: true})

module.exports = mongoose.model('Users', userSchmea)