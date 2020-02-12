import { htmlElements } from './htmlElements.js';


function showButtons() {
    htmlElements.buttons.forEach(item => item.classList.remove('hidden'));
}

function hideButtons() {
    htmlElements.buttons.forEach(item => item.classList.add('hidden'));
}

function removeSelect() {
    htmlElements.links.forEach(item => item.classList.remove('selected'));

}

function changeColorLinkStopwatch() {
    removeSelect();
    htmlElements.stopwatch.classList.add('selected');
}

function changeColorLinkClock() {
    removeSelect();
    htmlElements.clock.classList.add('selected');
}

function changeColorLinkTimer() {
    removeSelect();
    htmlElements.timer.classList.add('selected');
}

export { showButtons, hideButtons, changeColorLinkTimer, changeColorLinkStopwatch, changeColorLinkClock };