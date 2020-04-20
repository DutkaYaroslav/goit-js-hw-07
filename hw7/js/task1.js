const howManyItems = document.getElementById('categories').children;

console.log(`В списке ${howManyItems.length} категории`);

const lis = document.querySelectorAll('.item');


lis.forEach(li => {
    const title = li.querySelector("h2").textContent;
    const list = li.querySelectorAll("li").length

    console.log(`категорія: ${title} - кількість елементів: ${list}`)

})