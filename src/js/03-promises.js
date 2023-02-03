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
        res(console.log('DONE'));
      } else {
        rej(console.log('ERROR'));
      }
    }, delay);
  });

  promise.then(
    res =>
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
    rej =>
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  );
}

submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let stepDelay = delay.value;
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, stepDelay);
    stepDelay = Number(stepDelay) + Number(step.value);
  }
}
