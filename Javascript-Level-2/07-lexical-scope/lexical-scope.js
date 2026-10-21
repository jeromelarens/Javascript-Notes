/**
 * 🔭 Module 7: Lexical Scope
 * 
 * Lexical Scope means variable accessibility is determined by WHERE
 * the function is WRITTEN in the source code, not where it is called!
 */

console.log("--- 1. Lexical Scope Lookup ---");
const globalVal = "I am Global";

function outer() {
  const outerVal = "I am Outer";

  function inner() {
    const innerVal = "I am Inner";
    console.log("inner() accessing:", globalVal, "|", outerVal, "|", innerVal);
  }

  inner();
}
outer();

console.log("\n--- 2. Lexical vs Dynamic Scoping Demonstration ---");
const message = "Global Message";

function printMessage() {
  // Resolved where written (in global scope)
  console.log("printMessage sees:", message);
}

function callerScope() {
  const message = "Local Message Inside callerScope";
  // Calling printMessage from here does NOT alter its lexical scope!
  printMessage();
}

callerScope(); // Logs: "Global Message"
