/**
 * Exercise 18: Math.max with apply
 * Prompt: Use apply to find the max of an array without spread.
 */

const values = [12, 45, 89, 23, 76, 94, 31];

// Using Math.max.apply
const maxNumber = Math.max.apply(null, values);
console.log("Max found with apply:", maxNumber); // 94
