/**
 * Problem 18: Greatest Common Divisor (GCD) / HCF
 * 
 * Euclid's Algorithm:
 * While b !== 0:
 *   temp = b
 *   b = a % b
 *   a = temp
 * return a
 */

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

// Test Cases
console.log("gcd(48, 18)  ->", gcd(48, 18));  // 6
console.log("gcd(101, 10) ->", gcd(101, 10)); // 1 (coprime)
console.log("gcd(56, 98)  ->", gcd(56, 98));  // 14
