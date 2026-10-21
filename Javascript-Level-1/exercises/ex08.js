/**
 * Exercise 8: Ternary Operator Pass or Fail
 * Prompt: Use the ternary operator to print "Pass" or "Fail" for a mark.
 */

function checkResult(mark) {
  return mark >= 40 ? "Pass" : "Fail";
}

console.log("Mark 75:", checkResult(75)); // Pass
console.log("Mark 39:", checkResult(39)); // Fail
console.log("Mark 40:", checkResult(40)); // Pass
