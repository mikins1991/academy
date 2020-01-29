let inputDate = document.querySelector('.inputDate');
let divBirth = document.querySelector('.divDate');
inputDate.addEventListener('focusout', birthdayInput);

function birthdayInput() {
    let date = new Date();
    let dateBirth = new Date(Date.parse(inputDate.value));
    let birth = dateBirth.getDate() - date.getDate();
    let b = birth.setDate();
    divBirth.innerText = dateBirth;
    console.log(birth.setDate());
    console.log(inputDate.value);
    console.log(dateBirth);
    console.log(date);
}