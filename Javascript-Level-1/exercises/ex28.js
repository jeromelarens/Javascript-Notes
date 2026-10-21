/**
 * Exercise 28: Testing 15 Different Values with Boolean()
 * Prompt: Test 15 different values with Boolean() and group them into truthy and falsy.
 */

const testValues = [
  "Hello",
  "",
  "0",
  "false",
  0,
  -0,
  42,
  -1,
  null,
  undefined,
  NaN,
  0n,
  [],
  {},
  function() {}
];

const truthyGroup = [];
const falsyGroup = [];

testValues.forEach(val => {
  const isTruthy = Boolean(val);
  const displayVal = typeof val === "function" 
    ? "function() {}" 
    : (typeof val === "object" ? JSON.stringify(val) : String(val));
    
  const item = { value: displayVal, type: typeof val };

  if (isTruthy) {
    truthyGroup.push(item);
  } else {
    falsyGroup.push(item);
  }
});

console.log("=== 🟢 TRUTHY VALUES ===");
console.table(truthyGroup);

console.log("\n=== 🔴 FALSY VALUES ===");
console.table(falsyGroup);
