const fontSizeSlider = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontSizeSlider.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
