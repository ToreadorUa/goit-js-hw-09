import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";

import Notiflix from 'notiflix';

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

function addLeadingZero(value) {
    return (value.padStart(2, '0'));
}

const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
// const timeEl{} = document.querySelector('.timer');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let selectedDate = null;
let timerId = null;

btnStartEl.disabled = true;
btnStopEl.disabled = true;

flatpickr('#datetime-picker', {
    defaultDate: new Date(),
    time_24hr: true,
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    onClose: (selectedDates) => {
        clearTimeData();
        selectedDate=selectedDates[0]
        const defaultDate = new Date();
        if (selectedDates[0] < defaultDate) {
            btnStartEl.disabled = true;
            clearInterval(timerId);
            btnStartEl.disabled = true;
            Notiflix.Notify.failure('Choose a date in the FUTURE!!!')
        } else
            btnStartEl.disabled = false;

    },
});

btnStartEl.addEventListener('click', () => {
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
    timerId = setInterval(() =>{
            let i = selectedDate - new Date();
            const time = convertMs(i);
            daysEl.textContent= addLeadingZero(time.days.toString());
            hoursEl.textContent = addLeadingZero(time.hours.toString()) ;
            minutesEl.textContent = addLeadingZero(time.minutes.toString()) ;
            secondsEl.textContent = addLeadingZero(time.seconds.toString()) ;
    }, 1000);
})
btnStopEl.addEventListener('click', () => {
    clearInterval(timerId);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;
})

function clearTimeData() {
    daysEl.textContent= '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
    secondsEl.textContent = '00';
}

console.dir(daysEl);


