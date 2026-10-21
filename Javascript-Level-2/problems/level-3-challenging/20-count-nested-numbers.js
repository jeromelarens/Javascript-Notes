/**
 * Problem 20: Deep Count of Nested Values (Recursion)
 * Task: Count all numbers inside arbitrarily nested arrays.
 */

function countNumbers(arr) {
  let count = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      count += countNumbers(item);
    } else if (typeof item === "number" && !Number.isNaN(item)) {
      count++;
    }
  }
  return count;
}

const mixedNestedArray = [1, [2, "a", [3]], "b", [[4, 5]], null, [6]];
console.log("Count of numbers in nested array:", countNumbers(mixedNestedArray)); // 6
