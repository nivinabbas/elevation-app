const router = require('express').Router()
const {Student} = require('../models/StudentUser')

const {Job, getJobsByTitleCompany} = require('../models/Job')
const {RecruitmentProcess} = require('../models/RecruitmentProcess')

router.get("/", function(req, res) {
    Job.find({}, function(err, result) {
        res.send(result)
    })
})


router.get('/suggested/:company/:title', (req, res) => {
    getJobsByTitleCompany(req.params.company, req.params.title).then(data => res.send(data))
})


router.post('/process', async (req, res) => {
    if(req.session.role == undefined)
        return res.send('Not logged in')

    const student = await Student.findById(req.session.userId).exec()
    let job
    if(req.body.jobId == undefined) {
        job = new Job({company: req.body.company, title: req.body.title, decription: req.body.decription})
        await job.save()
    }
    else
        job = await Job.findById(req.body.jobId).exec()
    
        const recruitmentProcess = new RecruitmentProcess({job: job, jobLink: req.body.link,
            stage: req.body.stage, appliedStudent: student})
            
        const result = await recruitmentProcess.save()
        await Job.findByIdAndUpdate(job.id, {$push: {recruitmentProcesses: recruitmentProcess}}).exec()

        res.send(result)
})




module.exports = router