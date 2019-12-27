function zero(func) {
    if (func === undefined) {
        return 0;
    } else {
        return func(0);
    }
}
function one(func) {
    if (func === undefined) {
        return 1;
    } else {
        return func(1);
    }
}
function two(func) {
    if (func === undefined) {
        return 2;
    } else {
        return func(2);
    }
}
function three(func) {
    if (func === undefined) {
        return 3;
    } else {
        return func(3);
    }
}
function four(func) {
    if (func === undefined) {
        return 4;
    } else {
        return func(4);
    }
}
function five(func) {
    if (func === undefined) {
        return 5;
    } else {
        return func(5);
    }
}
function six(func) {
    if (func === undefined) {
        return 6;
    } else {
        return func(6);
    }
}
function seven(func) {
    if (func === undefined) {
        return 7;
    } else {
        return func(7);
    }
}
function eight(func) {
    if (func === undefined) {
        return 8;
    } else {
        return func(8);
    }
}
function nine(func) {
    if (func === undefined) {
        return 9;
    } else {
        return func(9);
    }
}

function plus(f) {
    return function (a) {
        return a + f;
    }
}
function minus(f) {
    return function (a) {
        return a - f;
    }
}
function times(f) {
    return function (a) {
        return a * f;
    }
}
function dividedBy(f) {
    return function (a) {
        return a / f;
    }
}
console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3