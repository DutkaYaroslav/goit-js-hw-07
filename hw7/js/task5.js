let input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


const fn = event => {
    if (event.currentTarget.value.length > 0) {
        output.textContent = input.value;
    } else {
        output.textContent = 'stranger'
    }
}

input.addEventListener('input', fn);