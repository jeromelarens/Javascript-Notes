/**
 * Exercise 3: Rest Parameters - sum & average
 * Prompt: Write sum(...nums) and average(...nums) using rest parameters.
 */

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

function average(...nums) {
  return nums.length === 0 ? 0 : sum(...nums) / nums.length;
}

console.log("sum(10, 20, 30, 40)     =", sum(10, 20, 30, 40));     // 100
console.log("average(10, 20, 30, 40) =", average(10, 20, 30, 40)); // 25
console.log("average()               =", average());               // 0
