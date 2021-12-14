const mongoose = require('mongoose')

const jobModel = mongoose.model("Job", new mongoose.Schema({
    company: {type: String, require: true},
    title: {type: String, require: true},
    recruitmentProcesses: [{type: mongoose.Types.ObjectId, ref: 'RecruitmentProcess'}]
})) 


module.exports = jobModel