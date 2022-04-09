const itemElements = document.querySelectorAll(".item");
const itemTitles = document.querySelectorAll(".item > h2");
const listOfCategory = document.querySelectorAll(".item > ul");

console.log("Number of categories: ", itemElements.length);

itemTitles.forEach((x, y) => {
  console.log("Category: ", x.textContent);
  console.log("Elements: ", listOfCategory[y].querySelectorAll("li").length);
});
