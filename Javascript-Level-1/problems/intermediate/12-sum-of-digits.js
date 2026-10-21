/**
 * Problem 12: Sum of Digits of a Number
 * 
 * Logic:
 * Use % 10 to extract the last digit.
 * Use Math.floor(n / 10) to remove the last digit.
 */

function sumOfDigits(n) {
  let num = Math.abs(n);
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Test Cases
console.log("sumOfDigits(1234) ->", sumOfDigits(1234)); // 1 + 2 + 3 + 4 = 10
console.log("sumOfDigits(987)  ->", sumOfDigits(987));  // 9 + 8 + 7 = 24
console.log("sumOfDigits(5)    ->", sumOfDigits(5));    // 5
