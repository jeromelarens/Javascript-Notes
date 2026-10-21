/**
 * 🧪 JavaScript Level 1: 18 Tricky Output Predictions
 * 
 * Run this file with: node interview/output-prediction.js
 */

console.log("==================================================");
console.log("🧪 JavaScript Level 1: 18 Output Predictions");
console.log("==================================================\n");

// Q1
console.log("Q1: typeof NaN");
console.log("Result:", typeof NaN);
console.log("Reason: In ECMAScript spec, NaN is a numeric value representing an unrepresentable number.\n");

// Q2
console.log("Q2: 0.1 + 0.2 === 0.3");
console.log("Result:", 0.1 + 0.2 === 0.3);
console.log("Reason: IEEE 754 floating point arithmetic produces 0.30000000000000004.\n");

// Q3
console.log("Q3: '5' + 3 - 2");
console.log("Result:", "5" + 3 - 2);
console.log("Reason: '5' + 3 concatenates to '53', then '53' - 2 coerces to number 51.\n");

// Q4
console.log("Q4: 1 + '1' - 1");
console.log("Result:", 1 + "1" - 1);
console.log("Reason: 1 + '1' produces '11', then '11' - 1 coerces to number 10.\n");

// Q5
console.log("Q5: typeof typeof 1");
console.log("Result:", typeof typeof 1);
console.log("Reason: typeof 1 returns the string 'number', and typeof 'number' is 'string'.\n");

// Q6
console.log("Q6: NaN === NaN");
console.log("Result:", NaN === NaN);
console.log("Reason: NaN is spec-defined to not be equal to any value, including itself.\n");

// Q7
console.log("Q7: [] + []");
console.log("Result: '" + ([] + []) + "'");
console.log("Reason: Array to primitive coercion produces empty strings '' + '' = ''.\n");

// Q8
console.log("Q8: +'', +'abc', +true");
console.log("Result:", +"", +"abc", +true);
console.log("Reason: +'' is 0, +'abc' is NaN, and +true is 1.\n");

// Q9
console.log("Q9: 'b' + 'a' + +'a' + 'a'");
console.log("Result:", "b" + "a" + +"a" + "a");
console.log("Reason: +'a' produces NaN, which string concatenates to 'baNaNa'.\n");

// Q10
console.log("Q10: console.log(a); var a = 10;");
var a;
console.log("Result:", a);
a = 10;
console.log("Reason: var declaration is hoisted and initialized as undefined.\n");

// Q11
console.log("Q11: let x = 10; { let x = 20; } console.log(x);");
let x = 10;
{
  let x = 20;
}
console.log("Result:", x);
console.log("Reason: Inner x is blocked-scoped; outer x remains 10.\n");

// Q12
console.log("Q12: typeof undeclaredVariable");
console.log("Result:", typeof undeclaredVariable);
console.log("Reason: The typeof operator has special safety handling for undeclared identifiers.\n");

// Q13
console.log("Q13: null ?? 'A', 0 ?? 'B', 0 || 'C'");
console.log("Result:", null ?? "A", 0 ?? "B", 0 || "C");
console.log("Reason: ?? checks only null/undefined (retains 0); || checks any falsy (replaces 0).\n");

// Q14
console.log("Q14: 3 > 2 > 1");
console.log("Result:", 3 > 2 > 1);
console.log("Reason: Evaluated left to right: (3 > 2) is true, then (true > 1) -> (1 > 1) -> false.\n");

// Q15
console.log("Q15: for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);");
console.log("Result will print: 3, 3, 3 (asynchronous event loop shares the same var i binding).\n");

// Q16
console.log("Q16: Boolean('false') + ' ' + Boolean(0)");
console.log("Result:", Boolean("false") + " " + Boolean(0));
console.log("Reason: Non-empty string 'false' is truthy (true); number 0 is falsy (false).\n");

// Q17
console.log("Q17: sayHi(); var sayHi = function() { console.log('Hi'); };");
console.log("Result: TypeError: sayHi is not a function");
console.log("Reason: var sayHi is hoisted as undefined. Calling undefined() throws TypeError.\n");

// Q18
console.log("Q18: [] == false, !![]");
console.log("Result:", [] == false, ![]);
console.log("Reason: [] == false coerces [] to '' then 0, and false to 0 (0 == 0 is true). But in Boolean context, [] is truthy, so !![] is true.\n");
