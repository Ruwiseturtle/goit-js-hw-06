function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('button.change-color');
const spanEl = document.querySelector('span.color');
const bodyEl = document.querySelector('body');

const text = spanEl.textContent;


changeBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;

  spanEl.textContent = text + newColor;
  
})