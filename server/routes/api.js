const express = require('express')
const router = express.Router()
const RecruitmentProcess = require("./models/RecruitmentProcess")
const Job = require("./medels/Job.js")

router.get("/jobs", function(req, res) {
    Job.find({}, function(err, result) {
        res.send(result)
    })
})

module.exports = router