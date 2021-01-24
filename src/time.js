const timeHours = document.querySelector(".time-hours"),
  colon = document.querySelector(".colon"),
  timeMinutes = document.querySelector(".time-minutes");

function blinkSec() {
  const colonClassList = colon.classList;
  if (!colonClassList.contains("blink")) {
    colonClassList.add("blink");
  } else {
    colonClassList.remove("blink");
  }
}

function displayTime() {
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  timeHours.innerHTML =
    `${currentHours}` < 10 ? `0${currentHours}` : currentHours;
  timeMinutes.innerHTML =
    `${currentMinutes}` < 10 ? `0${currentMinutes}` : currentMinutes;
}

function init() {
  displayTime();
  setInterval(displayTime, 1000);
  setInterval(blinkSec, 500);
}

init();
