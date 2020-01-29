// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('a', 0);
//         this.b = +prompt('b', 0);
//     }

//     this.sum = function () {
//         return this.a + this.b;
//     }

//     this.mul = function () {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();
// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());


// function Accumulator(startingValue) {
//     this.value = startingValue;
//     console.log(this.value);
//     this.read = function () {
//         this.a = +prompt('a', 0);
//         this.value += this.a;
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// console.log(getLastDayOfMonth(2012, 1));

// function getSecondsToday() {
//     let date = new Date();
//     let dateNow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

//     console.log(+date);
//     console.log(dateNow);
//     let getSecondsToday = (dateNow - date) / 1000;
//     console.log(getSecondsToday);

//     return Math.floor(getSecondsToday);
// }
// getSecondsToday();

function formatDate(date) {
    let dateNow = new Date();
    let time = (dateNow - date) / 1000;
    if (time < 1) {
        return 'прямо сейчас';
    } else if (time >= 1 && time < 60) {
        return `${time} сек. назад`;
    } else if (time >= 60 && time < 3600) {
        return `${time / 60} мин. назад`;
    } else if (time >= 3600) {
        return `${time / 60} мин. назад`;
    }

}
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));