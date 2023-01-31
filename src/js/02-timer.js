import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
let chosenDate;
let leftDays;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = Number(selectedDates[0]);
    console.log(this.defaultDate);
    leftDays = chosenDate - this.defaultDate;
    leftDays < 0 ? (startBtn.disabled = true) : (startBtn.disabled = false);
  },
};

flatpickr('#datetime-picker', options);

setInterval(foo, 1000);

function foo() {
  //   const currentDate = new Date();
  //   console.log(options.defaultDate);
  options.defaultDate;
}
startBtn.addEventListener('click', () => console.log(leftDays));
