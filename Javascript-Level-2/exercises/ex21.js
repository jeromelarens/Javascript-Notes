/**
 * Exercise 21: The 5 'this' Invocations
 * Prompt: Demonstrate this in: plain call, method call, new, arrow function, and call.
 */

"use strict";

// 1. Plain call (default binding)
function plainCall() {
  return this; // undefined in strict mode
}
console.log("1. Plain call this:      ", plainCall());

// 2. Method call (implicit binding)
const service = {
  name: "AuthService",
  getName() { return this.name; }
};
console.log("2. Method call this.name: ", service.getName());

// 3. new operator (constructor binding)
function Car(model) {
  this.model = model;
}
const myCar = new Car("Tesla");
console.log("3. new instance model:    ", myCar.model);

// 4. Arrow function (lexical this)
const component = {
  id: "UI_CARD",
  init() {
    return () => `Component ID: ${this.id}`;
  }
};
console.log("4. Arrow function lexical:", component.init()());

// 5. call (explicit binding)
function displayRole() {
  return `Role: ${this.role}`;
}
console.log("5. Explicit call binding: ", displayRole.call({ role: "Lead Architect" }));
