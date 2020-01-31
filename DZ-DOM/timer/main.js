let timerId = setInterval(onIntervalNextTick, 100);
let timeIdSet;

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.links = document.querySelector('.links');
htmlElements.select = document.querySelectorAll('.hidden')

htmlElements.startBtn.addEventListener('click', buttonStartWarch);

htmlElements.links.addEventListener('click', function (event) {
    let link = event.target;
    if (link.className == 'clock selected' || link.className == 'black') {
        link.className = 'blue';
        htmlElements.stopwatch.className = 'stopwatch';
        htmlElements.timer.className = 'timer';

        clearInterval(timeIdSet);
        resetStopWatch();
        timerId = setInterval(onIntervalNextTick, 100);

    } else if (link.className == 'stopwatch') {
        link.className = 'blue';
        htmlElements.timer.className = 'timer';
        htmlElements.clock.className = 'black';

        clearInterval(timerId);
        addStopwatch();

    } else if (link.className == 'timer') {
        link.className = 'blue';
        htmlElements.clock.className = 'black';
        htmlElements.stopwatch.className = 'stopwatch';

        resetStopWatch();
        clearInterval(timerId);
    }
})

function onIntervalNextTick() {
    let date = new Date();
    let time = date.toTimeString().split(' ', 1);
    htmlElements.output.innerHTML = time;
}

function addStopwatch() {
    htmlElements.select[0].className = 'start hiddenoff';
    htmlElements.select[1].className = 'stop hiddenoff';
    htmlElements.select[2].className = 'reset hiddenoff';
    htmlElements.output.innerHTML = `${`0`}:${`00`}`;
}

function resetStopWatch() {
    htmlElements.select[0].className = 'start hidden';
    htmlElements.select[1].className = 'stop hidden';
    htmlElements.select[2].className = 'reset hidden';
}

function buttonStartWarch() {
    const startTime = new Date().getTime();
    timeIdSet = setInterval(Timer, 1000);
    function Timer() {
        const difference = (new Date().getTime() - startTime) / 1000;
        let seconds = parseInt(difference % 60);
        const minutes = parseInt((difference / 60) % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        htmlElements.output.innerHTML = `${minutes}:${seconds}`;
    }

    htmlElements.stopBtn.addEventListener('click', buttonStopWath);
    function buttonStopWath() {
        clearInterval(timeIdSet);
    }

    htmlElements.resetBtn.addEventListener('click', buttonResetWath);
    function buttonResetWath() {
        clearInterval(timeIdSet);
        htmlElements.output.innerHTML = `${`0`}:${`00`}`;
    }
}