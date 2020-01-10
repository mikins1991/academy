let addBtn = document.querySelector('#addBtnJs');
addBtn.onclick = function () {
    function color() {
        return Math.floor(Math.random() * 256);
    }
    addBtn.style.background = `rgb(${color() + ',' + color() + ',' + color()})`;

    let str = Math.random().toString(36).substring(2, 5);
    addBtn.innerHTML = `${str}`;
}