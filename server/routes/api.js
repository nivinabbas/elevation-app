const express = require('express')
const router = express.Router()
const Job = require("../models/Job")
const StudentsUser = require("../models/StudentUser")

router.get("/jobs", function (req, res) {
    Job.find({}, function (err, result) {
        res.send(result)
    })
})


router.get('/dataOfCards', (req, res) => {
    studentsDetails().then(data => res.send(data))
})

module.exports = router