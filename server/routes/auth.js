const router = require('express').Router()
const {Student} = require('../models/StudentUser')
const {Admin} = require('../models/AdminUser')
const path = require('path')
const {checkLoggedIn} = require('./Utils')


router.get(['/login', '/register'], (req, res) => {
    if(req.session.role != undefined)
        return res.redirect('/')
    res.sendFile(path.join(__dirname, '../', '../', 'dist', 'login', 'index.html'))
})

const addUserData = (req, role, userId) => {
    req.session.role = role
    req.session.userId = userId
}


router.post('/register', (req, res) => {
    const emailExits = () => res.status(409).json('Email already exists!')

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
                    addUserData(req, 1, student.id)
                    res.json(data)
                })
                .catch(err => {
                    if(err.errors) {
                        let msg
                        if(err.errors['email'])
                            msg = "Incorrect email!"
                        else if(err.errors['name'])
                            msg = "Name is required!"
                        // else if(err.errors['currentStatus'])
                        //     msg = "Employement status is required!"
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
                addUserData(req, 2, admin.id)
                return res.send('Logged in as admin!')
            })
        }
        else if(student.validPassword(req.body.password)) {
            addUserData(req, 1, student.id)
            return res.send('Logged in!')
        }
        else
            return wrongDetails()
    })
})


module.exports = router