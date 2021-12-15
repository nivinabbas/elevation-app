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

  getDataAboutStudent = async function () {
    const data = await $.get('studentsList');
    console.log(data);
    return data;
  };
}
