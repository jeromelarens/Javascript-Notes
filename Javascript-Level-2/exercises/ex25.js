/**
 * Exercise 25: Deep Flatten & Nested Count
 * Prompt: Write flatten(arr) and countNested(arr) for deeply nested arrays.
 */

function flatten(arr) {
  let out = [];
  for (const item of arr) {
    if (Array.isArray(item)) out = out.concat(flatten(item));
    else out.push(item);
  }
  return out;
}

function countNested(arr) {
  let count = 0;
  for (const item of arr) {
    if (Array.isArray(item)) count += countNested(item);
    else count++;
  }
  return count;
}

const deeplyNested = [1, [2, [3, [4, 5]], 6], 7];
console.log("Flattened:   ", flatten(deeplyNested)); // [1, 2, 3, 4, 5, 6, 7]
console.log("Total Items: ", countNested(deeplyNested)); // 7
