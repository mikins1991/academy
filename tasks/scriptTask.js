// const modal = document.getElementById('myModal');
// const overflow = document.createElement('div');
// const span = document.getElementById('mySpan');
// const btn = document.getElementById('next');

// btn.onclick = function () {
//     getModal();
// }
// function getModal() {
//     console.log('ff');
//     modal.style.display = 'block';
//     // overflow.className = 'overflow';
//     // document.body.appendChild(overflow);
//     // let height = modal.offsetHeight;
//     // modal.style.marginTop = -height / 2 + 'px';
//     // modal.style.top = '50%'
// }
// span.onclick = function () {
//     modal.style.display = 'none';
// }

// window.onclick = function () {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});