
let data = new dataOfCards();


async function loadPage() {
  await data.getDataFromDB();
}

$('.dataCard1').text(data.dataOfCards[0]+"/"+(data.dataOfCards[2]-data.dataOfCards[0]));
$('.dataCard2').text(data.dataOfCards[1]);
$('.dataCard3').text(data.dataOfCards[2]);

