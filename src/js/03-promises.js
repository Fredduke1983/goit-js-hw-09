import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-bottom',
  cssAnimationStyle: 'from-right',
  distance: '20px',
  opacity: 1,
});

let delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
const submitBtn = document.querySelector('[type=submit]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        Notiflix.Notify.success('res');
        console.log('delay in promise  ===', delay);
        // Fulfill
      } else {
        Notiflix.Notify.failure('rej');
        // Reject
      }
    }, Number(delay));
  });
}

submitBtn.addEventListener('click', onSubmit);
let stepDelay = delay.value;

function onSubmit(e) {
  e.preventDefault();
  console.log('delay in sub ===', delay.value);
  console.log('step in sub ===', step.value);
  for (let i = 0; i < amount.value; i++) {
    stepDelay = Number(stepDelay) + Number(step.value);
    console.log('stepDelay ===', stepDelay);
    createPromise(i, stepDelay);
  }
}
