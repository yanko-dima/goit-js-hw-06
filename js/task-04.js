const counterValue = {
  value: 0,

  onIncrement() {
    this.value += 1;
  },

  onDecrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.getElementById("value");

decrementBtn.addEventListener("click", function () {
  counterValue.onDecrement();
  counterEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  counterValue.onIncrement();
  counterEl.textContent = counterValue.value;
});
