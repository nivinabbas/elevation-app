const express = require('express')
const router = express.Router()
const Job = require("./models/Job.js")
const StudentsUser = require("./models/StudentsUser.js")

router.get("/jobs", function (req, res) {
    Job.find({}, function (err, result) {
        res.send(result)
    })
})


router.get("/students", function (req, res) {
    StudentsUser.find({}, function (err, result) {
        // res.send(result)
        let students = [
            {
                name: "Fadi id",
                processNum: 3,
                process: ['full stack', 'backend', 'frontend'],
                status: "looking for a job"
            },
            {
                name: "Hadi fr",
                processNum: 3,
                process: ['full stack', 'backend', 'frontend'],
                status: "looking for a job"
            },
            {
                name: "Nivin ab",
                processNum: 3,
                process: ['full stack', 'backend', 'frontend'],
                status: "looking for a job"
            },
            {
                name: "Nivin ab",
                processNum: 4,
                process: ['full stack', 'backend', 'frontend', 'frontend'],
                status: "looking for a job"
            },
            {
                name: "Nivin ab",
                processNum: 5,
                process: ['full stack', 'backend', 'frontend', 'backend', 'frontend'],
                status: "looking for a job"
            }
        ]
        res.send(students)
    })
})

module.exports = router