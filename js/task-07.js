const fontSizeSlider = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontSizeSlider.addEventListener("input", onFontSizeChange);

textEl.style.fontSize = `${fontSizeSlider.value}px`;

function onFontSizeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
