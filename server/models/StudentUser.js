const mongoose = require('mongoose')
const userSchema = require('./User')

const studentUserSchema = new mongoose.Schema({
    cv_link: String,
    currentStatus: Number,
    recruitment_processes: [{type: mongoose.Types.ObjectId, ref: 'JobProcess'}]
}).add(userSchema)


const studentModel = mongoose.model("StudentUser", studentUserSchema) 


module.exports = {studentModel: studentModel}