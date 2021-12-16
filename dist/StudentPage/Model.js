class StudentModel {
    constructor() {
        this.studentJobs
    }

    async getJobs() {

        const STAGES = {
            '-1': 'Declined',
            0: 'No process',
            1: 'Applied',
            2: 'Positive feedback',
            3: 'Technical intreview',
            4: 'HR intreview',
            5: 'Employeed'
        }

        this.studentJobs = (await $.get('/jobs/studentProcesses')).map(o => {
            o.stage = STAGES[o.stage]
            return o
        })
        console.log(this.studentJobs);
    }

}


































// [
//     {
//         "job": {
//             "company": "Apple",
//             "title": "Sales Manager"
//         },
//         "stage": -1,
//         "questions": []
//     }
// ]


//     $.ajax({
    //         method: `GET`,
    //         url: `http://localhost:8888/jobs/studentProcesses`,
    //         success: function (result) {
    //             console.log(result);
    //             this.studentJobs = result
    //         },
    //         error: function (xhr, text, err) {
    //             console.log("Error");
    //         }
    //     })