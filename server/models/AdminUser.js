const mongoose = require('mongoose')
const userSchema = require('./User')

const adminUserSchema = new mongoose.Schema({
    trackedStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
}).add(userSchema)


const adminModel = mongoose.model("AdminUser", adminUserSchema) 


module.exports = {adminModel: adminModel}