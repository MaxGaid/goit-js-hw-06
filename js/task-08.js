const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onSubButClick);

function onSubButClick(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Заповніть всі поля!!!");
  }

  const dataObject = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  console.log(dataObject);

  refs.form.reset();
}
