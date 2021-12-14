class Renderer {
    renderData (jops) {
        let source = $("#jop-template").html(); 
        let template = Handlebars.compile(source)
        let html = template({jops: jops})
        $("#jops").append(html)
    }
}