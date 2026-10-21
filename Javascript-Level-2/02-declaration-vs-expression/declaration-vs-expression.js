/**
 * 🔀 Module 2: Function Declaration vs Function Expression
 * 
 * Declaration: function name() {} -> initialized during context creation (fully hoisted)
 * Expression: const name = function() {} -> behaves like variable initialization
 */

console.log("--- 1. Function Declaration (Hoisted) ---");
console.log(declaredGreet()); // Works before definition line!

function declaredGreet() {
  return "Hello from Function Declaration!";
}

console.log("\n--- 2. Function Expression (Not Hoisted) ---");
try {
  // @ts-ignore
  expressedGreet();
} catch (err) {
  console.log("Calling expression before initialization caught:", err.name, "-", err.message);
}

const expressedGreet = function() {
  return "Hello from Function Expression!";
};
console.log("After initialization:", expressedGreet());

console.log("\n--- 3. Named Function Expression (NFE) ---");
// Internal name 'calculate' is available ONLY inside for recursion and stack traces
const factorial = function calculate(n) {
  if (n <= 1) return 1;
  return n * calculate(n - 1);
};

console.log("factorial(5) via NFE =", factorial(5));

try {
  // @ts-ignore
  console.log(calculate); // ReferenceError: calculate is not defined outside
} catch (err) {
  console.log("Accessing NFE internal name outside caught:", err.message);
}
