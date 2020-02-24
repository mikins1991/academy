const modal = document.getElementsByClassName('modal');
const overflow = document.createElement('div');

const btn = document.getElementById('next');
btn.onclick = function () {
    getModal();
}
function getModal() {
    console.log('ff');
    overflow.className = 'overflow';
    document.body.appendChild(overflow);
    let height = modal.offsetHeight;
    // modal.style.marginTop = -height / 2 + 'px';
    // modal.style.top = '50%'
}