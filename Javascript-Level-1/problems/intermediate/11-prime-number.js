/**
 * Problem 11: Prime Number Check
 * 
 * Logic:
 * A prime number is greater than 1 and has no divisors other than 1 and itself.
 * Optimized check: Loop only up to sqrt(n).
 */

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Test Cases
console.log("isPrime(17) ->", isPrime(17)); // true
console.log("isPrime(21) ->", isPrime(21)); // false (divisible by 3 and 7)
console.log("isPrime(2)  ->", isPrime(2));  // true (smallest prime)
console.log("isPrime(1)  ->", isPrime(1));  // false
console.log("isPrime(29) ->", isPrime(29)); // true
