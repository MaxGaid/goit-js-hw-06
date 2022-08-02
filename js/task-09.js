function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.body.style.backgroundColor;
}
