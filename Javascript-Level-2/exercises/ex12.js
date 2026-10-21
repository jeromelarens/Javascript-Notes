/**
 * Exercise 12: Fixing var + setTimeout Loop in 3 Ways
 * Prompt: Fix the var + setTimeout loop three ways: let, IIFE, and bind.
 */

console.log("--- Fix 1: Using block-scoped 'let' ---");
for (let i = 1; i <= 2; i++) {
  setTimeout(() => console.log("Fix 1 (let) i =", i), 10);
}

console.log("--- Fix 2: Using an IIFE ---");
for (var j = 1; j <= 2; j++) {
  (function(capturedJ) {
    setTimeout(() => console.log("Fix 2 (IIFE) j =", capturedJ), 20);
  })(j);
}

console.log("--- Fix 3: Using Function.prototype.bind ---");
for (var k = 1; k <= 2; k++) {
  setTimeout(function(capturedK) {
    console.log("Fix 3 (bind) k =", capturedK);
  }.bind(null, k), 30);
}
