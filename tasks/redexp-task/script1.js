let login = document.querySelector('.login');
let pass = document.querySelector('.pass');
let btn = document.querySelector('.btn');

login.addEventListener('focusout', function () {
    const regLogin = /[-.\w]@([\w-]+[.])+[a-zA-Z]+/g;
    if (!regLogin.test(login.value)) {
        login.style.backgroundColor = 'red';
    } else {
        login.style.backgroundColor = 'green';
    }
})

pass.addEventListener('focusout', function () {
    const regPass = /^[A-Z](?=.*\d)(?=.*[a-z])[\w-]{7,}$/;
    if (!regPass.test(pass.value)) {
        pass.style.backgroundColor = 'red';
    } else {
        pass.style.backgroundColor = 'green';
    }
})


