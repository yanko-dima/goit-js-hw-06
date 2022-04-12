const itemElements = document.querySelectorAll(".item");
const itemTitles = document.querySelectorAll(".item > h2");
const listOfCategory = document.querySelectorAll(".item > ul");

console.log("Number of categories: ", itemElements.length);

itemTitles.forEach((title, index) => {
  console.log("Category: ", title.textContent);
  console.log(
    "Elements: ",
    listOfCategory[index].querySelectorAll("li").length
  );
});
