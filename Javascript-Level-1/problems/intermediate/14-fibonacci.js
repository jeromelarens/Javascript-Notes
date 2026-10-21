/**
 * Problem 14: Fibonacci Series (First N Terms)
 * 
 * Logic:
 * Sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
 * Next term is the sum of previous two terms.
 */

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const series = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return series;
}

// Test Cases
console.log("fibonacci(8) ->", fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("fibonacci(1) ->", fibonacci(1)); // [0]
console.log("fibonacci(4) ->", fibonacci(4)); // [0, 1, 1, 2]
