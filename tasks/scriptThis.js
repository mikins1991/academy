// this task 1
let calculator = {
    read() {
        this.a = +prompt('Число a:', '2');
        this.b = +prompt('Число b:', '3');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// task2
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
    }
};
ladder.up().up().down().showStep();