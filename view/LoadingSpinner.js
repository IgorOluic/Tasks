import DOM from "./DOMStrings.js";

class LoadingSpinner {
  constructor() {}

  showSpinner() {
    DOM.spinner.classList.add("spinner");
  }

  hideSpinner() {
    DOM.spinner.classList.remove("spinner");
  }
}

export default LoadingSpinner;
