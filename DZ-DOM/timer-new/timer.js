import { hideButtons, changeColorLinkTimer } from './tabs.js';
import { timerId } from './clock.js';
import { htmlElements } from './htmlElements.js';


htmlElements.timer.onclick = function () {
    hideButtons();
    changeColorLinkTimer();
    clearInterval(timerId);
}