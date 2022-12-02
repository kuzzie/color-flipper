const body = document.querySelector("body");
const button = document.querySelector(".change-colour-button");
const currentColour = document.querySelector(".current-colour");

const randomColour = () => {
  return `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
}

button.addEventListener("click", () => {
  let newColour = randomColour();
  body.style.backgroundColor = `rgb(${newColour})`;
  currentColour.innerHTML = `Current colour: rgb(${newColour})`;
});