import DOM from "./DOMStrings.js";
import InputView from "./InputView.js";
import TooltipErrors from "./TooltipErrors.js";
import LoadingSpinner from "./LoadingSpinner.js";

class Result {
  constructor() {
    this.inputView = new InputView();
    this.tooltips = new TooltipErrors();
    this.spinner = new LoadingSpinner();
  }

  loggedIn() {
    DOM.paragraph.style.display = "block";
    DOM.paragraph.innerHTML = "You are logged in.";
    this.inputView.deleteEmail();
    this.inputView.deletePassword();
    this.spinner.hideSpinner();
  }

  signedUp() {
    DOM.paragraph.style.display = "block";
    DOM.paragraph.innerHTML = "Account created.";
    this.inputView.deleteEmail();
    this.inputView.deletePassword();
    this.inputView.deleteConfirmPassword();
    this.spinner.hideSpinner();
  }

  notLoggedIn(error) {
    this.tooltips.showEmailTooltip(error);
    this.inputView.deletePassword();
    this.spinner.hideSpinner();
  }

  notSignedUp() {
    this.tooltips.showEmailTooltip({ message: "Email already in use." });
    this.inputView.deletePassword();
    this.inputView.deleteConfirmPassword();
    this.spinner.hideSpinner();
  }
}

export default Result;
