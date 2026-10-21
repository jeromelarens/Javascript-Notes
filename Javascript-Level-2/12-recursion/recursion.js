/**
 * 🔁 Module 12: Recursion
 * 
 * Recursive functions call themselves to solve sub-problems.
 * Requirements: Base Case (termination condition) and Recursive Case.
 */

console.log("--- 1. Countdown ---");
function countdown(n) {
  if (n <= 0) {
    console.log("Lift off! 🚀");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
countdown(3);

console.log("\n--- 2. Factorial ---");
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("factorial(5) =", factorial(5)); // 120

console.log("\n--- 3. Flattening Nested Array ---");
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log("Flattened:", flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

console.log("\n--- 4. Recursive Folder Tree Traversal ---");
const fileSystem = {
  name: "root",
  children: [
    { name: "src", children: [{ name: "index.js", children: [] }] },
    { name: "package.json", children: [] }
  ]
};

function printTree(node, depth = 0) {
  console.log("  ".repeat(depth) + "📁 " + node.name);
  for (const child of node.children) {
    printTree(child, depth + 1);
  }
}
printTree(fileSystem);
