/**
 * Problem 7: Infinite Currying sum(1)(2)(3)()
 * 
 * Logic:
 * Each call returns a function that accumulates; calling with no argument
 * (or undefined) terminates the chain and returns the accumulated sum.
 */

function sum(a) {
  return function (b) {
    return b === undefined ? a : sum(a + b);
  };
}

console.log("sum(1)(2)(3)()       ->", sum(1)(2)(3)());       // 6
console.log("sum(10)(20)(30)(40)() ->", sum(10)(20)(30)(40)()); // 100
console.log("sum(5)()              ->", sum(5)());              // 5
