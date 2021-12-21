class ProfileModel {
    constructor() {
        this.studentData = []
    }

    async getStudentrData() {
        await $.ajax({
            method: `GET`,
            url: `/students/profile`,
            success: (result) => {
                this.studentData = result
            },
            error: (xhr, text, err) => {
                console.log(xhr)
            }
        })
    }

    async editStudentData(student) {
        await $.ajax({
            method: `PUT`,
            url: `/students`,
            data: student,
            success: (result) => {

            },
            error: (xhr, text, err) => {
                console.log(xhr)
            }
        })
    }
}

// module.exports = ProfileModel