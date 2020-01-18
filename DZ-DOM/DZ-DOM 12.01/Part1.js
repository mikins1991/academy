//part1
let inputOne = document.querySelector('.inputOne');
let btnOne = document.querySelector('.btnOne');
btnOne.onclick = function () {
    let color = inputOne.value;
    document.body.style.backgroundColor = color;
}

//part 2
let selectTwo = document.querySelector('.selectTwo');
let btnTwo = document.querySelector('.btnTwo');
btnTwo.onclick = function () {
    document.body.style.backgroundColor = selectTwo.value;
}

//part 3
let selectTree = document.querySelector('.selectTree');
let btnTree = document.querySelector('.btnTree');
btnTree.onclick = function () {
    document.body.className = selectTree.value;
}
//part 4

let inputFour = document.querySelector('.inputFour');
let btnFour = document.querySelector('.btnFour');

btnFour.onclick = function () {
    let colorFour = inputFour.value;
    document.body.style.setProperty('--main-color', colorFour);
}

//part 5
let selectFive = document.querySelector('.selectFive');
selectFive.onchange = function () {
    document.body.style.setProperty('--main-color', this.value);
}
