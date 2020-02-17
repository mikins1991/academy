let timerId = setInterval(onIntervalNextTick, 1000);
let timeIdSet;

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.select = document.querySelectorAll('.hidden')
htmlElements.buttons = document.querySelectorAll(".hidden");

htmlElements.startBtn.addEventListener('click', buttonStartWarch);

function showButtons() {
    htmlElements.buttons.forEach(item => item.classList.remove('hidden'));
}

function hideButtons() {
    htmlElements.buttons.forEach(item => item.classList.add('hidden'));
}

htmlElements.stopwatch.onclick = function () {
    showButtons();
    htmlElements.stopwatch.classList.add('selected');
    htmlElements.timer.classList.remove('selected');
    htmlElements.clock.classList.remove('selected');
    htmlElements.output.innerHTML = `${`0`}:${`00`}`;
    clearInterval(timerId);
}

htmlElements.clock.onclick = function () {
    hideButtons();
    htmlElements.clock.classList.add('selected');
    htmlElements.timer.classList.remove('selected');
    htmlElements.stopwatch.classList.remove('selected');
    clearInterval(timeIdSet);
    timerId = setInterval(onIntervalNextTick, 100);
}

htmlElements.timer.onclick = function () {
    hideButtons();
    htmlElements.timer.classList.add('selected');
    htmlElements.clock.classList.remove('selected');
    htmlElements.stopwatch.classList.remove('selected');
    clearInterval(timerId);
}

function onIntervalNextTick() {
    let date = new Date();
    let time = date.toTimeString().split(' ', 1);
    htmlElements.output.innerHTML = time;
}

function buttonStartWarch() {
    const startTime = new Date().getTime();
    timeIdSet = setInterval(timer, 1000);
    function timer() {
        const difference = (new Date().getTime() - startTime) / 1000;
        let seconds = parseInt(difference % 60);
        const minutes = parseInt((difference / 60) % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        htmlElements.output.innerHTML = `${minutes}:${seconds}`;
    }
    htmlElements.stopBtn.addEventListener('click', buttonStopWath);
    htmlElements.resetBtn.addEventListener('click', buttonResetWath);
}

function buttonStopWath() {
    clearInterval(timeIdSet);
}

function buttonResetWath() {
    clearInterval(timeIdSet);
    htmlElements.output.innerHTML = `${`0`}:${`00`}`;
}