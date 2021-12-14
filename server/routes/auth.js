const router = require('express').Router()
const Student = require('../models/StudentUser')
const Admin = require('../models/AdminUser')


// const setLoggedIn


router.post('/register', (req, res) => {

    const emailExits = () => res.status(409).send('Email already exists!')

    Admin.findOne({email: req.body.email}).exec()
        .then(data => {
            if(data != null)
                return emailExits
            const student = new Student({name: req.body.name,
                email: req.body.email,
                phone: req.body.phone || '',})
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
                        res.status(400).send(msg)
                    }
                    else
                        res.status(409).send('Email already exists!')
                })

        })
})


router.post('/login', (req, res) => {
    const wrongDetails = () => res.status(401).send('Incorrect email or password!')
    Student.findOne({email: req.body.email}).exec().then(student => {
        if(student == null) {
            Admin.findOne({email: req.body.email}).exec().then(admin => {
                if(admin == null || !admin.validPassword(req.body.password))
                    return wrongDetails()
                req.session.role = 2;
                return res.send('Logged in as admin!')
            })
        }
        else if(student.validPassword(req.body.password)) {
            req.session.role = 1
            return res.send('Logged in!')
        }
        else
            return wrongDetails()
    })
})


module.exports = router