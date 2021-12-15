class StudentModel {
  constructor() {
    this.students;
  }

  getStudents() {
    // $.ajax({
    //     method: 'get',
    //     url: '/students',
    //     succses: (result) => {
    //         this.students = result
    //     },
    //     error: (xhr, text, error) => {
    //         console.log("error");
    //     }
    // })

    this.students = [
      {
        name: "Fadi id",
        processNum: 2,
        process: [
          { jobTittle: "backend", status: "phone" },
          { jobTittle: "frontend", status: "technical" },
        ],
        status: "looking for a job",
      },
      {
        name: "Hadi fr",
        processNum: 1,
        process: [{ jobTittle: "full stack", status: "HR" }],
        status: "looking for a job",
      },
      {
        name: "Ayman ab",
        processNum: 3,
        process: [
          { jobTittle: "full stack", status: "HR" },
          { jobTittle: "backend", status: "phone" },
          { jobTittle: "frontend", status: "technical" },
        ],
        status: "looking for a job",
      },
      {
        name: "mohammad ab",
        processNum: 4,
        process: [
          { jobTittle: "full stack", status: "HR" },
          { jobTittle: "backend", status: "phone" },
          { jobTittle: "frontend", status: "technical" },
          { jobTittle: "backend", status: "phone" },
        ],
        status: "looking for a job",
      },
      {
        name: "Rayan ha",
        processNum: 8,
        process: [
          { jobTittle: "full stack", status: "HR" },
          { jobTittle: "backend", status: "phone" },
          { jobTittle: "frontend", status: "technical" },
          { jobTittle: "full stack", status: "HR" },
          { jobTittle: "backend", status: "phone" },
          { jobTittle: "frontend", status: "technical" },
          { jobTittle: "full stack", status: "HR" },
          { jobTittle: "backend", status: "phone" },
        ],
        status: "looking for a job",
      },
    ];
  }
}
