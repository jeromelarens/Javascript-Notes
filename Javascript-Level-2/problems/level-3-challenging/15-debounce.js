/**
 * Problem 15: Implement debounce
 * 
 * Logic:
 * Each call resets the timer. The callback only executes after `delay` ms of silence.
 */

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const performSearch = debounce(query => {
  console.log("Searching backend for:", query);
}, 100);

console.log("Triggering rapid keystrokes...");
performSearch("j");
performSearch("ja");
performSearch("jav");
performSearch("javascript"); // Only this final call executes after 100ms
