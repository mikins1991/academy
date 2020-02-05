let login = document.querySelector('.login');
let pass = document.querySelector('.pass');
let btn = document.querySelector('.btn');

login.addEventListener('focusout', function () {
    const regLogin = /[-.\w]@([\w-]+[.])+[a-zA-Z]+/g;
    if (!regLogin.test(login.value)) {
        login.style.backgroundColor = 'red';
        console.log('red');
    } else {
        login.style.backgroundColor = 'green';
    }
})

pass.addEventListener('focusout', function () {
    const regPass = /^[A-Z](?=.*\d)(?=.*[a-z])[\w-]{7,}$/;
    if (!regPass.test(pass.value)) {
        pass.style.backgroundColor = 'red';
        console.log(regPass.test(pass.value));
    } else {
        pass.style.backgroundColor = 'green';
        console.log(regPass.test(pass.value));
    }
})


