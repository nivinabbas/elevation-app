const router = require('express').Router()
const Student = require('../models/StudentUser')


router.post('/register', (req, res) => {
    const student = new Student({name: req.body.name,
        email: req.body.email,
        phone: req.body.phone || ''})
        student.createPassword(req.body.password)

        student.save().then(data => res.send(data))
})


router.post('/login', (req, res) => {
    Student.findOne({email: req.body.email}).exec().then(data => {
        if(data == null || !data.validPassword(req.body.password))
            res.status(401).send('Incorrect email or password!')
        else
            res.send('Logged in!')
    })
})


module.exports = router