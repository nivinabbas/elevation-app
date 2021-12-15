const router = require('express').Router()
const {Student} = require('../models/StudentUser')
const {Admin} = require('../models/AdminUser')
const path = require('path')


router.post('/register', (req, res) => {

    const emailExits = () => res.status(409).send('Email already exists!')

    Admin.findOne({email: req.body.email}).exec()
        .then(data => {
            if(data != null)
                return emailExits()
            const student = new Student({name: req.body.name,
                email: req.body.email,
                phone: req.body.phone || '',
                cvLink: req.body.cvLink || '',
                currentStatus: req.body.currentStatus
            })
                student.createPassword(req.body.password)
        
                student.save().then(data => {
                    req.session.role = 1;
                    res.send(data)
                })
                .catch(err => {
                    if(err.errors) {
                        let msg
                        if(err.errors['email'])
                            msg = "Incorrect email!"
                        else if(err.errors['name'])
                            msg = "Name is required!"
                        else if(err.errors['currentStatus'])
                            msg = "Employement status is required!"
                        res.status(400).json(msg)
                    }
                    else
                        emailExits()
                })

        })
})


router.post('/login', (req, res) => {
    const wrongDetails = () => res.status(401).json('Incorrect email or password!')
    Student.findOne({email: req.body.email}).exec().then(student => {
        if(student == null) {
            Admin.findOne({email: req.body.email}).exec().then(admin => {
                if(admin == null || !admin.validPassword(req.body.password))
                    return wrongDetails()
                req.session.role = 2;
                console.log(req.session.role)
                return res.send('Logged in as admin!')
            })
        }
        else if(student.validPassword(req.body.password)) {
            req.session.role = 1
            req.session.studentId = student.id
            return res.send('Logged in!')
        }
        else
            return wrongDetails()
    })
})


module.exports = router