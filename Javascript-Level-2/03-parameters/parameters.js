/**
 * 🧱 Module 3: Parameters, Arguments and Default Parameters
 * 
 * Default parameters activate on missing or `undefined` arguments, NEVER on `null`.
 * Destructured options parameters provide clean backend patterns.
 */

console.log("--- 1. Default Parameters & null Gotcha ---");
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log("greet()          ->", greet());           // Hello, Guest
console.log("greet('Arun')    ->", greet("Arun"));     // Hello, Arun
console.log("greet(undefined) ->", greet(undefined));  // Hello, Guest
console.log("greet(null)      ->", greet(null));       // Hello, null (null is explicit value!)

console.log("\n--- 2. Default Values referencing Earlier Parameters ---");
function calculateBox(width, height = width) {
  return width * height;
}
console.log("Square (width=5):            ", calculateBox(5));    // 25
console.log("Rectangle (width=5, height=8):", calculateBox(5, 8)); // 40

console.log("\n--- 3. Rest Parameters (Collect remaining args) ---");
function calculateSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("calculateSum(10, 20, 30) ->", calculateSum(10, 20, 30));

console.log("\n--- 4. Destructured Parameters (Options Pattern) ---");
function connectDatabase({ host = "localhost", port = 5432, ssl = false } = {}) {
  return `${ssl ? "https" : "http"}://${host}:${port}`;
}

console.log("Default DB Connection: ", connectDatabase());
console.log("Custom DB Connection:  ", connectDatabase({ port: 27017, ssl: true }));
