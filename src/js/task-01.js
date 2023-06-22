
const items = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${items.length}`);
console.log('\n');

items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent} `);
    console.log(`Elements:: ${item.lastElementChild.children.length} `);
    console.log('\n');
});

