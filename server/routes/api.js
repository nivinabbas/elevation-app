const express = require('express')
const router = express.Router()
const Job = require("../models/Job")
const {Student, studentsDetails} = require("../models/StudentUser")
const path = require('path');

router.get("/jobs", function(req, res) {
    Job.find({}, function(err, result) {
        res.send(result)
    })
})


router.get('/dataOfCards', (req, res) => {
    studentsDetails().then(data => res.send(data))
})


router.get('/studentsDetails',  async (req, res) => {

    const filter = {}
    if(req.query.email)
        filter.email = req.query.email
    if(req.query.currentStatus)
        filter.currentStatus = req.query.currentStatus
    if(req.query.name)
        filter.name = {$regex: req.query.name, $options: 'i'}
    const students = await Student.find(filter, 'name email currentStatus recruitmentProcesses')
    .populate({path: 'recruitmentProcesses', 
    select: '-appliedStudent', populate: {path: 'job', select: 'company title -_id'}}).exec()
    res.send(students)
})


router.get('/login', (req, res) => {
    if(req.session.role != undefined)
        return res.redirect('/')
    res.sendFile(path.join(__dirname, '../', '../', 'dist', 'login', 'index.html'))
})


module.exports = router