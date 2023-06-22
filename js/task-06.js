const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length == inputEl.getAttribute("data-length")) {
                inputEl.classList.add('valid');
                inputEl.classList.remove('invalid');
            }
            else if (inputEl.value.length != inputEl.getAttribute("data-length")){
                inputEl.classList.add('invalid');
                 inputEl.classList.remove('valid');
            }
    });



