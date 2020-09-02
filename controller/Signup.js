import LoadingSpinner from "../view/LoadingSpinner.js";
import signupRequest from "../model/SignupRequest.js";
import Result from "../view/Result.js";
import signupValidator from "./SignupValidator.js";

function signup() {
  let result = new Result();
  let spinner = new LoadingSpinner();
  let data = signupValidator();

  if (data) {
    spinner.showSpinner();
    signupRequest("https://dentministrator.herokuapp.com/auth/signup", data);
  }
}

export default signup;
