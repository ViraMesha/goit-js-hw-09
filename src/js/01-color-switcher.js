const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
let timerId = null;

function onStartBtn() {
    refs.startBtn.setAttribute("disabled", "");
    refs.stopBtn.removeAttribute("disabled");
    timerId = setInterval(
        () => {
            refs.body.style.backgroundColor = getRandomHexColor();
        }, 1000
    )
}

function onStopBtn() {
    clearInterval(timerId);
    refs.stopBtn.setAttribute("disabled", "");
    refs.startBtn.removeAttribute("disabled");
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}