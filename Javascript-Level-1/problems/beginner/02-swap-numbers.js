/**
 * Problem 2: Swap Two Numbers
 * 
 * Demonstrating both:
 * 1. Using a temporary variable
 * 2. Modern ES6 destructuring swap without temporary variable
 */

console.log("--- Method 1: Using Temporary Variable ---");
let a = 5;
let b = 10;
console.log("Before swap: a =", a, ", b =", b);

const temp = a;
a = b;
b = temp;
console.log("After swap:  a =", a, ", b =", b);

console.log("\n--- Method 2: Modern ES6 Destructuring Swap ---");
let x = 100;
let y = 200;
console.log("Before swap: x =", x, ", y =", y);
[x, y] = [y, x];
console.log("After swap:  x =", x, ", y =", y);
