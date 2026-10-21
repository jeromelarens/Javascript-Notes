/**
 * Exercise 6: Callback Operation
 * Prompt: Write calculate(a, b, operation) that accepts a callback.
 */

function calculate(a, b, operation) {
  return operation(a, b);
}

const addition = (x, y) => x + y;
const modulus = (x, y) => x % y;
const power = (x, y) => x ** y;

console.log("calculate(10, 20, addition) ->", calculate(10, 20, addition)); // 30
console.log("calculate(10, 3, modulus)    ->", calculate(10, 3, modulus));   // 1
console.log("calculate(2, 5, power)       ->", calculate(2, 5, power));       // 32
