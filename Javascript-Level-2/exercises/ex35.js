/**
 * Exercise 35: arguments vs Rest Parameters
 * Prompt: Write sumAll() using arguments, then rewrite it with rest.
 */

// Legacy approach using arguments object
function sumAllLegacy() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Modern ES6+ approach using rest parameters
const sumAllModern = (...nums) => nums.reduce((sum, n) => sum + n, 0);

console.log("Legacy arguments sumAll: ", sumAllLegacy(10, 20, 30, 40)); // 100
console.log("Modern rest sumAll:      ", sumAllModern(10, 20, 30, 40)); // 100
