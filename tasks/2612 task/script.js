function lottery(str) {
    let result = '';
    for (let i = 0; i <= str.length; i++) {
        if (!isNaN(str[i])) {
            result += str[i];
        }
    }
    if (result == '') {
        result = 'One more run';
    }
    return result;
}
console.log(lottery('hPrBKWDH8yc6Lt5NQZWQ'));
console.log(lottery('de2244sdsgfd'));
console.log(lottery('eweggffsdsdd'));

function lottery(str) {
    let result = '';
    let resNew = '';
    for (let i = 0; i <= str.length; i++) {
        if (!isNaN(str[i])) {
            result += str[i];
        }
        for (var z = 1, j = 0, t; z < result.length + 1; z++) {
            if (result[z - 1] === result[z]) t = result[z - 1];
            if (result[z - 1] !== t) resNew[j++] = result[z - 1];
        }
    }

    if (resNew == '') {
        resNew = 'One more run';
    }
    return resNew;
}