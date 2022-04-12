const inputEl = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

inputEl.addEventListener("input", onInputFocus);

function onInputFocus(event) {
  const isEmpty = event.currentTarget.value === "";

  if (isEmpty) {
    nameOutput.textContent = "Anonymous";
  }

  if (!isEmpty) {
    nameOutput.textContent = event.currentTarget.value;
  }
}
