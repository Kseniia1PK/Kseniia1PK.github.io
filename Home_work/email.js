
// function validateEmail() {
//   var emailInput = document.getElementById('user-email');
//   var email = emailInput.value;

//   // Регулярное выражение для проверки email
//   var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (emailRegex.test(email)) {
//     alert('Email введено корректно!');
//   } else {
//     alert('Будь-ласка, введіте корректний email!');
//   }
// }

document.querySelector('form[name="contact-form"]').addEventListener('submit', function(event) {
  var emailInput = document.querySelector('input[name="user-email"]');
  var emailValue = emailInput.value;

  // Регулярний вираз для перевірки формату електронної пошти
  // var emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
  var emailPattern = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$;

  if (!emailValue.match(emailPattern)) {
    alert('Будь ласка, введіть коректну електронну адресу.');
    event.preventDefault();
  }
});

