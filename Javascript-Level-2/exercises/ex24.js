/**
 * Exercise 24: Fibonacci Performance Benchmark - Naive vs Memoized
 * Prompt: Write fibonacci(n) recursively, then add memoization and compare timings.
 */

// Naive O(2^n)
function naiveFib(n) {
  if (n <= 1) return n;
  return naiveFib(n - 1) + naiveFib(n - 2);
}

// Memoized O(n)
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args[0];
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const memoFib = memoize(function fib(n) {
  if (n <= 1) return n;
  return memoFib(n - 1) + memoFib(n - 2);
});

console.time("Naive fib(30)");
const r1 = naiveFib(30);
console.timeEnd("Naive fib(30)");
console.log("Result:", r1);

console.time("Memoized fib(30)");
const r2 = memoFib(30);
console.timeEnd("Memoized fib(30)");
console.log("Result:", r2);
