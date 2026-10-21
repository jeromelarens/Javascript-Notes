/**
 * Exercise 10: Counter with reset
 * Prompt: Create createCounter() with increment, decrement, and reset.
 */

function createCounter(start = 0) {
  let count = start;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = start),
    get: () => count
  };
}

const counter = createCounter(50);
console.log("increment:", counter.increment()); // 51
console.log("increment:", counter.increment()); // 52
console.log("decrement:", counter.decrement()); // 51
console.log("reset:    ", counter.reset());     // 50
