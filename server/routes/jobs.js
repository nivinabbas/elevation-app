const router = require('express').Router()
const {Student} = require('../models/StudentUser')

const {Job, getJobsByTitleCompany} = require('../models/Job')
const {RecruitmentProcess} = require('../models/RecruitmentProcess')


router.get('/suggested/:company/:title', (req, res) => {
    if(req.session.role == undefined)
        return res.redirect('/login/')
    getJobsByTitleCompany(req.params.company, req.params.title).then(data => res.send(data))
})

router.get('/processes', async (req, res) => {
    if(req.session.role == undefined)
        return res.redirect('/login/')        

    const jobFilter = {}
    if(req.query.company)
        jobFilter['company'] = {$regex: req.query.company, $options: 'i'}
    if(req.query.title)
        jobFilter['title']= {$regex: req.query.title, $options: 'i'}

    const stageFilter = {}
    if(req.query.stage)
        stageFilter.stage = req.query.stage

    const data = (await RecruitmentProcess.find({appliedStudent: req.session.userId, ...stageFilter},
         '-_id -appliedStudent -__v').populate({path: 'job', match: jobFilter,
         select: '-_id -recruitmentProcesses -__v'}).exec()).filter(p => p.job != null)
    res.json({name: (await Student.findById(req.session.userId).exec())?.name, processes: data})
})


router.post('/process', async (req, res) => {
    if(req.session.role == undefined)
        return res.redirect('/login/')

    let studentId
    if(req.session.role == 2)
        studentId = req.body.studentId
    else
        studentId = req.session.userId
        
        
    const student = await Student.findById(studentId).exec()
    let job
    if(req.body.jobId == undefined) {
        job = new Job({company: req.body.company, title: req.body.title, description: req.body.description})
        await job.save()
    }
    else
        job = await Job.findById(req.body.jobId).exec()
    
        const recruitmentProcess = new RecruitmentProcess({job: job, jobLink: req.body.link,
            stage: req.body.stage, appliedStudent: student})
            
        const result = await recruitmentProcess.save()
        await Student.findByIdAndUpdate(student.id, {$push: {recruitmentProcesses: recruitmentProcess}}).exec()
        await Job.findByIdAndUpdate(job.id, {$push: {recruitmentProcesses: recruitmentProcess}}).exec()

        res.send(result)
})




module.exports = router