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


/*button add process*/
var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
