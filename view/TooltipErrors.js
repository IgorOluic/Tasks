import DOM from "./DOMStrings.js";

class TooltipErrors {
  constructor() {}

  showEmailTooltip(error) {
    DOM.emailTooltipText.innerHTML = error.message;
    DOM.emailTooltip.style.display = "block";
  }

  hideEmailTooltip() {
    DOM.emailTooltip.style.display = "none";
  }

  showPwTooltip(error) {
    DOM.pwTooltipText.innerHTML = error.message;
    DOM.pwTooltip.style.display = "block";
  }

  hidePwTooltip() {
    DOM.pwTooltip.style.display = "none";
  }

  showConfirmPwTooltip(error) {
    DOM.confirmPwTooltipText.innerHTML = error.message;
    DOM.confirmPwTooltip.style.display = "block";
  }

  hideConfirmPwTooltip() {
    DOM.confirmPwTooltip.style.display = "none";
  }
}

export default TooltipErrors;
