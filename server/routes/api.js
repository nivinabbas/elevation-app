const express = require('express')
const router = express.Router()
const Job = require("../models/Job")
const { Student, studentsDetails } = require("../models/StudentUser")
const path = require('path');


router.get('/', (req ,res, next) => {
    if(req.session.role == undefined)
        return res.redirect('/login/')
    return res.sendFile(path.join(__dirname, '../', '../', 'dist', 'dashboard', 'index.html'))
})

router.get("/jobs", function(req, res) {
    Job.find({}, function(err, result) {
        res.send(result)
    })
})


router.get('/dataOfCards', (req, res) => {
    studentsDetails().then(data => res.send(data))
})


router.get('/studentsDetails', async(req, res) => {

    const filter = {}
    if (req.query.email)
        filter.email = req.query.email
    if (req.query.currentStatus)
        filter.currentStatus = req.query.currentStatus
    if (req.query.name)
        filter.name = { $regex: req.query.name, $options: 'i' }
    const students = await Student.find(filter, 'name email currentStatus recruitmentProcesses')
        .populate({
            path: 'recruitmentProcesses',
            select: '-appliedStudent',
            populate: { path: 'job', select: 'company title -_id' }
        }).exec()

    res.send(students)
})


router.get("/studentSettings", (req, res) => {
    if (req.session.userId == undefined)
        return res.redirect('/login/')
    res.sendFile(path.join(__dirname, '../', '../', 'dist', 'studentProfile', 'index.html'))
})

router.get("/student/profile", async(req, res) => {
    if (req.session.userId == undefined) {
        return res.redirect('/login/')
    }

    const studentData = await Student.findById(req.session.userId)
    res.json(studentData)
})

router.put("/student/editData", async(req, res) => {
    
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


router.get('/studentsList', async(req, res) => {
    if (req.session.userId == undefined)
        return res.redirect('/login/')
    res.json(await Student.find({}, '_id name'))
})


module.exports = router