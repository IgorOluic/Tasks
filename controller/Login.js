import LoadingSpinner from "../view/LoadingSpinner.js";
import loginValidator from "./LoginValidator.js";
import request from "../model/Request.js";
import Result from "../view/Result.js";

function login() {
  let result = new Result();
  let spinner = new LoadingSpinner();
  let data = loginValidator();

  if (data) {
    spinner.showSpinner();
    request("https://dentministrator.herokuapp.com/auth/signin", data)
      .then(() => {
        result.loggedIn();
      })
      .catch((error) => {
        result.notLoggedIn(error);
      });
  }
}

export default login;
