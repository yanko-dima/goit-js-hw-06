const form = document.querySelector(".login-form");
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');

emailEl.setAttribute("required", true);
passwordEl.setAttribute("required", true);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email,
    password,
  };

  form.reset();

  console.table(formData);
}
