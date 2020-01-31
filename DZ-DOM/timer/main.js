setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.buttons = document.querySelector('.buttons');

htmlElements.clock.addEventListener('click', clockNewColor);
htmlElements.stopwatch.addEventListener('click', stopwatchNewColor);
htmlElements.timer.addEventListener('click', timerNewColor);
htmlElements.buttons.addEventListener('click', buttonsNew);

function onIntervalNextTick(){
    let date = new Date();
    let time = date.toTimeString().split(' ', 1);
    htmlElements.output.innerHTML = time;
}

function clockNewColor(){
     htmlElements.clock.className = 'blue';
     htmlElements.stopwatch.className = 'stopwatch';
     htmlElements.timer.className = 'timer';

        htmlElements.buttons.innerHTML

}

function stopwatchNewColor(){
    htmlElements.stopwatch.className = 'blue';
    htmlElements.timer.className = 'timer';
    htmlElements.clock.className = 'clock selected';
}

function timerNewColor(){
    htmlElements.timer.className = 'blue';
    htmlElements.clock.className = 'clock selected';
    htmlElements.stopwatch.className = 'stopwatch';
}

