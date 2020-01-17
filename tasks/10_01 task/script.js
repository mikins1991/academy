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

addBtn.addEventListener('click', function (event) {
    if (event.target.className == "addBtn") {
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
};

let searchInput = document.querySelector('.searchInput');
searchInput.oninput = function () {
    let list = document.getElementsByClassName('list');
    let str = searchInput.value.toLowerCase();

    for (i = 0; i < list.length; i++) {
        let para = list[i].getElementsByTagName('p')[0];
        let position = para.innerText.toLowerCase().indexOf(str);
        if (position !== -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
};
