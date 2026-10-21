/**
 * Problem 8: Generic curry Function
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...next) => curried.apply(this, [...args, ...next]);
  };
}

const add3 = (a, b, c) => a + b + c;
const c = curry(add3);

console.log("c(1)(2)(3) =", c(1)(2)(3)); // 6
console.log("c(1, 2)(3) =", c(1, 2)(3)); // 6
console.log("c(1)(2, 3) =", c(1)(2, 3)); // 6
console.log("c(1, 2, 3) =", c(1, 2, 3)); // 6
