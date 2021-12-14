const dataModel = new StudentModel()
const renderer = new Renderer()


// document.ready(async function () {
//     await dataModel.getStudents()
//     renderer.renderData(dataModel.students)
// })



dataModel.getStudents()
renderer.renderData(dataModel.students)




















