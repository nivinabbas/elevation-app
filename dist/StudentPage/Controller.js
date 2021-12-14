const dataModel = new StudentModel()
const renderer = new Renderer()



let jopsArr = [
    {
        title: "full stack",
        description: "abc",
        status: "rejected",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    },
    {
        title: "backend",
        description: "abc",
        status: "in progress",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    }
]

renderer.renderData(jopsArr)