/**
 * Exercise 2: Destructured Parameters and Defaults
 * Prompt: Write createUser({ name, role = "user", active = true } = {}) using destructuring and defaults.
 */

function createUser({ name = "Anonymous", role = "user", active = true } = {}) {
  return { name, role, active, createdAt: new Date().getFullYear() };
}

console.log("Empty call:      ", createUser());
console.log("With name only:  ", createUser({ name: "Arun" }));
console.log("Custom role/flag:", createUser({ name: "Divya", role: "admin", active: false }));
