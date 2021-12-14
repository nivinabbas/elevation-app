const mongoose = require('mongoose')

const Job = mongoose.model("Job", new mongoose.Schema({
    company: { type: String, require: true },
    title: { type: String, require: true },
    decription: { type: String, require: true },
    recruitmentProcesses: [{ type: mongoose.Types.ObjectId, ref: 'RecruitmentProcess' }]
}))


const getJobsByTitleCompany = (company, title) => Job.find(
<<<<<<< HEAD
    {company: company, title: {$regex: title, $options: 'i'}}, 'id title').exec()
=======
    {company: {$regex: company, $options: 'i'}, title: {$regex: title, $options: 'i'}}, 'id title').exec()
>>>>>>> 66f524d9c91b3861ce6b27046415022776bbdf9d


module.exports = { Job: Job, getJobsByTitleCompany: getJobsByTitleCompany }