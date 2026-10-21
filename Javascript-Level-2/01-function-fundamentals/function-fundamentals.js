/**
 * 📦 Module 1: Function Fundamentals Revision
 * 
 * Functions are reusable units of code that perform specific tasks.
 * Key distinctions: Parameters (definitions) vs Arguments (actual call values),
 * and return vs console.log (program data flow vs developer printing).
 */

console.log("--- 1. Function Definition & Invocation ---");
function add(a, b) {
  return a + b;
}

console.log("add(10, 20) ->", add(10, 20));
console.log("add(5, 15)  ->", add(5, 15));

console.log("\n--- 2. Parameters vs Arguments ---");
function greet(name) { // name -> parameter
  return `Hello, ${name}!`;
}
console.log(greet("Arun")); // "Arun" -> argument

console.log("\n--- 3. return vs console.log ---");
function logSum(a, b) {
  console.log("Inside logSum:", a + b); // only prints
}

const loggedResult = logSum(2, 3);
console.log("Value returned by logSum:", loggedResult); // undefined

function returnSum(a, b) {
  return a + b; // returns data to caller
}
const calculatedResult = returnSum(2, 3);
console.log("Value returned by returnSum:", calculatedResult); // 5

console.log("\n--- 4. ASI Trap with return ---");
function buggyReturn() {
  return
  {
    status: "ok"
  };
}
console.log("buggyReturn() returns:", buggyReturn(), "(due to Automatic Semicolon Insertion!)");

function fixedReturn() {
  return {
    status: "ok"
  };
}
console.log("fixedReturn() returns:", fixedReturn());
