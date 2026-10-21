/**
 * Exercise 28: Infinite Currying sum(1)(2)(3)()
 * Prompt: Implement sum(1)(2)(3)().
 */

function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

console.log("sum(1)(2)(3)()          ->", sum(1)(2)(3)());          // 6
console.log("sum(5)(10)(15)(20)()    ->", sum(5)(10)(15)(20)());    // 50
console.log("sum(100)()              ->", sum(100)());              // 100
