const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector(`ul`);

const elements = ingredients.map((option) => {
  const ingredientsLi = document.createElement(`li`);
  ingredientsLi.classList.add(`item`);
  ingredientsLi.textContent = option;
  return ingredientsLi;
});

ingredientsEl.append(...elements);
