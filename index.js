import AuthValidator from "./AuthValidator.js"


function onSubmit() {

    let validator = new AuthValidator();
    let email = document.getElementById("email-id").value;
    let password = document.getElementById('pw-id').value;

    if (email == validator.validateEmail(email)) {
        if (password == validator.validatePassword(password)) {
            alert("Successfuly logged in.")
        }
    }
}

document.getElementById("btn-login").addEventListener('click', onSubmit);