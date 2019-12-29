function treeSum(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum = sum + treeSum(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(treeSum([5, 7, [4, [2, 5], 8, [1, 3], 2], [9, []], 1, 8]));