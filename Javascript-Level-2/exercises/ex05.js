/**
 * Exercise 5: Functions Stored in Objects and Called Dynamically
 * Prompt: Store 3 functions in an object (add, sub, mul) and call them dynamically by name.
 */

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};

function execute(operationName, x, y) {
  const op = calculator[operationName];
  if (!op) throw new Error(`Operation '${operationName}' not found!`);
  return op(x, y);
}

console.log("add(10, 5) ->", execute("add", 10, 5)); // 15
console.log("sub(10, 5) ->", execute("sub", 10, 5)); // 5
console.log("mul(10, 5) ->", execute("mul", 10, 5)); // 50
