const btn = document.querySelector('.btnColor');
const btnAdd = document.querySelector('.btnTable');

btnAdd.onclick = function () {
    addTable();
}

function addTable() {
    let tableDiv = document.getElementById("tableDiv");
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    tableBody.className = 'table';

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.className = 'td';
        }
    }

    tableDiv.appendChild(table);
    colorNew();
}

function colorNew() {
    let tableNew = document.querySelector('.table');
    tableNew.addEventListener('mousedown', function (event) {
        let cellElem = event.target;
        if (cellElem.className == 'td') {
            cellElem.style.backgroundColor = 'black';
            cellElem.className = 'black';
        } else if (cellElem.className == 'black') {
            cellElem.style.backgroundColor = 'white';
            cellElem.className = 'td';
        }
    })
}

btn.addEventListener('mousedown', function () {
    let blackTd = document.querySelectorAll('.black');
    let whiteTd = document.querySelectorAll('.td');
    for (let j = 0; j < whiteTd.length; j++) {
        whiteTd[j].style.backgroundColor = 'black';
        whiteTd[j].className = 'black'
    }
    for (let i = 0; i < blackTd.length; i++) {
        blackTd[i].style.backgroundColor = 'white';
        blackTd[i].className = 'td';
    }
})