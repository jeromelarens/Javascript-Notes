/**
 * Exercise 11: Login Credential Validator
 * Prompt: Check whether a user can log in: username non-empty and password.length >= 8.
 */

function validateLogin(username, password) {
  const isValidUsername = typeof username === "string" && username.trim().length > 0;
  const isValidPassword = typeof password === "string" && password.length >= 8;

  if (isValidUsername && isValidPassword) {
    return { success: true, message: "Login Successful" };
  } else if (!isValidUsername) {
    return { success: false, message: "Username cannot be empty" };
  } else {
    return { success: false, message: "Password must be at least 8 characters" };
  }
}

console.log(validateLogin("arun_k", "secret123")); // Success
console.log(validateLogin("", "secret123"));       // Username empty
console.log(validateLogin("arun_k", "short"));     // Password short
