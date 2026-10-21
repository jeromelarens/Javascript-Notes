/**
 * Exercise 14: once and after Higher-Order Functions
 * Prompt: Write once(fn) and after(n, fn).
 */

function once(fn) {
  let done = false;
  let val;
  return function(...args) {
    if (!done) {
      done = true;
      val = fn.apply(this, args);
    }
    return val;
  };
}

function after(n, fn) {
  let count = 0;
  return function(...args) {
    count++;
    if (count >= n) return fn.apply(this, args);
  };
}

const sendAlert = once((msg) => `Alert sent: ${msg}`);
console.log(sendAlert("Warning 1")); // Alert sent: Warning 1
console.log(sendAlert("Warning 2")); // Alert sent: Warning 1 (cached)

const unlock = after(2, () => "Vault unlocked!");
console.log("Call 1:", unlock()); // undefined
console.log("Call 2:", unlock()); // Vault unlocked!
