import ValidationError from "./ValidationError.js";

let DOM = {
  paragraph: document.getElementById("p-id"),
  email: document.getElementById("email-id"),
  password: document.getElementById("pw-id"),
  emailTooltip: document.getElementById("tooltip-email-id"),
  pwTooltip: document.getElementById("tooltip-pw-id"),
  emailTooltipText: document.getElementById("tooltip-text-email-id"),
  pwTooltipText: document.getElementById("tooltip-text-pw-id"),
  spinner: document.getElementById("spinner-id"),
};

function onSubmit() {
  let email = DOM.email.value;
  let password = DOM.password.value;

  try {
    if (!email) {
      throw new ValidationError("This field should not be empty.", "email");
    } else if (!password) {
      throw new ValidationError("This field should not be empty.", "password");
    } else {
      DOM.spinner.classList.add("spinner");
      logIn()
        .then(() => {
          DOM.email.value = "";
          DOM.password.value = "";
          DOM.paragraph.style.display = "block";
        })
        .catch((error) => {
          DOM.emailTooltip.style.display = "block";
          DOM.emailTooltipText.innerHTML = error.message;
          DOM.password.value = "";
        });
    }
  } catch (error) {
    if (error.cause == "email") {
      DOM.emailTooltip.style.display = "block";
      DOM.emailTooltipText.innerHTML = error.message;
    } else if (error.cause == "password") {
      DOM.pwTooltip.style.display = "block";
      DOM.pwTooltipText.innerHTML = error.message;
    }
  }
}

function removeEmailError() {
  DOM.emailTooltip.style.display = "none";
}

function removePwError() {
  DOM.pwTooltip.style.display = "none";
}

async function logIn() {
  let responseData;

  let data = {
    email: DOM.email.value,
    password: DOM.password.value,
  };

  let response = await fetch(
    "https://dentministrator.herokuapp.com/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) {
    DOM.spinner.classList.remove("spinner");
    responseData = await response.json();
    return responseData;
  } else {
    DOM.spinner.classList.remove("spinner");
    throw new Error("The account doesn't exist.");
  }
}

document.getElementById("btn-login-id").addEventListener("click", onSubmit);
DOM.email.addEventListener("input", removeEmailError);
DOM.password.addEventListener("input", removePwError);
