let viewportWidth;
const bgImage = document.getElementById('body');
const form = document.getElementById('form');
const btnTry = document.querySelector('.btn-try');
const btnClaim = document.querySelector('.btn-claim');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAdd = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

const checkInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailAddValue = emailAdd.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorfor(firstName, 'First name cannot be blank');
    } else {
        setSucess(firstName);
    }

    if (lastNameValue === '') {
        setErrorfor(lastName, 'First name cannot be blank');
    } else {
        setSucess(lastName);
    }
    if (emailAddValue === '') {
        setErrorfor(emailAdd, 'First name cannot be blank');
    } else {
        setSucess(emailAdd);
    }
    if (passwordValue === '') {
        setErrorfor(password, 'First name cannot be blank');
    } else {
        setSucess(password);
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function setSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}