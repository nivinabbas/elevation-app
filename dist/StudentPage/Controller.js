const studentModel = new StudentModel()
const renderer = new Renderer()


$(document).ready(async function() {
    await studentModel.getJobs()
    renderer.renderData(studentModel.studentJobs)
})