import { hideButtons, changeColorLinkClock } from './tabs.js';
import { htmlElements } from './htmlElements.js';

export { timerId };

let timerId = setInterval(onIntervalNextTick, 1000);

let timeIdSet;

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