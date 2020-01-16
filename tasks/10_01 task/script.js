// let addBtn = document.querySelector('#addBtnJs');
// addBtn.onclick = function () {
//     function color() {
//         return Math.floor(Math.random() * 256);
//     }
//     addBtn.style.background = `rgb(${color() + ',' + color() + ',' + color()})`;

//     let str = Math.random().toString(36).substring(2, 5);
//     addBtn.innerHTML = `${str}`;
// }

let block = document.getElementsByClassName('block');
for (i = 0; i < block.length; i++) {
    block[i].addEventListener('click', function (event) {
        if (event.target.className == "btnDelete") {
            event.currentTarget.remove();
        }
    });
}

let addBtn = document.querySelector('#addBtnJs');
let addInput = document.querySelector('.addInput');

addBtn.addEventListener('click', function (e) {
    if (e.target.className == "addBtn") {
        document.querySelector('.blockText').innerHTML = addInput.value;
    }
});

// addBtn.onclick = function () {

// }