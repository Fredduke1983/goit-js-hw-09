const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
const submitBtn = document.querySelector('[type=submit]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    if (shouldResolve) {
      console.log('res');
      // Fulfill
    } else {
      console.log('rej');
      // Reject
    }
  });
}

submitBtn.addEventListener('click', createPromise(1, 2));
