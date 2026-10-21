/**
 * Exercise 20: Rest Parameters
 * Prompt: Write sum(...numbers) using rest parameters.
 */

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("sum(1, 2, 3)        ->", sum(1, 2, 3));         // 6
console.log("sum(10, 20, 30, 40) ->", sum(10, 20, 30, 40)); // 100
console.log("sum()               ->", sum());               // 0
