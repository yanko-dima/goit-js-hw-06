function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls > input");
const cteateBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
let amount = 0;

cteateBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", destroyBoxes);
inputEl.addEventListener("input", onCurrentAmount);

// Функция трекает значене amount
function onCurrentAmount(event) {
  amount = Number(event.currentTarget.value);
  console.log(amount);
}

// Обраьатываем клик по кнопке создать
function onCreateBtn() {
  createBoxes(amount);
}

// 2. Функция создает <div> c amount,
function createBoxes(amount) {
  const markup = new Array(amount)
    
  for (let i = 0; i < markup.length; i++) {
    markup[i] = `<div style="background-color:
    ${getRandomHexColor()};
    width: ${30 + i * 10}px;
    height: ${30 + i * 10}px;"></div>`;
    
  }
  boxes.innerHTML = markup.join('');
}

// Фукция очищает содержимое div#boxes
function destroyBoxes() {
  boxes.innerHTML = "";
}
