function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeColorButton.addEventListener("click", onChangeColor);

function onChangeColor() {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
