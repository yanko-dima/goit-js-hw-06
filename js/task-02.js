const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");
console.log(ulEl);

const onListItemElement = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    listItemEl.classList.add("item");

    return listItemEl;
  });
};

const items = onListItemElement(ingredients);

ulEl.append(...items);
