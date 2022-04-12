const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const isDataLength = event.currentTarget.value.length >= Number(dataLength);

  isDataLength
    ? inputEl.classList.add("valid") & inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") & inputEl.classList.remove("valid");
}
