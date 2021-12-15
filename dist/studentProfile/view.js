class Renderer {
    constructor() {
        this.containerEl = $(".container")
        this.profileSource = $("#profile-template").html()
        this.profileTemplate = Handlebars.compile(this.profileSource)

    }

    renderProfile(data) {
        const profileHTML = this.profileTemplate(data)
        this.containerEl.empty().append(profileHTML)
    }
}

// module.exports = Renderer