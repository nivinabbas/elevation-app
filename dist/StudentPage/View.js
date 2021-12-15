class Renderer {
    renderData(jops) {
        let source = $("#job-template").html();
        let template = Handlebars.compile(source)
        let html = template({ jops: jops })
        $("#jobs").empty().append(html)
    }
}