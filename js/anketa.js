let surname = prompt('Фамилия?');
while (!isNaN(surname)) {
    surname = prompt('Фамилия?');
}

let name = prompt('имя?');
while (!isNaN(name)) {
    name = prompt('имя?');
}

let lastname = prompt('отчество?');
while (!isNaN(lastname)) {
    lastname = prompt('отчество?');
}

let age = prompt('возраст?');
while (!parseInt(age)) {
    age = prompt('возраст?');
}

let sex = confirm('пол мужской?');
sex = (sex) ? 'мужчина' : 'женщина';

let pension = (sex === 'мужчина' && age <= 63 || sex === 'женщина' && age <= 58) ? 'нет' : 'да';

alert(`Ваше ФИО: ${surname} ${name} ${lastname}\nВаш возраст в годах: ${age}\nВаш возраст в днях: ${age * 365}\nЧерез 5 лет Вам будет: ${+age + 5}\nВаш пол: ${sex}\nВы на пенсии: ${pension}`);


