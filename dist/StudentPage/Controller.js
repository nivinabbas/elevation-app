const dataModel = new StudentModel()
const renderer = new Renderer()



let jopsArr = [
    {
        title: "full stack",
        description: `abc asd asd asd   asddddddddddddddd asd ddddddddddddd aaaaaaaaaaa rrrrrr
        gggggggggggggggg asdddasssssssssss asdqweqweqwe gggggggggg ppppppppppppp `,
        status: "rejected",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    },
    {
        title: "backend",
        description: `abc asd asd asd   asddddddddddddddd asd ddddddddddddd aaaaaaaaaaa rrrrrr
        gggggggggggggggg asdddasssssssssss asdqweqweqwe gggggggggg ppppppppppppp `,
        status: "rejected",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    },
    {
        title: "frintend",
        description: `abc asd asd asd   asddddddddddddddd asd ddddddddddddd aaaaaaaaaaa rrrrrr
        gggggggggggggggg asdddasssssssssss asdqweqweqwe gggggggggg ppppppppppppp `,
        status: "rejected",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    },
    {
        title: "backend",
        description: `abc asd asd asd   asddddddddddddddd asd ddddddddddddd aaaaaaaaaaa rrrrrr
        gggggggggggggggg asdddasssssssssss asdqweqweqwe gggggggggg ppppppppppppp `,
        status: "rejected",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    },
    {
        title: "full stack",
        description: `abc asd asd asd   asddddddddddddddd asd ddddddddddddd aaaaaaaaaaa rrrrrr
        gggggggggggggggg asdddasssssssssss asdqweqweqwe gggggggggg ppppppppppppp `,
        status: "rejected",
        phone: "0543174067",
        email: "fadi.1997.id@gmail.com"
    },
    {
        title: "full stack",
        description: `abc asd asd asd   asddddddddddddddd asd ddddddddddddd aaaaaaaaaaa rrrrrr
        gggggggggggggggg asdddasssssssssss asdqweqweqwe gggggggggg ppppppppppppp `,
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