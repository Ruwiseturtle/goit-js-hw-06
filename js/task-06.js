const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', () => {
    const str = inputEl.value.trim();
    
    if (str.length === Number(inputEl.getAttribute("data-length"))) {
                inputEl.classList.add('valid');
                inputEl.classList.remove('invalid');
            }
            else if (str.length !== inputEl.getAttribute("data-length")){
                inputEl.classList.add('invalid');
                 inputEl.classList.remove('valid');
            }
    });



