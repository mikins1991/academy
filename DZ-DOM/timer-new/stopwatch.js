import { showButtons, changeColorLinkStopwatch } from './tabs.js';
import { htmlElements } from './htmlElements.js';
import { timerId } from './clock.js';

htmlElements.startBtn.addEventListener('click', buttonStartWarch);
let timeIdSet;

htmlElements.stopwatch.onclick = function () {
    showButtons();
    changeColorLinkStopwatch();
    htmlElements.output.innerHTML = `${`0`}:${`00`}:${`00`}`;
    clearInterval(timerId);
}

function buttonStartWarch() {
    const startTime = new Date().getTime();
    timeIdSet = setInterval(timer, 1000);
    function timer() {
        const difference = (new Date().getTime() - startTime) / 1000;
        let seconds = parseInt(difference % 60);
        let minutes = parseInt((difference / 60) % 60);
        let hours = parseInt(((difference / 60) % 60) % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        htmlElements.output.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    htmlElements.stopBtn.addEventListener('click', buttonStopWath);
    htmlElements.resetBtn.addEventListener('click', buttonResetWath);
}

function buttonStopWath() {
    clearInterval(timeIdSet);
}

function buttonResetWath() {
    clearInterval(timeIdSet);
    htmlElements.output.innerHTML = `${`0`}:${`00`}:${`00`}`;
}