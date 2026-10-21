/**
 * 🎯 JavaScript Level 2: 20 Output Prediction Challenges
 * 
 * Run with: node interview/output-prediction.js
 */

console.log("===============================================================");
console.log("🎯 JavaScript Level 2: 20 Output Prediction Challenges");
console.log("===============================================================\n");

// Q1: Closure Counter
console.log("--- Q1: Independent Closure State ---");
function outer() {
  let n = 0;
  return () => ++n;
}
const a = outer();
const b = outer();
console.log("Result:", a(), a(), b()); // 1 2 1
console.log("Reason: Each invocation of outer() creates its own isolated scope environment.\n");

// Q2: var in loops
console.log("--- Q2: var in loops ---");
console.log("for (var i = 1; i <= 3; i++) setTimeout(() => console.log(i), 0);");
console.log("Result: 4, 4, 4 (all callbacks share one single var i binding).\n");

// Q3: let in loops
console.log("--- Q3: let in loops ---");
console.log("for (let i = 1; i <= 3; i++) setTimeout(() => console.log(i), 0);");
console.log("Result: 1, 2, 3 (each iteration gets a distinct block-scoped binding).\n");

// Q4: Shared var in closures array
console.log("--- Q4: Shared var in array of closures ---");
function createFns() {
  var fns = [];
  for (var i = 0; i < 3; i++) fns.push(() => i);
  return fns;
}
console.log("Result:", createFns().map(f => f())); // [3, 3, 3]
console.log("Reason: All 3 arrow functions close over the exact same 'i' binding.\n");

// Q5: Lost this
console.log("--- Q5: Lost this upon extraction ---");
const user = {
  name: "Arun",
  greet() { return this?.name; },
};
const fn = user.greet;
console.log("Result:", user.greet(), "|", fn()); // Arun | undefined
console.log("Reason: user.greet() has 'user' left of dot; fn() has no receiver (default binding).\n");

// Q6: Arrow function as method
console.log("--- Q6: Arrow function as method in Node module ---");
const obj = {
  name: "Arun",
  regular() { return this.name; },
  arrow: () => this?.name,
};
console.log("Result:", obj.regular(), "|", obj.arrow()); // Arun | undefined
console.log("Reason: Arrow functions inherit this from enclosing module scope (module.exports).\n");

// Q7: bind is permanent
console.log("--- Q7: bind is permanent ---");
function show() { return this.n; }
const bound = show.bind({ n: 1 });
console.log("Result:", bound.call({ n: 2 })); // 1
console.log("Reason: Subsequent call/apply cannot override an already bound this.\n");

// Q8: Default parameters and null
console.log("--- Q8: Default parameters and null ---");
function f(x = 10) { return x; }
console.log("Result:", f(), f(undefined), f(null), f(0)); // 10 10 null 0
console.log("Reason: Defaults trigger only on undefined, not on null or 0.\n");

// Q9: Function declaration hoisting over var
console.log("--- Q9: Function declaration hoisting over var ---");
console.log("typeof foo before line:", typeof foo);
var foo = 1;
function foo() {}
console.log("Reason: Function declarations are registered before var during creation phase.\n");

// Q10: Function expression hoisting
console.log("--- Q10: Function expression hoisting ---");
console.log("typeof sayHi before init:", typeof sayHi);
var sayHi = function() {};
console.log("typeof sayHi after init: ", typeof sayHi); // function
console.log("Reason: var sayHi is hoisted with value undefined.\n");

// Q11: Event loop order
console.log("--- Q11: Event loop ordering rule ---");
console.log("Order: Sync A -> Sync D -> Microtask C (Promise) -> Macrotask B (setTimeout)\n");

// Q12: Curried addition
console.log("--- Q12: Curried addition ---");
const curriedAdd = a => b => c => a + b + c;
console.log("curriedAdd(1)(2)(3) =", curriedAdd(1)(2)(3)); // 6\n

// Q13: Implicit global in sloppy mode
console.log("--- Q13: var a = b = 5 ---");
console.log("b becomes an undeclared global variable; a is scoped to the function.\n");

// Q14: ASI Trap
console.log("--- Q14: ASI Trap ---");
function asiTrap() {
  return
  { a: 1 };
}
console.log("asiTrap() =", asiTrap()); // undefined\n

// Q15: Call stack order
console.log("--- Q15: Call stack frames ---");
console.log("Function a calls b. b runs and finishes (logs 'b'), then a logs 'a'.\n");

// Q16: Named function expression scope
console.log("--- Q16: Named function expression internal name ---");
const nfe = function g() { return typeof g; };
console.log("Result: nfe() =", nfe(), "| typeof g =", typeof g); // function | undefined\n

// Q17: map(parseInt)
console.log("--- Q17: ['1', '2', '3'].map(parseInt) ---");
console.log("Result:", ["1", "2", "3"].map(parseInt)); // [1, NaN, NaN]
console.log("Reason: map passes (element, index); parseInt uses index as radix base!\n");

// Q18: Rest and spread
console.log("--- Q18: Rest length & Math.max(...[]) ---");
function fRest(a, ...rest) { return rest.length; }
console.log("Result:", fRest(1, 2, 3), [..."hi"], Math.max(...[])); // 2 ['h', 'i'] -Infinity\n

// Q19: this in setTimeout
console.log("--- Q19: this in setTimeout callback ---");
console.log("Arrow function keeps lexical this; standard function in Node gets Timeout object.\n");

// Q20: Pure vs Impure (sort mutates)
console.log("--- Q20: Array.prototype.sort mutates in place ---");
const arr = [3, 1, 2];
const sorted = arr.sort();
console.log("Result: arr === sorted?", arr === sorted, "| arr =", arr); // true | [1, 2, 3]
