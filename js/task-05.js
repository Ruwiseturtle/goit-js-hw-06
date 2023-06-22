const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

textInput.addEventListener('input', (event) => {
    output.textContent =
        textInput.value.length !== 0 ?
        event.currentTarget.value : "Anonymous";

    
});
