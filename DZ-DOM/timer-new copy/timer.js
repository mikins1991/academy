import { showButtons, changeColorLinkTimer, hideButtonsTimer } from './tabs.js';
import { timerId } from './clock.js';
import { htmlElements } from './htmlElements.js';
import { ButtonStopwath } from './stopwatch.js';


export let timerSet;
let start;
let momentSecond = 0;
let lastSecond = 0;

let buttonTimerAll = new ButtonStopwath();

console.log(buttonTimerAll);

// {
htmlElements.startBtn.addEventListener('click', buttonStartClickTimer);
// htmlElements.stopBtn.addEventListener('click', buttonStopClick);
// htmlElements.resetBtn.addEventListener('click', buttonResetClick);
// }

htmlElements.timer.onclick = function () {
    showButtons();
    changeColorLinkTimer();
    htmlElements.output.innerHTML = `${`0`}:${`00`}:${`00`}`;
    clearInterval(timerId);
    hideButtonsTimer();
    // document.querySelector('button.start.timer').addEventListener('click', buttonStartClickTimer);

}


function buttonStartClickTimer() {
    timerSet = setInterval(intervalClickTimer, 1000);
    start = new Date().getTime();

}

function intervalClickTimer() {
    let minutesOn = 60 * 15;
    const difference = minutesOn - ((new Date().getTime() - start) / 1000);
    momentSecond = difference + lastSecond;
    let seconds = parseInt(momentSecond % 60);
    let minutes = parseInt((momentSecond / 60) % 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    console.log(`0:${minutes}:${seconds}`)
    htmlElements.output.innerHTML = `0:${minutes}:${seconds}`;
    if (momentSecond <= 0) {

        start = Date.now() + 1000;
    }
}
