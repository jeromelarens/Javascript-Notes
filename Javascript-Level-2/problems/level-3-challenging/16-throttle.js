/**
 * Problem 16: Implement throttle
 * 
 * Logic:
 * Ensures the target function runs at most once within a given time interval.
 */

function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

const onWindowScroll = throttle((pos) => {
  console.log("Scroll event processed at position:", pos);
}, 200);

onWindowScroll(100); // executes
onWindowScroll(120); // throttled
onWindowScroll(150); // throttled
