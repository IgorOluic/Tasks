import DOM from "./DOMStrings.js";

class InputView {
  constructor() {}

  deleteEmail() {
    DOM.email.value = "";
  }

  deletePassword() {
    DOM.password.value = "";
  }

  deleteConfirmPassword() {
    DOM.confirmPw.value = "";
  }
}

export default InputView;
