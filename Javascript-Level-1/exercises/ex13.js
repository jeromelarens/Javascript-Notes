/**
 * Exercise 13: Multiplication Table
 * Prompt: Print multiplication tables from 1 to 10 for a given number.
 */

function printTable(num) {
  console.log(`--- Multiplication Table for ${num} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${String(i).padStart(2)} = ${num * i}`);
  }
}

printTable(7);
