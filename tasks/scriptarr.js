// function camelize(str) {
//     return str.split('-')
//         .map(function (value, index) {
//             if (index === 0) {
//                 return value;
//             }
//             else {
//                 return value[0].toUpperCase() + value.slice(1);
//             }
//         })
//         .join('');
// }
// console.log(camelize("background-color"))


// let arr = [5, 3, 8, 1];
// function filtredRange(arr, a, b) {
//     return arr.filter(item => (item >= a && item <= b));
// };
// console.log(filtredRange(arr, 1, 4));


// let arr = [5, 3, 8, 1];
// function filtredRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (a > arr[i] || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     return arr;
// };
// console.log(filtredRangeInPlace(arr, 1, 4));


// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);//по убыванию
// alert(arr);


// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);
alert(names); // Вася, Петя, Маша