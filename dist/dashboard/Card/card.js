class dataOfCards {
    constructor() {
      this.dataOfCards = ["1","2","3"];
    }

    getDataFromDB =  function () {
        this.dataOfCards =  $.get(`/dataOfCards`);
        return this.dataOfCards;
      };

     
}


