class Renderer {
    constructor() {
        this.containerEl
        this.source = $(".container")
        this.template = Handlebars.compile(source)
    }

    renderJobs(jobs) {
        const newHTML = this.template({ job: jobs })
        this.containerEl.empty().append(newHTML)
    }
}