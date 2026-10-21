/**
 * 🥇 Module 4: First-Class Functions
 * 
 * In JavaScript, functions are first-class citizens:
 * 1. Assigned to variables
 * 2. Passed as arguments
 * 3. Returned from functions
 * 4. Stored in data structures
 */

console.log("--- 1. Assigned to Variables ---");
const sayHello = function() {
  return "Hello, First-Class!";
};
console.log("sayHello() ->", sayHello());

console.log("\n--- 2. Passed as Arguments ---");
function executeTask(fn, arg) {
  return fn(arg);
}
const square = x => x * x;
console.log("executeTask(square, 6) ->", executeTask(square, 6));

console.log("\n--- 3. Returned from Functions ---");
function greetingFactory(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const sayVanakkam = greetingFactory("Vanakkam");
console.log(sayVanakkam("Arun"));

console.log("\n--- 4. Stored in Objects & Arrays ---");
const mathOperations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};
console.log("mathOperations.mul(6, 7) ->", mathOperations.mul(6, 7));

const pipeline = [x => x + 10, x => x * 2];
const pipedResult = pipeline.reduce((val, fn) => fn(val), 5); // (5 + 10) * 2 = 30
console.log("Array pipeline result ->", pipedResult);
