/**
 * Problem 16: Remove Duplicates from an Array
 * 
 * 1. Using a loop with includes: O(n^2)
 * 2. Using modern Set: O(n)
 */

function removeDuplicatesLoop(arr) {
  const unique = [];
  for (const item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}

const list = [1, 2, 2, 3, 4, 4, 5, 1, "a", "a"];
console.log("Via Loop: ", removeDuplicatesLoop(list));
console.log("Via Set:  ", removeDuplicatesSet(list));
