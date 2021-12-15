const mongoose = require('mongoose')

const Job = mongoose.model("Job", new mongoose.Schema({
    company: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    recruitmentProcesses: [{ type: mongoose.Types.ObjectId, ref: 'RecruitmentProcess' }]
}))


const getJobsByTitleCompany = (company, title) =>
    Job.find({ company: { $regex: company, $options: 'i' }, title: { $regex: title, $options: 'i' } }, 'id title').exec()


module.exports = { Job: Job, getJobsByTitleCompany: getJobsByTitleCompany }