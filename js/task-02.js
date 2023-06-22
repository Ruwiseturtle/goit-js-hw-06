const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = document.querySelector('#ingredients');

const list = ingredients.map((text) => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = text; 
  return element;
});


items.append(...list);
