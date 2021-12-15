class dataOfCards {
  constructor() {
    this.dataOfCards = [];
  }

  getDataFromDB = async function () {
    this.dataOfCards = await $.get(`http://localhost:8888/dataOfCards/`);
    console.log('qweqzzzwe');
  };

  saveDataOfProcess(process) {
    $.post('/jobs/process', process, function (res) {});
  }
}
