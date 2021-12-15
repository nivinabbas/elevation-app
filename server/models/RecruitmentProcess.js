const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({
    stage: { type: Number, require: true },
    intreviewer: String,
    question: String
})

const recruitmentProcessSchema = new mongoose.Schema({
    job: { type: mongoose.Types.ObjectId, ref: 'Job', require: true },
    jobLink: String,
    stage: { type: Number, require: true },
    appliedStudent: { type: mongoose.Types.ObjectId, ref: "StudentUser", require: true },
    salary: Number,
    questions: [questionSchema]

})


const RecruitmentProcess = mongoose.model('RecruitmentProcess', recruitmentProcessSchema)


module.exports = { RecruitmentProcess: RecruitmentProcess }