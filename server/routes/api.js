const express = require('express')
const router = express.Router()
const Student = require('../models/Student')


router.get('/student/:name', (req, res) => {
    Student.find({ name: req.params.name }, function(err, studentData) {
        res.send(studentData)
    })
})


module.exports = router