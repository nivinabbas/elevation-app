const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({
    stage: {type: Number, require: true},
    intreviewer: String,
    question: String
})

const recruitmentProcessSchema = new mongoose.Schema({
    jobTitle: {type: String, require: true},
    jobLink: {type: String, require: true},
    recruitmentStatus: {type: Number, require: true},
    appliedStudent: {type: mongoose.Types.ObjectId, ref: "StudentUser", require: true},
    salary: Number,
    questions: [questionSchema]

})


const recruitmentProcessModel = mongoose.model('Recruitment', recruitmentProcessSchema)


module.exports = {recruitmentProcessModel: recruitmentProcessModel}