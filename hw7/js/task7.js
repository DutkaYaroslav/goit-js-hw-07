const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text')

console.log(input)

const range = event => {

    span.setAttribute('style', `font-size: ${event.currentTarget.value}px`)
    // event.currentTarget.value = Number(size)

}

input.addEventListener('input', range)