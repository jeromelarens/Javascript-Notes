/**
 * 🧵 Module 20: Execution Context and Call Stack
 * 
 * 1. Creation Phase (Hoisting, variable environment setup, scope chain, 'this')
 * 2. Execution Phase (Line-by-line execution)
 * 3. Call Stack (LIFO: Last In, First Out)
 * 4. Event loop order: Synchronous -> Microtasks (Promises) -> Macrotasks (Timers)
 */

console.log("--- 1. Call Stack Execution Order ---");
function stepThree() {
  console.log("3. Inside stepThree()");
}

function stepTwo() {
  console.log("2. Inside stepTwo() - calling stepThree()");
  stepThree();
  console.log("4. Back in stepTwo()");
}

function stepOne() {
  console.log("1. Inside stepOne() - calling stepTwo()");
  stepTwo();
  console.log("5. Back in stepOne()");
}

stepOne();

console.log("\n--- 2. Event Loop Order Preview ---");
console.log("Sync A");

setTimeout(() => {
  console.log("Macrotask: setTimeout timer callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

console.log("Sync B");
// Expected order: Sync A -> Sync B -> Microtask -> Macrotask
