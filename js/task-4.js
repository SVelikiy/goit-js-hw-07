const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", formFunc);

function formFunc(evt) {
  evt.preventDefault();
  const formValues = {};
  const form = evt.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  formValues["email"] = email;
  formValues["password"] = password;
  console.log(formValues);
  form.reset();
}
