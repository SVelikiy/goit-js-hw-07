const inputText = document.querySelector("#name-input");

const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (evt) => {
  if (evt.currentTarget.value.trim().length === 0) {
    outputText.textContent = "Anonymous";
    return;
  }
  outputText.textContent = evt.currentTarget.value.trim();
});
