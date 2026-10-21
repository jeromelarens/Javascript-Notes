/**
 * Exercise 27: Generic curry Testing
 * Prompt: Write curry(fn) and test with 2, 3, and 4 parameters.
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...next) => curried.apply(this, [...args, ...next]);
  };
}

const add2 = (a, b) => a + b;
const add3 = (a, b, c) => a + b + c;
const add4 = (a, b, c, d) => a + b + c + d;

const c2 = curry(add2);
const c3 = curry(add3);
const c4 = curry(add4);

console.log("Curried 2-params: c2(10)(20)       =", c2(10)(20));       // 30
console.log("Curried 3-params: c3(1)(2)(3)      =", c3(1)(2)(3));      // 6
console.log("Curried 4-params: c4(1)(2)(3)(4)   =", c4(1)(2)(3)(4));   // 10
console.log("Curried 4-params: c4(1, 2)(3, 4)   =", c4(1, 2)(3, 4));   // 10
