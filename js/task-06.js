const inputEl = document.querySelector("#validation-input");

function onInputBlur(event) {
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.length
  ) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}

inputEl.addEventListener("blur", onInputBlur);
