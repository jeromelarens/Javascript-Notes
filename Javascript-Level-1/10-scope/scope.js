/**
 * 🔭 Module 10: Scope
 * 
 * Global Scope, Function Scope, Block Scope, Scope Chain,
 * Shadowing, Strict Mode, and Closures.
 */

console.log("--- 1. Global vs Function vs Block Scope ---");
const globalVal = "I am Global";

function testFunctionScope() {
  var funcVar = "I exist only inside this function";
  console.log("Inside function:", globalVal, "|", funcVar);
}
testFunctionScope();
// console.log(funcVar); // ReferenceError: funcVar is not defined

if (true) {
  var leakedVar = "var leaks out of blocks!";
  let blockLet = "let is locked inside this block";
  const blockConst = "const is also block-scoped";
}
console.log("var outside block:", leakedVar); // Accessible!
// console.log(blockLet); // ReferenceError

console.log("\n--- 2. Scope Chain & Lexical Resolution ---");
const level1 = "Tier 1: Global";

function outerScope() {
  const level2 = "Tier 2: Outer";

  function innerScope() {
    const level3 = "Tier 3: Inner";
    console.log("Scope chain access:", level1, "->", level2, "->", level3);
  }

  innerScope();
}
outerScope();

console.log("\n--- 3. Variable Shadowing ---");
let configVal = "Default Config";

function loadCustomConfig() {
  let configVal = "Custom Config (Shadows Outer)";
  console.log("Inside:", configVal);
}
loadCustomConfig();
console.log("Outside:", configVal);

console.log("\n--- 4. Closures (Function + Lexical Environment) ---");
// A closure remembers its outer variables even after the outer function has completed!
function createCounter(initial = 0) {
  let count = initial; // Private state retained by closure

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counterA = createCounter(10);
console.log("counterA increment:", counterA.increment()); // 11
console.log("counterA increment:", counterA.increment()); // 12
console.log("counterA decrement:", counterA.decrement()); // 11
console.log("counterA current:  ", counterA.getCount());  // 11
