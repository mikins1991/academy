function camelize(str) {
    return str.split('-')
        .map(function (value, index) {
            if (index === 0) {
                return value;
            }
            else {
                return value[0].toUpperCase() + value.slice(1);
            }
        })
        .join('');
}
console.log(camelize("background-color"));