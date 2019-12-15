const pricePhone = 250.2555;
const priceAcces = 25.4646;
const taxNds = 20;
const limit = 400;
let bank = 1000;

let myBasket = 0;
let n = 0;
let m = 0;
let pricePhoneNds = pricePhone + pricePhone * taxNds / 100;
let priceAccesNds = priceAcces + priceAcces * taxNds / 100;
console.log(`Стоимость одного телефона с НДС: ${pricePhoneNds}`);
console.log(`Стоимость одного телефона с НДС: ${priceAccesNds}`);

// let newBank = document.getElementById('js-btn');
// newBank.onclick = function () {
//     bank = document.getElementById('js-bank').value;
//     //console.log(bank);
// }
// console.log(bank);

if (myBasket + pricePhoneNds + priceAccesNds < limit) {
    while (myBasket + pricePhoneNds + priceAccesNds < bank) {
        myBasket = myBasket + pricePhoneNds + priceAccesNds;
        n += 1;
    }
    alert(`Общая стоимость ${n} телефонов и ${n} аксессуров, с учетом НДС: $${myBasket.toFixed(2)}`);
} else {
    while (myBasket + pricePhoneNds < bank) {
        myBasket = myBasket + pricePhoneNds;
        n += 1;
    }
    alert(`Общая стоимость ${n} телефонов, с учетом НДС: $${myBasket.toFixed(2)}`);
}

