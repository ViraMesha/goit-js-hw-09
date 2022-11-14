import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

console.log(Notiflix)

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dayEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');
let timerID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled');
      refs.startBtn.addEventListener('click', onStartBtn);

      function onStartBtn() {
        timerID = setInterval(() => {
          console.log(Number(selectedDates[0] - Date.now()));

          const timeLeft = selectedDates[0] - Date.now();
          const { days, hours, minutes, seconds } = convertMs(timeLeft);

          refs.dayEl.textContent = days;
          refs.hoursEl.textContent = hours;
          refs.minutesEl.textContent = minutes;
          refs.secondsEl.textContent = seconds;

          if (Number(selectedDates[0] - Date.now()) < 1000) {
            clearInterval(timerID);
          }
        }, 1000);
      }
    }
  },
};

flatpickr(refs.inputEl, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
