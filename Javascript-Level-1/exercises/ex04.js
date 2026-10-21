/**
 * Exercise 4: Floating Point Precision & Safe Comparison
 * Prompt: Show why 0.1 + 0.2 !== 0.3 and write a safe comparison.
 */

const sum = 0.1 + 0.2;
console.log("0.1 + 0.2 evaluates to:", sum);
console.log("0.1 + 0.2 === 0.3 is:    ", sum === 0.3);

// Safe comparison function using Number.EPSILON
function areFloatsEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}

console.log("Safe comparison result:  ", areFloatsEqual(sum, 0.3));
