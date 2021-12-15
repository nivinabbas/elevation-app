let data = new dataOfCards();

async function loadPage() {
  await data.getDataFromDB();
  console.log(data.dataOfCards);
  $('.dataCard1').text(data.dataOfCards[0]);
  $('.dataCard4').text(data.dataOfCards[2] - data.dataOfCards[0]);
  $('.dataCard2').text(data.dataOfCards[1]);
  $('.dataCard3').text(data.dataOfCards[2]);
}

loadPage();

$('body').on('click', '.addProcess', async function () {
  let addProcess = $(this).closest('.student').find('.process')[0].innerHTML; // to access all process inside it
  console.log(addProcess);
 
  document.write("<input placeholder=stage></input>");
  document.write("<input placeholder=salary></input>");
  document.write("<input placeholder=jobLink></input>");
  document.write("<input placeholder=questions></input>");
  document.write("<button>add</button>");
 
  await data.saveDataOfProcess(addProcess);
});

/* Buttons navbar */
const buttons = document.querySelectorAll('.menu__item');
let activeButton = document.querySelector('.menu__item.active');

buttons.forEach((item) => {
  const text = item.querySelector('.menu__text');
  item.addEventListener('click', function () {
    if (this.classList.contains('active')) return;
    this.classList.add('active');
    if (activeButton) {
      activeButton.classList.remove('active');
      activeButton.querySelector('.menu__text').classList.remove('active');
    }
    handleTransition(this, text);
    activeButton = this;
  });
});
function handleTransition(item, text) {
  item.addEventListener('transitionend', (e) => {
    if (e.propertyName != 'flex-grow' || !item.classList.contains('active'))
      return;
    text.classList.add('active');
  });
}
