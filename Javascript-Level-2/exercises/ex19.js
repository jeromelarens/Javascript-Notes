/**
 * Exercise 19: Partial Application with bind
 * Prompt: Create double and triple from multiply using bind.
 */

function multiply(factor, number) {
  return factor * number;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log("double(12) ->", double(12)); // 24
console.log("triple(12) ->", triple(12)); // 36
