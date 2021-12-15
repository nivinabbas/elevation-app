const profileModel = new ProfileModel()
const renderer = new Renderer()



$(document).ready(async function() {
    await profileModel.getStudentrData()
    renderer.renderProfile(profileModel.studentData)
})