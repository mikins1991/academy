import { hideButtons, changeColorLinkClock } from './tabs.js';
import { htmlElements } from './htmlElements.js';
import { timeIdSet } from './stopwatch.js';

export { timerId };

let timerId = setInterval(onIntervalNextTick, 1000);


htmlElements.clock.onclick = function () {
    hideButtons();
    changeColorLinkClock();
    clearInterval(timeIdSet);
    timerId = setInterval(onIntervalNextTick, 100);
}

function onIntervalNextTick() {
    let date = new Date();
    let time = date.toTimeString().split(' ', 1);
    htmlElements.output.innerHTML = time;
}