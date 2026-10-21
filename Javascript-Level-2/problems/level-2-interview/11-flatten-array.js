/**
 * Problem 11: Flatten a Nested Array (Recursion)
 */

function flatten(arr) {
  return arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );
}

const deeplyNested = [1, [2, [3, [4]], 5], 6];
console.log("Original:", JSON.stringify(deeplyNested));
console.log("Flattened:", flatten(deeplyNested)); // [1, 2, 3, 4, 5, 6]
