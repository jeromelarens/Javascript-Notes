/**
 * Exercise 23: Recursive Sum of Digits
 * Prompt: Write a recursive function to calculate the sum of digits.
 */

function recursiveSumOfDigits(n) {
  const num = Math.abs(n);
  // Base case: single digit
  if (num < 10) return num;

  // Recursive case: last digit + recursive call on remainder
  return (num % 10) + recursiveSumOfDigits(Math.floor(num / 10));
}

console.log("recursiveSumOfDigits(1234) ->", recursiveSumOfDigits(1234)); // 10
console.log("recursiveSumOfDigits(999)  ->", recursiveSumOfDigits(999));  // 27
console.log("recursiveSumOfDigits(7)    ->", recursiveSumOfDigits(7));    // 7
