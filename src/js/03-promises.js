import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-bottom',
  cssAnimationStyle: 'from-right',
  distance: '20px',
  opacity: 1,
});

const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
const submitBtn = document.querySelector('[type=submit]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        Notiflix.Notify.success('res');
        // Fulfill
      } else {
        Notiflix.Notify.success('rej');
        // Reject
      }
    }, 2000);
  });
}

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  for (let i = 0; i < amount.value; i++) createPromise(i, delay.value);
});
