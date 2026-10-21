/**
 * Exercise 22: Closure Counter
 * Prompt: Write a function makeCounter() that returns a function that increments
 * and returns a count (closure).
 */

function makeCounter(startAt = 0) {
  let count = startAt;

  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log("counter1 call 1:", counter1()); // 1
console.log("counter1 call 2:", counter1()); // 2
console.log("counter1 call 3:", counter1()); // 3

const counter2 = makeCounter(100);
console.log("counter2 call 1:", counter2()); // 101
console.log("counter1 call 4:", counter1()); // 4 (counter1 has its own private state)
