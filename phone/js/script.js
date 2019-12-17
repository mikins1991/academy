let pricePhone = 250.254;
let priceAcces = 21.354;
const tax = 20;

let myBasket = 0;
let n = 0;
let pricePhoneNds = pricePhone + pricePhone * tax / 100;
let priceAccesNds = priceAcces + priceAcces * tax / 100;

let resPhone = document.getElementById('js-resPhone');
let newBank = document.getElementById('js-btn');

newBank.onclick = function () {
    getBank();
}

function getBank() {
    let bank = document.getElementById('js-bank').value;
    let limit = document.getElementById('js-limit').value;
    if (bank < pricePhoneNds) {
        resPhone.innerHTML = `Покупка не возможна. Недостаточно средств`;
    } else if (pricePhoneNds + priceAccesNds < limit) {
        getResultPhoneAcces(bank);
    } else {
        getResultPhone(bank);
    }
}

function getResultPhoneAcces(bank) {
    while (myBasket + pricePhoneNds + priceAccesNds < bank) {
        myBasket = myBasket + pricePhoneNds + priceAccesNds;
        n += 1;
    }
    resPhone.innerHTML = `Общая стоимость ${n} телефонов и ${n} аксессуров, с учетом НДС: $${myBasket.toFixed(2)}.
    <br>Остаток на счете: $${(bank - myBasket).toFixed(2)}`;
}

function getResultPhone(bank) {
    while (myBasket + pricePhoneNds < bank) {
        myBasket = myBasket + pricePhoneNds;
        n += 1;
    }
    resPhone.innerHTML = `Общая стоимость ${n} телефонов, с учетом НДС: $${myBasket.toFixed(2)}. 
    <br>Остаток на счете: $${(bank - myBasket).toFixed(2)}.
    <br>Для покупки, аксессуаров превышен установленный лимит.`;
}