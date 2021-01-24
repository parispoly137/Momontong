const toDoForm = document.querySelector(".js-toDos"),
  inputToDos = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS = "To do";

let idNumbers = 1;

let toDos = [];

function deleteToDos(event) {
  event.preventDefault();

  const btn = event.target,
    li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });

  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function paintToDos(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span");

  const newId = idNumbers;
  idNumbers += 1;

  span.innerText = text;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDos);

  li.appendChild(delBtn);
  li.appendChild(span);

  toDoList.appendChild(li);

  li.id = newId;

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  li.classList.add("fadeIn");
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = inputToDos.value;

  paintToDos(currentValue);
  inputToDos.value = "";
}

function loadedToDos() {
  const SAVED_TODOS = localStorage.getItem(TODOS);

  if (SAVED_TODOS !== null) {
    const parsedToDos = JSON.parse(SAVED_TODOS);
    parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text);
    });
  }
}

function init() {
  loadedToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
