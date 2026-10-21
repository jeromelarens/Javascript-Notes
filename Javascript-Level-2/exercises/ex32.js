/**
 * Exercise 32: Testing debounce & throttle
 * Prompt: Write debounce and throttle, then test them with setTimeout.
 */

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      return fn.apply(this, args);
    }
  };
}

const debouncedLog = debounce(msg => console.log("Debounced ran:", msg), 50);
const throttledLog = throttle(msg => console.log("Throttled ran:", msg), 50);

throttledLog("Initial");
throttledLog("Spam");

debouncedLog("First");
debouncedLog("Final (Wins)");
