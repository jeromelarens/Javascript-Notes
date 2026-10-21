/**
 * Exercise 36: Call Stack Frames Visualization
 * Prompt: Draw the call stack for a program with 4 nested function calls.
 */

function d() {
  console.log("-> 4. Executing d() at top of stack");
  console.trace("Call stack snapshot inside d()");
}

function c() {
  console.log("-> 3. Inside c(), invoking d()");
  d();
}

function b() {
  console.log("-> 2. Inside b(), invoking c()");
  c();
}

function a() {
  console.log("-> 1. Inside a(), invoking b()");
  b();
}

console.log("Initial Global Frame");
a();
console.log("Global Frame finished");
