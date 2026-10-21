/**
 * Problem 3: Find the Largest of Three Numbers
 */

function largest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// Test Cases
console.log("largest(4, 9, 2)   ->", largest(4, 9, 2));   // 9
console.log("largest(15, 3, 10)  ->", largest(15, 3, 10));  // 15
console.log("largest(7, 7, 7)    ->", largest(7, 7, 7));    // 7
