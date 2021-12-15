const profileModel = new ProfileModel()
const renderer = new Renderer()

$("#submit-profile").on("click", function() {
    let student = {
        name: $("#nameInput").val(),
        email: $("#emailInput").val(),
        // password: $("#passwordInput").val(),
        phone: $("#phoneInput").val(),
        cvLink: $("#cvInput").val()
    }

    profileModel.editStudentData(student)
})

$(document).ready(async function() {
    await profileModel.getStudentrData()
    renderer.renderProfile(profileModel.studentData)
})