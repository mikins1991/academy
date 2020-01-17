// let block = document.getElementsByClassName('block');
// for (i = 0; i < block.length; i++) {
//     block[i].addEventListener('click', function (event) {
//         if (event.target.className == "btnDelete") {
//             event.currentTarget.remove();
//         }
//     });
// }

const MENU = document.querySelector('.menu');
const CHECKNONE = document.getElementById('check');
let addInput = document.querySelector('.addInput');
let addBtn = document.querySelector('.addBtn');

MENU.addEventListener('click', function (event) {
    if (event.target.className == 'btnDelete') {
        const listDel = event.target.parentElement.parentElement;
        listDel.remove();
    }
});

addBtn.addEventListener('click', function (e) {
    if (e.target.className == "addBtn") {
        let menuList = MENU.firstElementChild;
        let listClone = menuList.cloneNode(MENU);
        MENU.appendChild(listClone).querySelector('.blockText').innerHTML = addInput.value;
    }
});


function checkFun() {
    if (CHECKNONE.checked == true) {
        MENU.style.display = 'none';
    } else {
        MENU.style.display = 'block';
    }
}

let searchInput = document.querySelector('.searchInput');

searchInput.oninput = function () {
    let str = searchInput.value;
    let textP = document.getElementsByClassName('blockText')
    console.log(str);

    for (i = 0; i < textP.length; i++) {
        let textPP = textP[i].innerHTML;
        let position = textPP.indexOf(str);
        if (position !== -1) {
            console.log('ok');
        } else {
            console.log('no')
        }
        console.log(position);
    }
}

MENU.addEventListener('oninput', function (event) {
    if (event.target.className == 'searchInput') {

    }
});
// function searchFun(text, str) {
//     if (text.search(str) != -1) {
//         console.log('ok');
//     } else {
//         console.log('no');
//     }
//     console.log(str);
// }