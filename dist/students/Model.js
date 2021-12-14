class StudentModel {
    constructor() {
        this.students
    }

    getStudents() {
        $.ajax({
            method: 'get',
            url: '/students',
            succses: (result) => {
                this.students = result
            },
            error: (xhr, text, error) => {
                console.log("error");
            }
        })
    }
}