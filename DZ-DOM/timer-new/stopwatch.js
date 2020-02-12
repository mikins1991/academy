import { showButtons, changeColorLinkStopwatch } from './tabs.js';
import { htmlElements } from './htmlElements.js';
import { timerId } from './clock.js';

let timeIdSet;
let startTime;
let momentSecond = 0;
let lastSecond = 0;

htmlElements.stopwatch.onclick = function () {
    showButtons();
    changeColorLinkStopwatch();
    htmlElements.output.innerHTML = `${`0`}:${`00`}:${`00`}`;
    clearInterval(timerId);
}

// function ButtonStopwath() { }

// ButtonStopwath.prototype.init = function () {
    htmlElements.startBtn.addEventListener('click', buttonStartClick);
    htmlElements.stopBtn.addEventListener('click', buttonStopClick);
    htmlElements.resetBtn.addEventListener('click', buttonResetClick);

// }

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
// export {ButtonStopwath};