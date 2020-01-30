const INPUTDATE = document.querySelector('.inputDate');
const DIVDATE = document.querySelector('.divDate');
INPUTDATE.addEventListener('focusout', birthdayInput);

function birthdayInput() {
    let dateNow = new Date();
    let dateBirth = new Date(Date.parse(INPUTDATE.value));
    let birthDayThisYear = new Date(dateNow.getFullYear(), dateBirth.getMonth(), dateBirth.getDate())
    let daysToBirthday = Math.ceil((birthDayThisYear - dateNow) / (1000 * 60 * 60 * 24));
    if (daysToBirthday >= 0) {
        DIVDATE.innerText = `Next birthday in ${daysToBirthday} days`;
    } else {
        let birthDayLastYear = new Date(dateNow.getFullYear() + 1, dateBirth.getMonth(), dateBirth.getDate())
        daysToBirthday = Math.ceil((birthDayLastYear - dateNow) / (1000 * 60 * 60 * 24));
        DIVDATE.innerText = `Next birthday in ${daysToBirthday} days`;
    }
}