/**
 * Exercise 1: Declaration vs Expression Hoisting
 * Prompt: Write a function declaration and an equivalent function expression.
 * Call both before their definitions and note which one fails.
 */

console.log("Calling declaration before definition:");
console.log(declaredFn()); // Works!

try {
  // @ts-ignore
  expressedFn();
} catch (err) {
  console.log("Calling expression before definition throws:", err.name, "-", err.message);
}

function declaredFn() {
  return "I am a Function Declaration (fully hoisted)";
}

const expressedFn = function() {
  return "I am a Function Expression (TDZ)";
};
