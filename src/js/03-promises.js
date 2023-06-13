import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
let step;

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let currDelay = Number (delayEl.value);
  const amount = Number(amountEl.value);
  step = Number(stepEl.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, currDelay)
    .then((value) => {
     Notiflix.Notify.success (value);
  })
  .catch((err) => {
    Notiflix.Notify.failure (err)
  });
    currDelay += step;
  }
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay )
    
  })
  
}
