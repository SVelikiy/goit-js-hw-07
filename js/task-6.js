function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector(".controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createFunc);
destroyBtn.addEventListener("click", destroyBoxes);

function createFunc() {
  const value = Number(input.value);
  if (value < 1 || value > 100) {
    return;
  }

  boxes.innerHTML = createBoxes(value);
  input.value = '';
}

function createBoxes(amount) {
  let markup = "";
  let boxSize = 20;

  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    markup += `<div style="background-color:${getRandomHexColor()}; width: ${boxSize}px; height:${boxSize}px;" ></div>`;
  }
  return markup;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

