/**
 * Exercise 14: Even Numbers 1 to 50
 * Prompt: Print all even numbers between 1 and 50.
 */

const evens = [];
for (let i = 2; i <= 50; i += 2) {
  evens.push(i);
}

console.log("Even numbers 1 to 50:");
console.log(evens.join(", "));
