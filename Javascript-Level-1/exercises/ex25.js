/**
 * Exercise 25: Predicting var Hoisting & Function Expression
 * Prompt: Predict output (then verify) of a program that uses var hoisting
 * and a function expression called before definition.
 */

console.log("Value of hoistedVar before line:", typeof hoistedVar, "->", hoistedVar);
var hoistedVar = 42;
console.log("Value of hoistedVar after line: ", hoistedVar);

try {
  // @ts-ignore
  myFuncExpr();
} catch (err) {
  console.log("Calling myFuncExpr() early caught:", err.name, "-", err.message);
  console.log("Reason: myFuncExpr variable is hoisted as undefined. Invoking undefined() throws TypeError.");
}

var myFuncExpr = function() {
  return "Successfully ran";
};
