/**
 * Problem 5: FizzBuzz (1 to 15)
 * 
 * Logic:
 * Multiples of 3 -> "Fizz"
 * Multiples of 5 -> "Buzz"
 * Multiples of both 3 and 5 (i.e. 15) -> "FizzBuzz"
 * Note: Check the combined condition (15) first!
 */

function fizzBuzz(limit = 15) {
  const output = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(String(i));
    }
  }
  return output;
}

console.log(fizzBuzz(15).join(", "));
