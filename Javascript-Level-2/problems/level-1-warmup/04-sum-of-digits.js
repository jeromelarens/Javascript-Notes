/**
 * Problem 4: Sum of Digits (Recursion)
 */

function sumDigits(n) {
  const num = Math.abs(n);
  if (num < 10) return num;
  return (num % 10) + sumDigits(Math.floor(num / 10));
}

console.log("sumDigits(1234) ->", sumDigits(1234)); // 10
console.log("sumDigits(987)  ->", sumDigits(987));  // 24
console.log("sumDigits(5)    ->", sumDigits(5));    // 5
