const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: String,
    password: String,
    salt: String
})

const encryptPassword = function(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 100, 64, 'sha512').toString('hex')
}

userSchema.methods.createPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.password = encryptPassword(password, this.salt)
}

userSchema.methods.validPassword = function(password) {
    return this.password === encryptPassword(password, this.salt)
}

module.exports = userSchema