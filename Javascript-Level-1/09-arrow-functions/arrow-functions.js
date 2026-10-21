/**
 * 🧩 Module 9: Arrow Functions (ES6)
 * 
 * Syntax variants, implicit returns, returning object literals,
 * higher-order methods, and differences in 'this' binding.
 */

console.log("--- 1. Syntax Variations ---");
// Full block syntax
const multiply = (a, b) => {
  return a * b;
};

// Implicit return (single expression without curly braces)
const square = n => n * n;
const sayHello = () => "Hello from Arrow Function!";

console.log("multiply(3, 4) =", multiply(3, 4));
console.log("square(5) =", square(5));
console.log("sayHello() =", sayHello());

console.log("\n--- 2. Returning Object Literal Implicitly ---");
// Must wrap curly braces in parentheses!
const createProfile = (username, role) => ({
  username,
  role,
  createdAt: new Date().getFullYear()
});
console.log("Profile:", createProfile("arun99", "Admin"));

console.log("\n--- 3. Arrow Functions with Array Methods ---");
const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:  ", evens);
console.log("Sum:    ", sum);

console.log("\n--- 4. 'this' Lexical Scoping Difference ---");
const regularObj = {
  name: "Regular Method",
  greet: function() {
    return `Hello from ${this.name}`; // 'this' refers to regularObj
  }
};
console.log(regularObj.greet());

const arrowObj = {
  name: "Arrow Method",
  greet: () => {
    // In arrow functions, 'this' is inherited from surrounding lexical scope (e.g. global/module), NOT arrowObj!
    return `this is undefined or global: ${typeof this.name}`;
  }
};
console.log(arrowObj.greet());
console.log("Rule: Do NOT use arrow functions as object methods if you rely on 'this'!");
