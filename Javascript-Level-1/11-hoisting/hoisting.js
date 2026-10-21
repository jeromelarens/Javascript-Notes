/**
 * 🧱 Module 11: Hoisting
 * 
 * Hoisting is JavaScript's compilation phase behavior where variable
 * and function declarations are registered in memory before code runs.
 */

console.log("--- 1. var Hoisting ---");
// var declaration is hoisted and initialized to undefined
console.log("city before declaration:", city); // undefined
var city = "Chennai";
console.log("city after declaration:", city);   // Chennai

console.log("\n--- 2. Function Declaration Hoisting ---");
// Entire function declaration (name + body) is hoisted!
console.log(hoistedFunc()); // Works!

function hoistedFunc() {
  return "I was hoisted with my complete implementation!";
}

console.log("\n--- 3. Function Expression Hoisting ---");
// Only the variable declaration is hoisted, NOT the function assignment!
console.log("type of varFuncExpr before line:", typeof varFuncExpr); // undefined
try {
  varFuncExpr(); // Throws TypeError: varFuncExpr is not a function
} catch (err) {
  console.error("Caught expected error:", err.name, "-", err.message);
}

var varFuncExpr = function() {
  return "I am ready";
};

console.log("\n--- 4. let and const in the Temporal Dead Zone (TDZ) ---");
// let & const are hoisted into their block scope, but remain uninitialized in TDZ
try {
  // console.log(tdzItem);
  let tdzItem = "Safe now!";
  console.log("tdzItem:", tdzItem);
} catch (err) {
  console.error("TDZ ReferenceError caught:", err.message);
}
