const list = document.querySelector("#categories");

const items = document.querySelectorAll(".item");

console.log(`Number of categories : ${list.children.length}`);

items.forEach((item) =>
  console.log(`Category : ${item.children[0].textContent}
Elements : ${item.querySelectorAll("ul li").length}`)
);
