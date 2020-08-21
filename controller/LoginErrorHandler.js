import TooltipErrors from "../view/TooltipErrors.js";

function loginErrorHandler(error) {
  let tooltips = new TooltipErrors();

  if (error.cause == "email") {
    tooltips.showEmailTooltip(error);
  } else if (error.cause == "password") {
    tooltips.showPwTooltip(error);
  }
}

export default loginErrorHandler;
