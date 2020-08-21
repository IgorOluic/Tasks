import AuthValidator from "../AuthValidator.js";
import DOM from "../view/DOMStrings.js";
import signupErrorHandler from "./SignupErrorHandler.js";

function signupValidator() {
  let validator = new AuthValidator();

  let data = {};

  try {
    data.email = validator.validateEmail(DOM.email.value);
    data.password = validator.validatePassword(DOM.password.value);
    validator.validateConfirmPassword(DOM.password.value, DOM.confirmPw.value);
    return data;
  } catch (error) {
    signupErrorHandler(error);
    return false;
  }
}

export default signupValidator;
