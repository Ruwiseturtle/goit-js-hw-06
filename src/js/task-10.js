
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls [type="number"]');
const btnCreate = document.querySelector('#controls [data-create]');
const btnDestroy = document.querySelector('#controls [data-destroy]');
const mainDiv = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => { return createBoxes(inputEl.value); });
btnDestroy.addEventListener('click', destroyDivs);

// ф-ція приймає кі-сть, визиває метод, який створює масив з обектами (divs)
// і добавляє єлементи масиву в DOM
function createBoxes(Amount) {
  const arrayElements = createObj(Amount);

  arrayElements.forEach(function (el) {
    mainDiv.append(el);   
  });
  } 

  // ф-ція очищає усі елементи
  function destroyDivs() {
  let list = document.querySelectorAll('.box');
  list.forEach(e => e.remove());
  inputEl.value = "";
    
}

// метод приймає кі-сть, скільки потрібно створити div, створює масив, 
// в який кидає елементи з властивостями. Вертає масив з елементами

function createObj(amount) {

  const elements = [];
  let sizeEl = 30;

  for (let i = 1; i <= amount; i += 1) {
    
    const newDiv = document.createElement("div");
    newDiv.style.width = String(sizeEl) + 'px';
    newDiv.style.height = String(sizeEl) + 'px';
    newDiv.style.background = getRandomHexColor();
    newDiv.classList.add('box');
    elements.push(newDiv);
    
    sizeEl += 10;
  }
  return elements;
} 

