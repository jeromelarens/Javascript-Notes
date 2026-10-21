/**
 * 📎 Module 19: The 'arguments' Object
 * 
 * An array-like object available in standard functions (not arrow functions).
 * In modern JavaScript, rest parameters (...args) are strongly preferred.
 */

console.log("--- 1. arguments in Standard Functions ---");
function inspectArguments() {
  console.log("arguments.length:         ", arguments.length);
  console.log("Array.isArray(arguments)? ", Array.isArray(arguments)); // false
  console.log("Access by index [0]:      ", arguments[0]);
}
inspectArguments("A", "B", "C");

console.log("\n--- 2. Converting arguments to Real Array ---");
function sumAll() {
  const realArray = Array.from(arguments);
  return realArray.reduce((acc, curr) => acc + curr, 0);
}
console.log("sumAll(1, 2, 3, 4) =", sumAll(1, 2, 3, 4));

console.log("\n--- 3. Modern Equivalent: Rest Parameters ---");
const modernSumAll = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log("modernSumAll(1, 2, 3, 4) =", modernSumAll(1, 2, 3, 4));
console.log("Rest parameters give a REAL array and work in arrow functions!");
