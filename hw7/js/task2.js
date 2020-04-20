const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const newArrayWithLi = (ingredients) => {
    return ingredients.map(ingredient => {
        const liWithText = document.createElement('li')

        liWithText.textContent = ingredient;
        return liWithText;
    })
};

console.log(newArrayWithLi(ingredients))

const array = document.querySelector('#ingredients');
console.log(array);

array.append(...newArrayWithLi(ingredients));