/**
 * 🍛 Module 13: Function Currying
 * 
 * Currying converts f(a, b, c) into f(a)(b)(c).
 * Used for creating specialized reusable functions and delayed execution.
 */

console.log("--- 1. Basic Currying ---");
const add = a => b => c => a + b + c;
console.log("add(1)(2)(3) =", add(1)(2)(3)); // 6

console.log("\n--- 2. Specialized Functions via Currying ---");
const discount = percent => price => price - (price * percent) / 100;
const festivalDiscount = discount(20); // 20% off
const clearanceDiscount = discount(50); // 50% off

console.log("Festival price for 2000:  ", festivalDiscount(2000));  // 1600
console.log("Clearance price for 2000: ", clearanceDiscount(2000)); // 1000

console.log("\n--- 3. Generic curry Utility ---");
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

function calculateVolume(l, w, h) {
  return l * w * h;
}

const curriedVolume = curry(calculateVolume);
console.log("curriedVolume(2)(3)(4)   =", curriedVolume(2)(3)(4));
console.log("curriedVolume(2, 3)(4)   =", curriedVolume(2, 3)(4));
console.log("curriedVolume(2, 3, 4)   =", curriedVolume(2, 3, 4));

console.log("\n--- 4. Infinite Currying ---");
function infiniteSum(a) {
  return function(b) {
    if (b === undefined) return a;
    return infiniteSum(a + b);
  };
}
console.log("infiniteSum(1)(2)(3)(4)() =", infiniteSum(1)(2)(3)(4)()); // 10
