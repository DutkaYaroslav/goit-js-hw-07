const input = document.querySelector('#validation-input');

const lenght = document.querySelector('input[data-length="6"]')




const fn = event => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        input.classList.remove('invalid')

        input.classList.add('valid');

    } else {

        input.classList.remove('valid');

        input.classList.add('invalid');

    }

}


input.addEventListener('blur', fn)