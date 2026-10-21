/**
 * Exercise 9: repeat(n, fn)
 * Prompt: Write repeat(n, fn) that runs a callback n times.
 */

function repeat(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

repeat(4, (index) => {
  console.log(`Executing callback step ${index + 1} of 4`);
});
