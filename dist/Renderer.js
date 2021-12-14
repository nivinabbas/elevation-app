class Renderer {
    renderData(data) {
        let source = $("#data-template").html();
        let template = Handlebars.compile(source)
        let html = template({ results: results })
        $(".results").empty().append(html)
    }

    renderStudentJobs(jobs) {
        const source = $("#student-jobs-template").html();
        const template = Handlebars.compile(source)
        const html = template({ job: jobs })
        $("#jobs-container").empty().append(html)
    }
}