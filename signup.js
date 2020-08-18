import AuthValidator from "./AuthValidator.js";

let DOM = {
  paragraphSignup: document.getElementById("p-signup-id"),
  email: document.getElementById("email-id"),
  password: document.getElementById("pw-id"),
  confirmPw: document.getElementById("cpw-id"),
  emailTooltip: document.getElementById("s-tooltip-email-id"),
  pwTooltip: document.getElementById("s-tooltip-pw-id"),
  confirmPwTooltip: document.getElementById("tooltip-cpw-id"),
  emailTooltipText: document.getElementById("s-tooltip-text-email-id"),
  pwTooltipText: document.getElementById("s-tooltip-text-pw-id"),
  confirmPwTooltipText: document.getElementById("tooltip-text-cpw-id"),
  spinner: document.getElementById("spinner-id"),
};

function onSubmit() {
  let validator = new AuthValidator();
  let email = DOM.email.value;
  let password = DOM.password.value;
  let confirmPassword = DOM.confirmPw.value;

  DOM.spinner.classList.add("spinner-signup");

  try {
    validator.validateEmail(email);
    validator.validatePassword(password);
    validator.validateConfirmPassword(password, confirmPassword);

    signUp()
      .then(() => {
        email = "";
        password = "";
        confirmPassword = "";
        DOM.paragraphSignup.style.display = "block";
      })
      .catch((error) => {
        DOM.emailTooltip.style.display = "block";
        DOM.emailTooltipText.innerHTML = error.message;
      });
  } catch (error) {
    DOM.spinner.classList.remove("spinner-signup");
    if (error.cause == "email") {
      DOM.emailTooltip.style.display = "block";
      DOM.emailTooltipText.innerHTML = error.message;
    } else if (error.cause == "password") {
      DOM.pwTooltip.style.display = "block";
      DOM.pwTooltipText.innerHTML = error.message;
    } else if (error.cause == "confirmPassword") {
      DOM.confirmPwTooltip.style.display = "block";
      DOM.confirmPwTooltipText.innerHTML = error.message;
    }
  }
}

function removeEmailError() {
  DOM.emailTooltip.style.display = "none";
}

function removePwError() {
  DOM.pwTooltip.style.display = "none";
}

function removeConfirmPwError() {
  DOM.confirmPwTooltip.style.display = "none";
}

document.getElementById("btn-login-id").addEventListener("click", onSubmit);
DOM.email.addEventListener("input", removeEmailError);
DOM.password.addEventListener("input", removePwError);
DOM.confirmPw.addEventListener("input", removeConfirmPwError);

async function signUp() {
  let responseData;

  let data = {
    email: DOM.email.value,
    password: DOM.password.value,
  };

  let response = await fetch(
    "https://dentministrator.herokuapp.com/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) {
    DOM.spinner.classList.remove("spinner-signup");
    responseData = await response.json();
    return responseData;
  } else {
    DOM.spinner.classList.remove("spinner-signup");
    throw new Error("Account already exists.");
  }
}
