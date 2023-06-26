
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls [type="number"]');
const btnCreate = document.querySelector('#controls [data-create]');
const btnDestroy = document.querySelector('#controls [data-destroy]');
const mainDiv = document.querySelector('#boxes');

// console.dir(inputEl);

btnCreate.addEventListener('click', () => { createBoxes(inputEl.value);});
btnDestroy.addEventListener('click', destroyDivs);

// ф-ція приймає кі-сть, визиває метод, який створює масив з обектами (divs)
// і добавляє єлементи масиву в DOM
function createBoxes(amount) {
  if (Number(inputEl.value) < Number(inputEl.min)
    || Number(inputEl.value) > Number(inputEl.max)) {
    window.alert("Введіть число від 1 до 100");
    return;
  }
  
  const arrayElements = createObj(amount);
  const markup = arrayElements.join("");
  mainDiv.innerHTML += markup;

  // arrayElements.forEach(function (el) {
  //   mainDiv.append(el);   
  // });
  } 

  // ф-ція очищає усі елементи
  function destroyDivs() {
    mainDiv.innerHTML = '';
    inputEl.value = "";
}

// метод приймає кі-сть, скільки потрібно створити div, створює масив, 
// в який кидає елементи з властивостями. Вертає масив з елементами

function createObj(amount) {
  const elements = [];
  let sizeEl = 30;

  for (let i = 1; i <= amount; i += Number(inputEl.step)) {
    
    // const newDiv = document.createElement("div");
    // newDiv.style.width = String(sizeEl) + 'px';
    // newDiv.style.height = String(sizeEl) + 'px';
    // newDiv.style.background = getRandomHexColor();
    // newDiv.classList.add('box');
    // elements.push(newDiv);
    
    let strDiv = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${sizeEl}px; height: ${sizeEl}px"></div>`;
    elements.push(strDiv);

    sizeEl += 10;
  }
  return elements;
} 

