let pricePhone = 250;
let priceAcces = 21.354;
const taxNds = 20;

let myBasket = 0;
let n = 0;
let pricePhoneNds = pricePhone + pricePhone * taxNds / 100;
let priceAccesNds = priceAcces + priceAcces * taxNds / 100;

let resPhone = document.getElementById('js-resPhone');
let newBank = document.getElementById('js-btn');

newBank.onclick = function () {
    getBank();
}

let getBank = function () {
    let bank = document.getElementById('js-bank').value;
    let limit = document.getElementById('js-limit').value;
    if (myBasket + pricePhoneNds + priceAccesNds < limit) {
        while (myBasket + pricePhoneNds + priceAccesNds < bank) {
            myBasket = myBasket + pricePhoneNds + priceAccesNds;
            n += 1;
        }
        resPhone.innerHTML = `Общая стоимость ${n} телефонов и ${n} аксессуров, с учетом НДС: $${myBasket.toFixed(2)}. \n Остаток на счете: $${(bank - myBasket).toFixed(2)}`;
    } else {
        while (myBasket + pricePhoneNds < bank) {
            myBasket = myBasket + pricePhoneNds;
            n += 1;
        }
        resPhone.innerHTML = (`Общая стоимость ${n} телефонов, 
        с учетом НДС: $${myBasket.toFixed(2)}. \n Остаток на счете: $${(bank - myBasket).toFixed(2)} \n Для покупки, аксессуаров превышен установленный лимит.`);
    }
}