const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId;

function randomBackground() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
}

function startIntervalTimer() {
  timerId = setInterval(randomBackground, 1000);
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
}

function stopIntervalTimer() {
  clearInterval(timerId);
  btnStop.setAttribute('disabled', '');
  btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', startIntervalTimer);
btnStop.addEventListener('click', stopIntervalTimer);
