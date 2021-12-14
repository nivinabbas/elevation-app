class JobsManager {
    constructor() {
        this.jobs
    }

    getJobs() {
        $.ajax({
            method: `GET`,
            url: `/jobs`,
            success: (result) => {
                this.jobs = result
            },
            error: (xhr, text, err) => {
                console.log(xhr);
            }
        })
    }
}