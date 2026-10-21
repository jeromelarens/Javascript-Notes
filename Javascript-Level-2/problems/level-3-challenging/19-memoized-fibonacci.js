/**
 * Problem 19: Fibonacci with Memoization
 */

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

console.log("fib(10) =", fib(10)); // 55
console.log("fib(50) =", fib(50)); // 12586269025
