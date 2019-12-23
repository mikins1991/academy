// Object 
// task1
let user = {
    name: 'John',
    surname: 'Smith'
}
user.name = 'Pete';
delete user.name;
console.log(user.name);

//task2
let schedule = {};
schedule["8:30"] = "get up";
function isEmpty(schedule) {
    for (let key in schedule) {
        return false;
    }
    return true;
}
console.log(isEmpty(schedule));

//task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
function sumAll(salaries) {
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
console.log(sumAll(salaries));

//task 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);