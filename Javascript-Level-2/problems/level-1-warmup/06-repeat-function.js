/**
 * Problem 6: Run Function N Times (repeat)
 */

function repeat(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

repeat(3, i => console.log(`Iteration #${i + 1}`));
