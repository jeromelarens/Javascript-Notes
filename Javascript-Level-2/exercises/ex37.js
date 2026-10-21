/**
 * Exercise 37: Event Loop Execution Order
 * Prompt: Predict the output order for a mix of sync code, setTimeout, and Promise.then.
 */

console.log("1. Synchronous Start");

setTimeout(() => {
  console.log("4. Macrotask: setTimeout 0ms");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask: Promise.then");
});

console.log("2. Synchronous End");

// Sequence of output:
// 1. Synchronous Start
// 2. Synchronous End
// 3. Microtask: Promise.then
// 4. Macrotask: setTimeout 0ms
