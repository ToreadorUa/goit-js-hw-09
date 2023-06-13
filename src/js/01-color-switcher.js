function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body')
let timerId = null;

btnStopEl.disabled = true;

btnStartEl.addEventListener('click', () => {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
        btnStartEl.disabled = true;
        btnStopEl.disabled = false;
    }, 1000);
})
btnStopEl.addEventListener('click', () =>
{
    clearInterval(timerId);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;
});
