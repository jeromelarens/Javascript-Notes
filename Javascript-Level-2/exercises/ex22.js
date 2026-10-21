/**
 * Exercise 22: IIFE Module Pattern Counter
 * Prompt: Build a module-pattern counter with an IIFE.
 */

const counterModule = (function () {
  let count = 0; // Completely private

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = 0;
      return count;
    },
    value() {
      return count;
    }
  };
})();

console.log("Inc:  ", counterModule.increment()); // 1
console.log("Inc:  ", counterModule.increment()); // 2
console.log("Dec:  ", counterModule.decrement()); // 1
console.log("Reset:", counterModule.reset());     // 0
console.log("Access count directly:", counterModule.count); // undefined
