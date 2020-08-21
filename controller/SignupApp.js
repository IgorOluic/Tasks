import TooltipErrors from "../view/TooltipErrors.js";
import DOM from "../view/DOMStrings.js";
import signup from "./Signup.js";

let tooltips = new TooltipErrors();

DOM.signupBtn.addEventListener("click", signup);
DOM.email.addEventListener("input", tooltips.hideEmailTooltip);
DOM.password.addEventListener("input", tooltips.hidePwTooltip);
DOM.confirmPw.addEventListener("input", tooltips.hideConfirmPwTooltip);
