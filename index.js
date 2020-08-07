import AuthValidator from "./AuthValidator.js"

let DOM = {
    emailTooltip: document.getElementById("tooltip-email-id"),
    passwordTooltip: document.getElementById("tooltip-pw-id"),
    email: document.getElementById("email-id"),
    password: document.getElementById("pw-id"),
    spinner: document.getElementById("spinner-id"),
    emailTooltipText: document.getElementById("tooltip-text-email-id"),
    passwordTooltipText: document.getElementById("tooltip-text-pw-id")
}

function onSubmit() {
    let validator = new AuthValidator();

    DOM.spinner.classList.add("spinner");

    setTimeout(() => {
        try {
            DOM.spinner.classList.remove("spinner");
            validator.validateEmail(DOM.email.value);
            validator.validatePassword(DOM.password.value);
            alert("You are logged in.")
        } catch(error) {
            if (error.cause == 'email') {
                DOM.emailTooltip.style.display = "block";
                DOM.emailTooltipText.innerHTML = error.message;
            } else if (error.cause == 'password') {
                DOM.passwordTooltip.style.display = "block";
                DOM.passwordTooltipText.innerHTML = error.message;
            }
        }
    }, 2000);
}

function removeEmailError() {
    DOM.emailTooltip.style.display = "none";
}

function removePwError() {
    DOM.passwordTooltip.style.display = "none";
}
 
document.getElementById("btn-login-id").addEventListener('click', onSubmit);
DOM.email.addEventListener("input", removeEmailError);
DOM.password.addEventListener("input", removePwError);