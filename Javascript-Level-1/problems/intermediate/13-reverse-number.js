/**
 * Problem 13: Reverse an Integer Number
 * 
 * Logic:
 * Repeatedly take remainder by 10 and accumulate into reversed * 10 + remainder.
 */

function reverseNumber(n) {
  const isNegative = n < 0;
  let num = Math.abs(n);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return isNegative ? -reversed : reversed;
}

// Test Cases
console.log("reverseNumber(1234)  ->", reverseNumber(1234));  // 4321
console.log("reverseNumber(9870)  ->", reverseNumber(9870));  // 789
console.log("reverseNumber(-543)  ->", reverseNumber(-543));  // -345
