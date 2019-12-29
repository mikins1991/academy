function treeSum(arr) {
    let getArr = arr.flat(Infinity);
    let sum = 0;
    for (let i = 0; i < getArr.length; i++) {
        sum += getArr[i];
    }
    return sum;
}
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));