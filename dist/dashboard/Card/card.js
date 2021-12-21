class dataOfCards {
  constructor() {
    this.dataOfCards = [];
    this.studentsData = []
  }

  getDataFromDB = async function () {
    this.dataOfCards = await $.get(`http://localhost:8888/statistics/`);
  };

  saveDataOfProcess(process) {
    return $.post('/jobs/process', process, function (res) {});
  }

  getDataAboutStudent = async function () {
    this.studentsData = await $.get('studentsList')
  };
}
