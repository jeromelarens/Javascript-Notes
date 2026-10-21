/**
 * Problem 18: after(n, fn) — Run Only From the n-th Call
 */

function after(n, fn) {
  let calls = 0;

  return function (...args) {
    calls++;
    if (calls >= n) {
      return fn.apply(this, args);
    }
  };
}

const notifyWhenReady = after(3, (task) => {
  console.log(`[ALERT] Task "${task}" executed! Threshold of 3 reached.`);
});

notifyWhenReady("Sync"); // Call 1 -> does nothing
notifyWhenReady("Sync"); // Call 2 -> does nothing
notifyWhenReady("Sync"); // Call 3 -> executes!
notifyWhenReady("Sync"); // Call 4 -> executes!
