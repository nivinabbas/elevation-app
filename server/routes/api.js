const express = require('express')
const router = express.Router()
const Job = require("../models/Job")
const { Student, studentsDetails } = require("../models/StudentUser")
const path = require('path');


router.get('/', (req ,res) => {
    if(req.session.role == undefined)
        return res.redirect('/login/')
    return res.sendFile(path.join(__dirname, '../', '../', 'dist', 'dashboard', 'index.html'))
})

router.get("/jobs", function(req, res) {
    Job.find({}, function(err, result) {
        res.send(result)
    })
})


router.get('/statistics', (req, res) => {
    if(req.session.role != 2)
        return res.status(403).send({msg: 'Admin privliges are needed'})
    studentsDetails().then(data => res.send(data))
})


router.get('/students', async(req, res) => {

    if(req.session.role == undefined)
        return res.redirect('/login/')

    const filter = {}
    if(req.session.role == 1)
        filter._id = req.session.userId
    else {
        if (req.query.email)
            filter.email = req.query.email
        if (req.query.currentStatus)
            filter.currentStatus = req.query.currentStatus
        if (req.query.name)
            filter.name = { $regex: req.query.name, $options: 'i' }
    }
    const students = await Student.find(filter, 'name email currentStatus recruitmentProcesses')
        .populate({
            path: 'recruitmentProcesses',
            select: '-appliedStudent',
            populate: { path: 'job', select: 'company title -_id' }
        }).exec()

    res.send(students)
    
})


router.get("/students/settings", (req, res) => {
    if (req.session.userId == undefined)
        return res.redirect('/login/')
    res.sendFile(path.join(__dirname, '../', '../', 'dist', 'studentProfile', 'index.html'))
})

router.get("/students/profile", async(req, res) => {
    if (req.session.userId == undefined) 
        return res.redirect('/login/')

    const studentData = await Student.findById(req.session.userId, '-__v -password -salt')
    .populate({path: 'recruitmentProcesses', select: '-appliedStudent -__v', populate: {path: 'job', select: '-recruitmentProcesses -__v'}}).exec()
    res.json(studentData)
})

router.put("/students", async(req, res) => {
    
    const userId = req.session.userId

    if (req.session.userId == undefined) {
        return res.redirect('/login/')
    }


    let student = {}
    if (req.body.name) {
        student.name = req.body.name
    }
    if (req.body.email) {
        student.email = req.body.email
    }

    if (req.body.phone) {
        student.phone = req.body.phone
    }
    if (req.body.cvLink) {
        student.cvLink = req.body.cvLink
    }

    Student.findByIdAndUpdate(userId, student).exec()
    res.send("done")
})


module.exports = router