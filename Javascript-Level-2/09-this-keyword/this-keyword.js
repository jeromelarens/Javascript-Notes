/**
 * 👉 Module 9: The 'this' Keyword
 * 
 * Rules of 'this':
 * 1. Default Binding (plain call) -> undefined in strict mode / global in sloppy mode
 * 2. Implicit Binding (method call) -> object before dot
 * 3. Explicit Binding (call, apply, bind) -> specified object
 * 4. new Binding -> newly created instance
 * 5. Arrow Function -> lexical this from enclosing scope
 */

"use strict";

console.log("--- 1. Implicit Binding (Method Call) ---");
const user = {
  name: "Arun",
  greet() {
    return `Hello, I am ${this.name}`;
  }
};
console.log(user.greet()); // Hello, I am Arun

console.log("\n--- 2. Losing 'this' when Method is Extracted ---");
const detachedGreet = user.greet;
try {
  detachedGreet(); // In strict mode, this is undefined -> TypeError!
} catch (err) {
  console.log("Extracted method call caught:", err.name, "-", err.message);
}

console.log("\n--- 3. Fixing Lost 'this' with bind or Arrow Function ---");
const boundGreet = user.greet.bind(user);
console.log("Bound greet: ", boundGreet());

const arrowWrapper = () => user.greet();
console.log("Arrow wrapper:", arrowWrapper());

console.log("\n--- 4. Arrow Functions and 'this' ---");
const timer = {
  label: "Timer #1",
  start() {
    // Arrow function preserves lexical 'this' from start() method
    setTimeout(() => {
      console.log("Arrow preserved this.label:", this.label);
    }, 10);
  }
};
timer.start();
