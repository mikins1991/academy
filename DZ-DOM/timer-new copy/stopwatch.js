import { showButtons, changeColorLinkStopwatch, showButtonsTimer } from './tabs.js';
import { htmlElements } from './htmlElements.js';
import { timerId } from './clock.js';
import { timerSet } from './timer.js';

export let timeIdSet;
let startTime;
let momentSecond = 0;
let lastSecond = 0;

htmlElements.stopwatch.onclick = function () {
    showButtons();
    showButtonsTimer();
    changeColorLinkStopwatch();
    htmlElements.output.innerHTML = `${`0`}:${`00`}:${`00`}`;
    clearInterval(timerId);
    clearInterval(timerSet);

}

function ButtonStopwath() { }

ButtonStopwath.prototype.init = function () {
    start: htmlElements.startBtn.addEventListener('click', buttonStartClick);
    stop: htmlElements.stopBtn.addEventListener('click', buttonStopClick);
    reset: htmlElements.resetBtn.addEventListener('click', buttonResetClick);

}
console.log(ButtonStopwath);

function buttonStartClick() {
    timeIdSet = setInterval(intervalClick, 1000);
    startTime = new Date().getTime();
}


function buttonStopClick() {
    clearInterval(timeIdSet);
    lastSecond = momentSecond;
}

function buttonResetClick() {
    clearInterval(timeIdSet);
    lastSecond = 0;
    htmlElements.output.innerHTML = `${`0`}:${`00`}:${`00`}`;
}

function intervalClick() {
    const difference = (new Date().getTime() - startTime) / 1000;
    momentSecond = difference + lastSecond;
    let seconds = parseInt(momentSecond % 60);
    let minutes = parseInt((momentSecond / 60) % 60);
    let hours = parseInt(((momentSecond / 60) % 60) % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    htmlElements.output.innerHTML = `${hours}:${minutes}:${seconds}`;
}
export { ButtonStopwath };