class StudentModel {
  constructor() {
    this.students;
  }

  async getStudents() {
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

    const STAGES = {
      '-1': 'Declined',
      0: 'No process',
      1: 'Applied',
      2: 'Positive feedback',
      3: 'Technical intreview',
      4: 'HR intreview',
      5: 'Employeed'
    }

    this.students = (await $.get('/students')).map(o => {
      o.recruitmentProcesses.forEach(p => p.stage = STAGES[p.stage])
      o.currentStatus = o.currentStatus ? STAGES[o.currentStatus] : STAGES[0]
      o.processNum = o.recruitmentProcesses.length
      return o
    })
  }
}
