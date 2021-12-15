const profileModel = new ProfileModel()
const renderer = new Renderer()

$(document).on("click", "#submit-profile", function() {
    let student = {
        name: $("#nameInput").val(),
        email: $("#emailInput").val(),
        // password: $("#passwordInput").val(),
        phone: $("#phoneInput").val(),
        cvLink: $("#cvInput").val()
    }
    profileModel.editStudentData(student)
})

$(document).on('click', "#confirmBtn", function() {
    const inputStage = document.querySelector('select').value
    const inputName = $('.name').val()
    const inputSalary = $('.salary').val()
    const inputQuestions = $('.questions').val()
    const inputJobLink = $('.jobLink').val()

    let inputs = {
        name: inputName,
        salary: inputSalary,
        questions: inputQuestions,
        jobLink: inputJobLink,
        stage: inputStage
    }
})

$(document).ready(async function() {
    await profileModel.getStudentrData()
    renderer.renderProfile(profileModel.studentData)
})