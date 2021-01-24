const body = document.querySelector("body");

const IMAGE_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `src/bgImage/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
