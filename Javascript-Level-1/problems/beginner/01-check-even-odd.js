/**
 * Problem 1: Check Even or Odd
 * 
 * Logic: A number divisible by 2 with remainder 0 is even.
 */

function checkEvenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

// Test Cases
console.log("10 is:", checkEvenOdd(10)); // Even
console.log("7 is: ", checkEvenOdd(7));  // Odd
console.log("0 is: ", checkEvenOdd(0));  // Even
console.log("-3 is:", checkEvenOdd(-3)); // Odd
