const INPUTDATE = document.querySelector('.inputDate');

INPUTDATE.addEventListener('focusout', birthdayInput);

function birthdayInput() {
    const ONEDAY = 1000 * 60 * 60 * 24;
    const DIVDATE = document.querySelector('.divDate');

    let dateNow = new Date();
    let dateBirth = new Date(Date.parse(INPUTDATE.value));
    let birthDayThisYear = new Date(dateNow.getFullYear(), dateBirth.getMonth(), dateBirth.getDate())
    let daysToBirthday = Math.ceil((birthDayThisYear - dateNow) / ONEDAY);

    if (daysToBirthday >= 0) {
        DIVDATE.innerText = `Next birthday in ${daysToBirthday} days`;
    } else {
        let birthDayLastYear = new Date(dateNow.getFullYear() + 1, dateBirth.getMonth(), dateBirth.getDate())
        daysToBirthday = Math.ceil((birthDayLastYear - dateNow) / ONEDAY);
        DIVDATE.innerText = `Next birthday in ${daysToBirthday} days`;
    }
}