// setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.select = document.querySelectorAll('.hidden')


htmlElements.clock.addEventListener('click', clockNewColor);
htmlElements.stopwatch.addEventListener('click', stopwatchNewColor);
htmlElements.timer.addEventListener('click', timerNewColor);
htmlElements.startBtn.addEventListener('click', buttonStartWarch);

// function clockTime() {
//     let date = new Date();
//     let time = date.toTimeString().split(' ', 1);
//     htmlElements.output.innerHTML = time;
// }

function clockNewColor() {
    htmlElements.clock.className = 'blue';
    htmlElements.stopwatch.className = 'stopwatch';
    htmlElements.timer.className = 'timer';
    htmlElements.select[0].className = 'start hidden';
    htmlElements.select[1].className = 'stop hidden';
    htmlElements.select[2].className = 'reset hidden';
    // clockTime()
    setInterval(clockTime, 1000);
    function clockTime() {
        let date = new Date();
        let time = date.toTimeString().split(' ', 1);
        htmlElements.output.innerHTML = time;
    }
}

function stopwatchNewColor() {
    htmlElements.stopwatch.className = 'blue';
    htmlElements.timer.className = 'timer';
    htmlElements.clock.className = 'black';

    htmlElements.select[0].className = 'start hiddenoff';
    htmlElements.select[1].className = 'stop hiddenoff';
    htmlElements.select[2].className = 'reset hiddenoff';
    htmlElements.select[2].className = 'reset hiddenoff';
    // htmlElements.output.className = 'stopwatch';
    // htmlElements.output.document.querySelector('.stopwatch').innerHTML = `${00}:${00}`;

    htmlElements.output.innerHTML = `${00}:${00}`;
}

function buttonStartWarch() {
    const startTime = new Date().getTime();
    setInterval(Timer, 1000);
    function Timer() {
        const difference = (new Date().getTime() - startTime) / 1000;
        let seconds = parseInt(difference % 60);
        const minutes = parseInt((difference / 60) % 60);
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        htmlElements.output.innerHTML = `${minutes}:${seconds}`;
        console.log(`${minutes}:${seconds}`);
    }
}

function timerNewColor() {
    htmlElements.timer.className = 'blue';
    htmlElements.clock.className = 'black';
    htmlElements.stopwatch.className = 'stopwatch';

    htmlElements.select[0].className = 'start hidden';
    htmlElements.select[1].className = 'stop hidden';
    htmlElements.select[2].className = 'reset hidden';


}