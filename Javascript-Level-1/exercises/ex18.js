/**
 * Exercise 18: Loop with break
 * Prompt: Use break to stop at the first number divisible by 7 in the range 50–100.
 */

let foundNumber = null;

for (let n = 50; n <= 100; n++) {
  if (n % 7 === 0) {
    foundNumber = n;
    break; // Exit loop immediately once found
  }
}

console.log("The first number divisible by 7 between 50 and 100 is:", foundNumber);
