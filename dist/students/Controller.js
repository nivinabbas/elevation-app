const dataModel = new StudentModel()
const renderer = new Renderer()


document.ready(async function () {
    await dataModel.getStudents()
    renderer.renderData(dataModel.students)
})

























// let students = [
//     {
//         name: "Fadi id",
//         processNum: 3,
//         process: ['full stack', 'backend', 'frontend'],
//         status: "looking for a job"
//     },
//     {
//         name: "Hadi fr",
//         processNum: 3,
//         process: ['full stack', 'backend', 'frontend'],
//         status: "looking for a job"
//     },
//     {
//         name: "Nivin ab",
//         processNum: 3,
//         process: ['full stack', 'backend', 'frontend'],
//         status: "looking for a job"
//     },
//     {
//         name: "Nivin ab",
//         processNum: 4,
//         process: ['full stack', 'backend', 'frontend', 'frontend'],
//         status: "looking for a job"
//     },
//     {
//         name: "Nivin ab",
//         processNum: 5,
//         process: ['full stack', 'backend', 'frontend', 'backend', 'frontend'],
//         status: "looking for a job"
//     }
// ]
