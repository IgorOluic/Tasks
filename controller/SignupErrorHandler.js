import TooltipErrors from "../view/TooltipErrors.js";

function signupErrorHandler(error) {
  let tooltips = new TooltipErrors();

  if (error.cause == "email") {
    tooltips.showEmailTooltip(error);
  } else if (error.cause == "password") {
    tooltips.showPwTooltip(error);
  } else if (error.cause == "confirmPassword") {
    tooltips.showConfirmPwTooltip(error);
  }
}

export default signupErrorHandler;
