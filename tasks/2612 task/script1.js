function accum(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            let letter = str[i];
            if (j == 0) {
                letter = letter.toUpperCase();
            } else {
                letter = letter.toLowerCase();
            }
            result += letter;
        }
        if (i != str.length - 1) {
            result = result + '-';
        }
    }
    return result;
}
console.log(accum("abcd"));

