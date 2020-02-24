const divTimer = document.getElementById('timer');
let momentSecond = 0;
let lastSecond = 0;
let timerSet;
let start;

function startTimer() {
    timerSet = setInterval(intervalClickTimer, 1000);
    start = new Date().getTime();
    divTimer.innerHTML = `${`00`}:${`15`}`;

}

function intervalClickTimer() {

    let minutesOn = 15;
    const difference = minutesOn - ((new Date().getTime() - start) / 1000);
    momentSecond = difference + lastSecond;
    let seconds = parseInt(momentSecond % 60);
    let minutes = parseInt((momentSecond / 60) % 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    // console.log(`0:${minutes}:${seconds}`)
    divTimer.innerHTML = `${minutes}:${seconds}`;
    if (momentSecond <= 0) {
        start = Date.now() + 1000;
    }

    if (difference < 60) {
        divTimer.style.color = 'red';
    }
    if (difference < 1) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(timerSet);
    lastSecond = 0;
    divTimer.innerHTML = `${`00`}:${`00`}`;

}

export { startTimer, stopTimer }