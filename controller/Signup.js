import LoadingSpinner from "../view/LoadingSpinner.js";
import request from "../model/Request.js";
import Result from "../view/Result.js";
import signupValidator from "./SignupValidator.js";

function signup() {
  let result = new Result();
  let spinner = new LoadingSpinner();
  let data = signupValidator();

  if (data) {
    spinner.showSpinner();
    request("https://dentministrator.herokuapp.com/auth/signup", data)
      .then(() => {
        result.signedUp();
      })
      .catch(() => {
        result.notSignedUp();
      });
  }
}

export default signup;
