import ValidationError from "../ValidationError.js";

async function request(url, data) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    let responseData = await response.json();
    return responseData;
  } else {
    throw new ValidationError("Account not found.");
  }
}

export default request;
