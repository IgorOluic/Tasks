import Result from "../view/Result.js";
import ValidationError from "../ValidationError.js";

async function loginRequest(url, data) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = new Result();

  try {
    if (response.ok) {
      result.loggedIn();
    } else {
      throw new ValidationError("Account not found.");
    }
  } catch (error) {
    result.notLoggedIn(error);
  }
}

export default loginRequest;
