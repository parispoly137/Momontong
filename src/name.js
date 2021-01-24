const nameForm = document.querySelector(".js-name"),
  inputBox = nameForm.querySelector("input"),
  helloText = document.querySelector(".js-greeting");

const SAVE_NAME = "Name",
  SHOWING = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputBox.value;
  saveName(currentValue);
  paintName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING);
  helloText.classList.remove(SHOWING);
  nameForm.addEventListener("submit", handleSubmit);
}

function paintName(saved) {
  nameForm.classList.remove(SHOWING);
  helloText.classList.add(SHOWING);
  helloText.classList.add("fadeIn");
  helloText.innerText = `Hello, ${saved}!`;
}

function saveName(name) {
  localStorage.setItem(SAVE_NAME, name);
}

function loadName() {
  const SAVED_NAME = localStorage.getItem(SAVE_NAME);
  if (SAVED_NAME !== null) {
    paintName(SAVED_NAME);
  } else {
    askForName();
  }
}

function init() {
  loadName();
}

init();
