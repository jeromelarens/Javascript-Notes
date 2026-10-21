/**
 * Exercise 38: Stack Overflow Catch & Loop Refactor
 * Prompt: Write a program that causes a stack overflow, catch it with try/catch, and fix it with a loop.
 */

// Problem: Uncontrolled recursion leads to RangeError
function runInfiniteRecursion(n = 0) {
  return runInfiniteRecursion(n + 1);
}

try {
  runInfiniteRecursion();
} catch (err) {
  console.log("Caught expected error:", err.name, "-", err.message);
}

// Fix: Convert to constant stack loop
function runSafeIteration(maxSteps) {
  let count = 0;
  for (let i = 0; i < maxSteps; i++) {
    count++;
  }
  return `Successfully processed ${count.toLocaleString()} iterations without stack overflow!`;
}

console.log(runSafeIteration(100_000));
