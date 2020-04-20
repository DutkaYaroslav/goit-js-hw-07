let counterValue = 0;
const step = 1

const increment = function () {
    counterValue += step;
    value.textContent = counterValue;
}

const decrement = function () {
    counterValue -= step;
    value.textContent = counterValue;
}


const incrementButton = document.querySelector('#increment');
const decrementButon = document.querySelector('#decrement');

incrementButton.addEventListener('click', increment);
decrementButon.addEventListener('click', decrement);

const value = document.querySelector('#value');