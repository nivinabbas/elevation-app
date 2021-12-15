const express = require('express')
const router = express.Router()
const Job = require("../models/Job")
const { Student, studentsDetails } = require("../models/StudentUser")
const path = require('path');


router.get('/', (req, res, next) => {
    if (req.session.role == undefined)
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

router.get("/student/profile", async(req, res) => {
    const studentId = req.session.studentId

    if (!studentId) {
        res.status(401).send("Please Login First")
        return null
    }

    const studentData = await Student.findById(studentId)
    res.json(studentData)
})

router.put("/student/editData", async(req, res) => {
    const studentId = req.session.studentId

    if (!studentId || !req.body) {
        res.status(401)
        return null
    }

    let student = {}
    if (req.body.name) {
        student.name = req.body.name
    }
    if (req.body.email) {
        student.email = req.body.email
    }
    // if (req.body.password) {
    //     student.password = req.body.password
    // }
    if (req.body.phone) {
        student.phone = req.body.phone
    }
    if (req.body.cvLink) {
        student.cvLink = req.body.cvLink
    }

    Student.findByIdAndUpdate(studentId, student).exec()
    res.send("done")
})

module.exports = router