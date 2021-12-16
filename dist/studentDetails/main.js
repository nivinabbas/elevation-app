let data = new dataOfCards();

async function loadPage() {
  await data.getDataFromDB();
 
   await data.getDataAboutStudentForAdmin();
   console.log(data);

  $('.dataCard1').text(data.dataOfCards[0]);
  $('.dataCard4').text(data.dataOfCards[2] - data.dataOfCards[0]);
  $('.dataCard2').text(data.dataOfCards[1]);
  $('.dataCard3').text(data.dataOfCards[2]);
}

loadPage();

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

// $('body').on('click', '.addProcess', async function () {
//   let addProcess = $(this).closest('.student').find('.process')[0].innerHTML; // to access all process inside it
//   console.log(addProcess);

//   document.write("<input placeholder=stage></input>");
//   document.write("<input placeholder=salary></input>");
//   document.write("<input placeholder=jobLink></input>");
//   document.write("<input placeholder=questions></input>");
//   document.write("<button>add</button>");

//   await data.saveDataOfProcess(addProcess);
// });

var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', async function onOpen() {

  if (typeof favDialog.showModal === 'function') {
    const students = await data.getDataAboutStudent();
    const selectEl = $('#student-name')
    students.forEach(student => selectEl.append($(`<option value='${student._id}'>${student.name}</option>`)))
    favDialog.showModal();
  } else {
    alert('The <dialog> API is not supported by this browser');
  }
});

confirmBtn.addEventListener('click',async function onOpen() {
  var inputName = $('.name').val();
  var inputTitle = $('.jobTitle').val();
  var inputDescription = $('.description').val();
  var inputJobLink = $('.jobLink').val();
  let inputs = {
    studentId: $('#student-name').val(),
    company: inputName,
    title: inputTitle,
    description: inputDescription,
    jobLink: inputJobLink,
    stage: $('#stage').val(),
  };
  data.saveDataOfProcess(inputs);
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  // outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
