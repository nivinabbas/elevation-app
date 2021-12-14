const mongoose = require('mongoose')
const userSchema = require('./User')

const studentUserSchema = new mongoose.Schema({
    cvLink: String,
    currentStatus: {type: Number, required: true},
    recruitment_processes: [{type: mongoose.Types.ObjectId, ref: 'RecruitmentProcess'}]
}).add(userSchema)


const Student = mongoose.model("StudentUser", studentUserSchema)


const studentsDetails = async (filter={}) => {
    const currentlyWorking = await Student.count({...filter, currentStatus: 1}).exec()
    const inProgress = await Student.count({...filter, currentStatus: {$gt: 1}}).exec()
    const totalStudents = await Student.count(filter).exec()
    

    return [currentlyWorking, inProgress, totalStudents]
}


module.exports = {Student: Student, studentsDetails: studentsDetails}