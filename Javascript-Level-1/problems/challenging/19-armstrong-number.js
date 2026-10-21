/**
 * Problem 19: Armstrong (Narcissistic) Number Check
 * 
 * Logic:
 * An Armstrong number of n digits is an integer such that the sum
 * of its digits raised to the nth power equals the number itself.
 * Example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 */

function isArmstrong(n) {
  const digitsStr = String(Math.abs(n));
  const numDigits = digitsStr.length;
  let sum = 0;

  for (const digitChar of digitsStr) {
    sum += Number(digitChar) ** numDigits;
  }

  return sum === n;
}

// Test Cases
console.log("153 is Armstrong? ->", isArmstrong(153)); // true (3 digits)
console.log("370 is Armstrong? ->", isArmstrong(370)); // true (3 digits)
console.log("9474 is Armstrong?->", isArmstrong(9474)); // true (4 digits)
console.log("123 is Armstrong? ->", isArmstrong(123)); // false
