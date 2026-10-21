/**
 * Exercise 26: Fixing the Classic var + setTimeout Loop Bug
 * Prompt: Fix the classic var loop + setTimeout bug.
 */

console.log("--- The Buggy Behavior with var ---");
console.log("for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 10);");
console.log("Explanation: All callbacks share the same single function-scoped 'i' which becomes 3.\n");

console.log("--- Solution 1: Use block-scoped let ---");
for (let i = 0; i < 3; i++) {
  // With let, each iteration creates a brand new binding for i
  setTimeout(() => {
    console.log("Solution 1 (let) i =", i);
  }, 10);
}

console.log("--- Solution 2: Use an IIFE / Closure (Legacy JS way) ---");
for (var j = 0; j < 3; j++) {
  (function(capturedJ) {
    setTimeout(() => {
      console.log("Solution 2 (IIFE closure) j =", capturedJ);
    }, 20);
  })(j);
}
