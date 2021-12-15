class dataOfCards {
  constructor() {
    this.dataOfCards = [];
  }

  getDataFromDB = async function () {
    this.dataOfCards = await $.get(`http://localhost:8888/dataOfCards/`);
  };

  saveDataOfProcess(process) {
    $.post('/jobs/process', process, function (res) {});
  }

  getDataAboutStudent = function () {
    return $.get('studentsList');;
  };
}
