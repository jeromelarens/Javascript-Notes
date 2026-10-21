/**
 * 🧠 Module 17: Memoization
 * 
 * Memoization caches return values of functions based on their input arguments.
 * Safe only for pure functions!
 */

console.log("--- 1. Generic memoize Implementation ---");
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

let calculationCount = 0;
const expensiveComputation = (x, y) => {
  calculationCount++;
  return x ** y;
};

const fastCompute = memoize(expensiveComputation);

console.log("Call 1:", fastCompute(2, 10)); // Computes: 1024
console.log("Call 2:", fastCompute(2, 10)); // Returns from cache: 1024
console.log("Calculation runs count:", calculationCount); // Only 1!

console.log("\n--- 2. Memoizing Recursive Fibonacci ---");
const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
console.log("fib(10) =", fib(10));
console.log("fib(40) =", fib(40)); // Instantaneous due to memoization!
