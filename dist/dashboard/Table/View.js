class Renderer {
    renderData (students) {
        let source = $("#student-template").html(); 
        let template = Handlebars.compile(source)
        let html = template({students: students})
        $("#students").append(html)
    }
}