// Variables
const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const repeatPass = document.querySelector('#repeatPass');
const form = document.querySelector('.form');
const passError = document.querySelector('.alert');
const signIn = document.querySelector('.regSign a');
let mainArray = [];
let passArray = [];


// Register event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = userName.value
    if (userInput == "") return;
    for (let i = 0; i <= localStorage.length; i++) {
        console.log(i);
        if (userInput == localStorage.getItem("user" + `${i}`)) {
            passError.innerText = 'User name allready taken';

            return;
        };
    };
    //Inner variables
    let counter = localStorage.length;
    let pass = password.value;
    let repPass = repeatPass.value;
    const pwCh = /^(?=.*[a-z])/;
    const pwCh2 = /^(?=.*[A-Z])/;
    const pwCh3 = /^(?=.*[0-9])/;

    //If statements to check if the password is in a good condition
    if (pass.length < 6) {
        passError.innerText = 'Password length must be greater then 6';
        return false;
    }

    if (pwCh.test(pass) == false) {
        passError.innerText = 'Password must contain at last 1 lowercase character';
        return false;
    } else if (pwCh.test(pass) == true) {
        passError.innerText = 'Looks good!';

    }

    if (pwCh2.test(pass) == false) {
        passError.innerText = 'Password must contain at last 1 uppercase character';
        return false;
    } else if (pwCh2.test(pass) == true) {
        passError.innerText = 'Looks good!'
    }

    if (pwCh3.test(pass) == false) {
        passError.innerText = 'Password must contain at last 1 number';
        return false;
    } else if (pwCh3.test(pass) == true) {
        passError.innerText = 'Looks good!'
    }

    if (pass != repPass) {
        passError.innerText = 'Password and repeat password must be the same';
        return false;
    } else {
        passError.innerText = 'Looks good!'
    }

    //Input reset
    userName.value = "";
    password.value = "";
    repeatPass.value = "";

    //Local storage item adding
    localStorage.setItem("user" + `${counter}`, userInput);
    localStorage.setItem("password" + `${counter}`, pass);
});

//Sign in
signIn.addEventListener("click", (e) => {
    let userInput = userName.value
    e.preventDefault();
    //Checking for user 
    for (let i = 0; i < localStorage.length; i++) {
        if (userName.value == localStorage.getItem("user" + `${i}`)) {
            UserCount = i;
            localStorage.setItem('userPos', i);
            console.log(i);
        };
    };
    //Checking for password
    try {
        for (let p = 0; p < localStorage.length; p++) {
            if (password.value == localStorage.getItem("password" + `${p}`) && UserCount == p) {
                PassCount = p;
            };
        };
        //In case the username is not registerd
    } catch (err) {
        passError.innerText = 'Incorrect username or password';
    };
    //Password and user matching
    try {
        if (UserCount == PassCount) {
            window.location.replace('yourpage.html');
        } else {
            passError.innerText = 'Incorrect username or password';
            return;
        };
        //In case the password is not registerd
    } catch (err) {
        passError.innerText = 'Incorrect username or password';
    };
});

// localStorage.clear();