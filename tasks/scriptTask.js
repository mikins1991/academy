// // task1
// let hash = '#';
// let i = 0;
// while (i < 7) {
//     console.log(hash);
//     hash += '#';
//     i++;
// }
// //task2
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i);
//     }
// }
// //task3
// for (let i = 0; i <= 7; i++) {
//     if (i % 2 == 0) {
//         console.log('# # # # ')
//     } else {
//         console.log(' # # # #')
//     }
// }
// //task4
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(55, 8));
// // task 5
// function isEven(c) {
//     if (c % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(0));

//task 6
function countBs(str) {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == 'b' || str[i] == 'B') {
            count += 1;
        }
    }
    return count;
}
console.log(countBs('bbBBjfjf'));

function countChar(str, sim) {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == sim) {
            count += 1;
        }
    }
    return count;
}
console.log(countChar('bbBBjfjf', 'b'));