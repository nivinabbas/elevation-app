// $(".login-form").on("click", ".logInBtn", function () {
//   window.location.replace("/dist/dashboard/index.html");
// });



$('#login-form').on('submit', function() {
  const el = $('.login-form > .error')
  el.hide()
  const formData = {}
  for(let field of $(this).serializeArray()) {
    formData[field.name] = field.value
  }

  $.post('/login', formData)
  .then(res => window.location.replace("/"))
  .catch(err => {
    el.text(err.responseJSON)
    el.show()
  })

  return false;
})




$('#register-form').on('submit', function() {
  const el = $('.login-form > .error')
  el.hide()
  const formData = {}
  for(let field of $(this).serializeArray()) {
    formData[field.name] = field.value
  }

  $.post('/register', formData)
  .then(res => window.location.replace("/"))
  .catch(err => {
    el.text(err.responseJSON)
    el.show()
  })

  return false;
})