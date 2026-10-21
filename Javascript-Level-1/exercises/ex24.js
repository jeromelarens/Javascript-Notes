/**
 * Exercise 24: Block Scope with var vs let
 * Prompt: Demonstrate block scope with var vs let inside an if block.
 */

console.log("--- Executing if block ---");
if (true) {
  var globalVar = "I was declared with var inside an if-block";
  let blockLet = "I was declared with let inside an if-block";
  console.log("Inside block - var:", globalVar);
  console.log("Inside block - let:", blockLet);
}

console.log("\n--- Checking outside if block ---");
console.log("Outside block - var:", globalVar, "(var ignores block scope!)");

try {
  // @ts-ignore
  console.log(blockLet);
} catch (err) {
  console.log("Outside block - let: ReferenceError caught ->", err.message);
}
