import { hideButtons, changeColorLinkClock, showButtonsTimer } from './tabs.js';
import { htmlElements } from './htmlElements.js';
import { timerSet } from './timer.js';
import { timeIdSet } from './stopwatch.js';


let timerId = setInterval(onIntervalNextTick, 1000);

htmlElements.clock.onclick = function () {
    hideButtons();
    showButtonsTimer();
    changeColorLinkClock();
    clearInterval(timeIdSet);
    clearInterval(timerSet);

    timerId = setInterval(onIntervalNextTick, 100);
}

function onIntervalNextTick() {
    let date = new Date();
    let time = date.toTimeString().split(' ', 1);
    htmlElements.output.innerHTML = time;
}

export { timerId };