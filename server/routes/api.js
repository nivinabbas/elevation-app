const express = require('express')
const router = express.Router()
const {studentsDetails} = require('../models/StudentUser')


router.get('/dataOfCards', (req, res) => {
    studentsDetails().then(data => res.send(data))
})

module.exports = router