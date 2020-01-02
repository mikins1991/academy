function sumArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === 8) {
                return true;
            } else if (sum != 8 && i === arr.length - 1) {
                return false;
            }
        }
    }
}
console.log(sumArr([4, 1, 2, 4]));
console.log(sumArr([1, 2, 4, 4]));
console.log(sumArr([1, 2, 3, 4]));
console.log(sumArr([6, 1, 2, 4]));
console.log(sumArr([6, 5, 1, 3]));
console.log(sumArr([6, 1, 3, 4]));
