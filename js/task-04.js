const decrementEl = document.querySelector('button[data-action="decrement"]');

const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

function handleBtnClickPlus() {
  counterValue = valueEl.textContent;
  valueEl.textContent = parseInt(counterValue) + 1;
}

function handleBtnClickMinus() {
  counterValue = valueEl.textContent;
  valueEl.textContent = parseInt(counterValue) - 1;
}
decrementEl.addEventListener("click", handleBtnClickMinus);

incrementEl.addEventListener("click", handleBtnClickPlus);
