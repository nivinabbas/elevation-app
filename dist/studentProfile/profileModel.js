class ProfileModel {
    constructor() {
        this.studentData
    }

    getStudentrData() {
        $.ajax({
            method: `GET`,
            url: `/student/profile`,
            success: function(result) {
                this.studentData = result
            },
            error: function(xhr, text, err) {
                console.log(xhr)
            }
        })
    }
}

module.exports = ProfileModel