let form = document.getElementById('form');
let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getFieldName() {
    return input.id.charAt(0).toUppercase() + input.slice(1);
}

function checkLength(input, min, max) {
    if (input, value.length < min) {
        showError(input, `${getFieldName} must be at least ${min} characters`);
    } else if (input, value.length > max) {
        showError(input, `${getFieldName} must be less than ${max} characters`);
    } else {
        showSucess(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords doesnt match.');

    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});