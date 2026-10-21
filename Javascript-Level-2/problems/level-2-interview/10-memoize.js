/**
 * Problem 10: Implement memoize
 */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

let operationsRun = 0;
const square = memoize(n => {
  operationsRun++;
  return n * n;
});

console.log("square(4):        ", square(4)); // 16
console.log("square(4):        ", square(4)); // 16 (from cache)
console.log("Total executions: ", operationsRun); // 1
