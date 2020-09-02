import Result from "../view/Result.js";
import ValidationError from "../ValidationError.js";

async function signupRequest(url, data) {
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
      result.signedUp();
    } else {
      throw new ValidationError("Email already in use.");
    }
  } catch (error) {
    result.notSignedUp(error);
  }
}

export default signupRequest;
