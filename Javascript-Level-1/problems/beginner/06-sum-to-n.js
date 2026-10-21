/**
 * Problem 6: Sum of 1 to N
 * 
 * 1. Loop approach: O(n)
 * 2. Mathematical Gauss formula: O(1) -> n * (n + 1) / 2
 */

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToNFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log("sumToN(10) via loop:   ", sumToN(10));        // 55
console.log("sumToN(10) via formula:", sumToNFormula(10)); // 55
console.log("sumToN(100):          ", sumToNFormula(100)); // 5050
