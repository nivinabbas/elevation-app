const mongoose = require('mongoose')
const {Admin} = require('./server/models/AdminUser')
const {Student} = require('./server/models/StudentUser')
const {Job} = require('./server/models/Job')
const {RecruitmentProcess} = require('./server/models/RecruitmentProcess')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mydb', { useNewUrlParser: true })

const emptyData = async () => {
    await Promise.all([Admin.deleteMany({}).exec(), Student.deleteMany({}).exec(), Job.deleteMany({}).exec(),
        RecruitmentProcess.deleteMany({}).exec()])
    console.log('\n======Data removed======\n')
}

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, validate: (s) => s.trim() !== ''},
    email: {type: String, required: true, unique: true, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
    phone: String,
    password: String,
    salt: String
})



const createAdmins = async () => {
    const admins = [{
        name: "Admin1 Lastname",
        email: "admin1@email.com",
        phone: "050-1475489",
        password: "123456"
    },
    {
        name: "Admin2 Alast2",
        email: "admin2@email.com",
        phone: "050-123475489",
        password: "1234567"
    },
    {
        name: "Admin3 Admin3",
        email: "admin3@email.com",
        phone: "050-1475089",
        password: "12345678"
    }]

    for(let a of admins)
    {
        const admin = new Admin(a)
        admin.createPassword(a.password)
        await admin.save()
    }
    console.log('\n======Admins created======\n')
}


const createUsers = async () => {

    const users = [{
        name: "User0 Lastname1",
        email: "user0@email.com",
        phone: "050-1234567",
        password: "123456",
        cvLink: "http://google.com/0",
        currentStatus: 5 //employeed
    },
    {
        name: "User1 Lastname1",
        email: "user1@email.com",
        phone: "050-1234067",
        password: "123456",
        cvLink: "http://google.com/1",
        currentStatus: 0 //no process
    },
    {
        name: "User2 Lastname2",
        email: "user2@email.com",
        phone: "050-1232567",
        password: "123456",
        cvLink: "http://google.com/2",
        currentStatus: 1 //applied
    },
    {
        name: "User3 Lastname3",
        email: "user3@email.com",
        phone: "050-1214567",
        password: "123456",
        cvLink: "http://google.com/3",
        currentStatus: 2 //got positive feedback/phone call
    },
    {
        name: "User4 Lastname44",
        email: "user4@email.com",
        phone: "050-4234567",
        password: "123456",
        cvLink: "http://google.com/4",
        currentStatus: 3 //tech intreview
    }]

    for(let a of users)
    {
        const user = new Student(a)
        user.createPassword(a.password)
        await user.save()
    }
    console.log('\n======users created======\n')
}

const createJobsAndProcesses = async () => {
    const processes = [
        
        
    {
        job: {
            company: "Apple",
            title: "Back-end",
            description: `1Description1 ieqwoiqw ne oqwro nqwioqwrjoiqwjtoi 
            jqwtoijqwoitj Description1 ieqwoiqw ne oqwro nqwioqwrjoiqwjtoi jqwtoijqwoitj`
        }, 
        student: {
            email: "user2@email.com"
        },
        process_data: {
            jobLink: "http://linkedin.com/process1",
            stage: 1, //Applied
        }
    },


    {
        job: {
            company: "Apple",
            title: "Front-end",
            description: `Frontend descriptioni qweijqwoi je oqwe ieqwoiqw ne oqwro nqwioqwrjoiqwjtoi 
            jqwtoijqwoitj Description1 ieqwoiqw ne oqwro nqwioqwrjoiqwjtoi jqwtoijqwoitj`
        },
        student: {
            email: "user0@email.com"
        },
        process_data: {
            jobLink: "http://linkedin.com/process2",
            stage: 5,
            salary: 10000,
            questions: [
                {
                    stage: 2,
                    intreviewer: "Apple intreviewer 1",
                    question: "Question apple 1 question"
                },
                {
                    stage: 2,
                    intreviewer: "Apple intreviewer 1",
                    question: "Question apple 2 question"
                },
                {
                    stage: 3,
                    intreviewer: "Apple intreviewer 2",
                    question: "Question stage 3 apple 1 question"
                },
                {
                    stage: 4,
                    intreviewer: "Apple intreviewer 2 HR",
                    question: "Question stage 4 HR apple 1 question"
                }
            ]
        }
    },


    {
        job: {
            company: "Microsoft",
            title: "Full-stack",
            description: `qwrokoqwrk opwqkropkqwrop kqwr qfullstack front end microsoft 12424125 1 q`
        },
        student: {
            email: "user3@email.com"
        },
        process_data: {
            stage: 2,
            jobLink: "http://linkedin.com/process3"
        }
    },


    {
        job: {
            company: "Linkedin",
            title: "Customer Support",
            description: `qwrqwtqwtop1pk52k -1k ieqwoiqw ne oqwro nqwioqwrjoiqwjtoi 
            jqwtoijqwoitj Description1 ieqwoiqw ne oqwro nqwioqwrjoiqwjtoi jqwtoijqwoitj`
        },
        student: {
            email: "user4@email.com"
        },

        process_data: {
            stage: 3,
            salary: 10000,
            jobLink: "http://lin22k1.com",
            questions: [
                {
                    stage: 2,
                    intreviewer: "Linkedin intreviewer 1",
                    question: "Question Linkedin 1 Linkedin"
                },
                {
                    stage: 2,
                    intreviewer: "Linkedin intreviewer 2",
                    question: "Linkedin stage 3 Linkedin 1 question"
                }
            ]
        }
    },

    
    {
        job: {
            company: "Apple",
            title: "Sales Manager",
            description: `Managing sales qopekqwop rwjiqwnr oiqwmanignt salesam iqwriqwo wmg
            qtqowtkqo tjipemt pqijetopqwjtopjqwtpojqwtj`
        },
        student: {
            email: "user1@email.com"
        },
        process_data: {
            stage: -1
        }
    }]

    for(let p of processes) {
        const job = new Job(p.job)
        await job.save()

        const student = await Student.findOne(p.student).exec()
        const process = new RecruitmentProcess({job: job, appliedStudent: student, ...p.process_data})
        await process.save()

        await Job.findByIdAndUpdate(job.id, {$push: {recruitmentProcesses: process}}).exec()
        await Student.findByIdAndUpdate(student.id, {$push: {recruitmentProcesses: process}}).exec()
    }
        

    console.log('\n======Jobs and processes created======\n')

}

const run = async () => {

    await emptyData()

    await createAdmins()
    
    await createUsers()
    
    await createJobsAndProcesses()
}


run()