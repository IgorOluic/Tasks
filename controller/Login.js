import LoadingSpinner from "../view/LoadingSpinner.js";
import loginValidator from "./LoginValidator.js";
import loginRequest from "../model/LoginRequest.js";

function login() {
  let spinner = new LoadingSpinner();
  let data = loginValidator();

  if (data) {
    spinner.showSpinner();
    loginRequest("https://dentministrator.herokuapp.com/auth/signin", data);
  }
}

export default login;
