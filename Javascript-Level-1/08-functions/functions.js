/**
 * 🔧 Module 8: Functions
 * 
 * Declarations vs Expressions, Parameters vs Arguments, Defaults,
 * Rest parameters, First-class citizens, Callbacks, IIFE, Pure vs Impure, Recursion.
 */

console.log("--- 1. Function Declaration ---");
// Fully hoisted: can be called before definition
console.log(greetUser("Arun"));

function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log("\n--- 2. Function Expression ---");
// Not hoisted as a function
const addNumbers = function(a, b) {
  return a + b;
};
console.log("5 + 7 =", addNumbers(5, 7));

console.log("\n--- 3. Default and Rest Parameters ---");
function sendEmail(to, subject = "No Subject Provided") {
  return `Email sent to ${to} with subject: "${subject}"`;
}
console.log(sendEmail("user@example.com"));

function calculateTotalSum(...nums) {
  let sum = 0;
  for (const n of nums) sum += n;
  return sum;
}
console.log("calculateTotalSum(10, 20, 30, 40) =", calculateTotalSum(10, 20, 30, 40));

console.log("\n--- 4. First-Class Citizens: Callbacks ---");
function processData(items, callback) {
  for (const item of items) {
    callback(item);
  }
}
processData(["Alpha", "Beta", "Gamma"], function(item) {
  console.log("Processed:", item.toLowerCase());
});

console.log("\n--- 5. Higher-Order Function (Returns a Function) ---");
function makeMultiplier(multiplier) {
  return function(val) {
    return val * multiplier;
  };
}
const triple = makeMultiplier(3);
console.log("Triple of 9 =", triple(9));

console.log("\n--- 6. IIFE (Immediately Invoked Function Expression) ---");
(function() {
  const privateToken = "secret_12345";
  console.log("IIFE executed immediately with private scope!");
})();

console.log("\n--- 7. Pure vs Impure Functions ---");
// Pure: No side effects, predictable output
function addPure(x, y) {
  return x + y;
}
console.log("addPure(4, 5) =", addPure(4, 5));

// Impure: mutates outside state
let counter = 0;
function incrementCounter() {
  counter++;
  return counter;
}
console.log("incrementCounter() =", incrementCounter());

console.log("\n--- 8. Recursion (Factorial) ---");
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}
console.log("Factorial of 5 =", factorial(5));
