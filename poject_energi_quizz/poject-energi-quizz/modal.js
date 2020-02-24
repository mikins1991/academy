const modal = document.getElementsByClassName('modal');
const overflow = document.createElement('div');
function getModal() {
    overflow.className = 'overflow';
    document.body.appendChold(overflow);
    let height = modal.offsetHeight;
    modal.style.marginTop = -height / 2 + 'px';
    modal.style.top = '50%'
}