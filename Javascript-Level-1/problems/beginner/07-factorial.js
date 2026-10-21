/**
 * Problem 7: Factorial of N
 * 
 * Logic:
 * Factorial of 5 (5!) = 5 * 4 * 3 * 2 * 1 = 120.
 * Factorial of 0 is 1.
 */

function factorial(n) {
  if (n < 0) return undefined; // Negative numbers don't have standard factorials
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test Cases
console.log("factorial(5) ->", factorial(5)); // 120
console.log("factorial(0) ->", factorial(0)); // 1
console.log("factorial(1) ->", factorial(1)); // 1
console.log("factorial(6) ->", factorial(6)); // 720
