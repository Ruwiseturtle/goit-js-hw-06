
const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', changeSize);

function changeSize() {
    spanEl.style.fontSize = inputEl.value + 'px';
}