function lottery(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            result += str[i];
        }
    }
    result = result.split('')
        .filter(function (element, pos, arr) {
            return arr.indexOf(element) == pos;
        })
        .join('');

    if (result == '') {
        result = 'One more run!';
    }
    return result;
}
console.log(lottery('H8Q87'));
console.log(lottery('hPrBKWDH8yc6Lt5NQZWQ'));
console.log(lottery('de2244sdsgfd'));
console.log(lottery('eweggffsdsdd'));
