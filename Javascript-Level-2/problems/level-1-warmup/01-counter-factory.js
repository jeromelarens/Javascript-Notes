/**
 * Problem 1: Counter Factory (Closure)
 * Task: createCounter(start) returns an object with increment, decrement, reset, and value.
 */

function createCounter(start = 0) {
  let count = start;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = start),
    value: () => count,
  };
}

const c = createCounter(10);
console.log("increment:", c.increment()); // 11
console.log("increment:", c.increment()); // 12
console.log("decrement:", c.decrement()); // 11
console.log("reset:    ", c.reset());     // 10
console.log("value:    ", c.value());     // 10
