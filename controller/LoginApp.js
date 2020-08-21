import login from "./Login.js";
import TooltipErrors from "../view/TooltipErrors.js";
import DOM from "../view/DOMStrings.js";

let tooltips = new TooltipErrors();

DOM.loginBtn.addEventListener("click", login);
DOM.email.addEventListener("input", tooltips.hideEmailTooltip);
DOM.password.addEventListener("input", tooltips.hidePwTooltip);
