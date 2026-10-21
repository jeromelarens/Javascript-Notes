/**
 * ⚡ Module 11: IIFE (Immediately Invoked Function Expression)
 * 
 * An IIFE executes immediately upon definition.
 * Used for creating private scopes, module patterns, and one-time initializers.
 */

console.log("--- 1. Basic IIFE & Scope Isolation ---");
(function() {
  const secretToken = "AUTH_KEY_987654";
  console.log("IIFE executed! Secret token initialized privately.");
})();

try {
  // @ts-ignore
  console.log(secretToken);
} catch (err) {
  console.log("Accessing private IIFE variable caught:", err.message);
}

console.log("\n--- 2. IIFE Module Pattern ---");
const sessionManager = (function() {
  let activeUsers = 0; // private state

  return {
    login() {
      activeUsers++;
      return `User logged in. Active count: ${activeUsers}`;
    },
    logout() {
      if (activeUsers > 0) activeUsers--;
      return `User logged out. Active count: ${activeUsers}`;
    },
    getCount() {
      return activeUsers;
    }
  };
})();

console.log(sessionManager.login());
console.log(sessionManager.login());
console.log(sessionManager.logout());
console.log("sessionManager.activeUsers is:", sessionManager.activeUsers); // undefined
