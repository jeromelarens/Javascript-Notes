/**
 * Exercise 4: Automatic Semicolon Insertion (ASI) Return Pitfall
 * Prompt: Write a function that returns undefined accidentally due to ASI, then fix it.
 */

// Buggy version: ASI inserts a semicolon after return
function getPayloadBuggy() {
  return
  {
    success: true
  };
}

// Fixed version: keep opening curly brace on the return line
function getPayloadFixed() {
  return {
    success: true
  };
}

console.log("Buggy returns: ", getPayloadBuggy()); // undefined
console.log("Fixed returns: ", getPayloadFixed()); // { success: true }
