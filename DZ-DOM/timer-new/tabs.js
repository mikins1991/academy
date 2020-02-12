import { htmlElements } from './htmlElements.js';


function showButtons() {
    htmlElements.buttons.forEach(item => item.classList.remove('hidden'));
}

function hideButtons() {
    htmlElements.buttons.forEach(item => item.classList.add('hidden'));
}

function changeColorLinkStopwatch() {
    htmlElements.links.forEach(item => item.classList.remove('selected'));
    htmlElements.stopwatch.classList.add('selected');
}

function changeColorLinkClock() {
    htmlElements.links.forEach(item => item.classList.remove('selected'));
    htmlElements.clock.classList.add('selected');
}

function changeColorLinkTimer() {
    htmlElements.links.forEach(item => item.classList.remove('selected'));
    htmlElements.timer.classList.add('selected');
}

export { showButtons, hideButtons, changeColorLinkTimer, changeColorLinkStopwatch, changeColorLinkClock };