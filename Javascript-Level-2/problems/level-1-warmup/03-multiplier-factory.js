/**
 * Problem 3: Multiplier Factory
 */

const multiplier = factor => number => number * factor;

const double = multiplier(2);
const triple = multiplier(3);
const tenTimes = multiplier(10);

console.log("double(7):  ", double(7));   // 14
console.log("triple(7):  ", triple(7));   // 21
console.log("tenTimes(7):", tenTimes(7)); // 70
