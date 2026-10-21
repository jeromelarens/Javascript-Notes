/**
 * Problem 15: Find the Largest Number in an Array
 * 
 * 1. Iterative algorithm: O(n)
 * 2. Using Math.max(...arr)
 */

function findMaxIterative(arr) {
  if (!arr || arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMaxMath(arr) {
  return Math.max(...arr);
}

const sampleNumbers = [3, 9, 2, 15, 7, 28, 4];
console.log("Iterative Max: ", findMaxIterative(sampleNumbers)); // 28
console.log("Math.max:      ", findMaxMath(sampleNumbers));      // 28
console.log("Negative test: ", findMaxIterative([-10, -5, -20])); // -5
