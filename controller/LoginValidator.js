import AuthValidator from "../AuthValidator.js";
import DOM from "../view/DOMStrings.js";
import loginErrorHandler from "./LoginErrorHandler.js";

function loginValidator() {
  let validator = new AuthValidator();

  let data = {};

  try {
    data.email = validator.softValidateEmail(DOM.email.value);
    data.password = validator.softValidatePassword(DOM.password.value);
    return data;
  } catch (error) {
    loginErrorHandler(error);
    return false;
  }
}

export default loginValidator;
