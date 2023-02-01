import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
let days = document.querySelector('[data-days]');
let hours = document.querySelector('[data-hours]');
let minutes = document.querySelector('[data-minutes]');
let seconds = document.querySelector('[data-seconds]');

let chosenDate = null;
let intervalId = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = Number(selectedDates[0]);
    const currentDateInOptions = new Date();

    chosenDate - currentDateInOptions < 0
      ? (startBtn.disabled = true)
      : (startBtn.disabled = false);
    clearInterval(intervalId);
  },
};

flatpickr('#datetime-picker', options);

function leftTimes() {
  const currentDate = new Date();

  const leftMs = chosenDate - currentDate;
  days.innerHTML = String(convertMs(leftMs).days).padStart(2, 0);
  hours.innerHTML = String(convertMs(leftMs).hours).padStart(2, 0);
  minutes.innerHTML = String(convertMs(leftMs).minutes).padStart(2, 0);
  seconds.innerHTML = String(convertMs(leftMs).seconds).padStart(2, 0);
  if (leftMs <= 1) {
    clearInterval(intervalId);
  }
}
startBtn.addEventListener('click', intervalTimes);

function intervalTimes() {
  intervalId = setInterval(leftTimes, 1000);
  startBtn.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
