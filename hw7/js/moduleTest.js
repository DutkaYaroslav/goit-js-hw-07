// const button = document.querySelector('.button')

// console.dir(button.textContent)
// button.textContent = 'wtf'
// console.log(button.textContent)

// const menuItem = document.querySelectorAll('.item')

// console.dir(menuItem)

const but = document.getElementById('but');

const users = [{
        name: 'Alen',
        pets: ['pipi dog', 'margan fish']
    },
    {
        name: 'Alex',
        pets: ['Grazy elephant', 'big mad']
    },
    {
        name: 'Mark',
        pets: ['Porky pig dog', 'think stick']
    },
];

but.addEventListener('click', onButtonClick);

function onButtonClick(e) {
    const htmlRezult =
        '<ul id="list">' +
        users
        .map(el => {
            return (
                `<li><h1>${el.name}</h1><ul>` +
                el.pets
                .map(_ => {
                    return `<li>${_}</li>`;
                })
                .join() +
                `</ul></li>`
            );
        })
        .join() +
        '</ul>';
    but.removeEventListener('click', onButtonClick);
    document.body.innerHTML = htmlRezult;
    document.getElementById('list').addEventListener('click', onListPress);
}

function onListPress(e) {
    console.log(e.target, e.currentTarget);
}