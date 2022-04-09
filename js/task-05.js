const inputEl = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

inputEl.addEventListener("input", onInputFocus);

function onInputFocus(event) {
  nameOutput.textContent = event.currentTarget.value;
}
