const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

console.dir(dataLength);

inputEl.addEventListener("input", onInputFocus);
inputEl.addEventListener("blur", onInputBlur);

function onInputFocus(event) {
  console.log(event.currentTarget.value.length);
}

function onInputBlur(event) {
  const isDataLength = event.currentTarget.value.length >= dataLength;

  isDataLength
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
