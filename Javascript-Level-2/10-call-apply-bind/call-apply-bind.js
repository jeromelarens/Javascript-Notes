/**
 * 🧲 Module 10: call(), apply() and bind()
 * 
 * call:  invokes immediately, comma-separated arguments
 * apply: invokes immediately, array of arguments
 * bind:  returns a NEW function with 'this' fixed permanently
 */

console.log("--- 1. call() vs apply() vs bind() ---");
function introduce(city, role) {
  return `${this.name} from ${city}, working as ${role}`;
}

const developer = { name: "Arun" };

// call: comma-separated args
console.log("call(): ", introduce.call(developer, "Chennai", "Fullstack Engineer"));

// apply: array of args
console.log("apply():", introduce.apply(developer, ["Bangalore", "DevOps Engineer"]));

// bind: returns a reusable bound function
const boundIntro = introduce.bind(developer, "Coimbatore");
console.log("bind(): ", boundIntro("Tech Lead"));

console.log("\n--- 2. Method Borrowing ---");
const numbersObj = { 0: 10, 1: 20, 2: 30, length: 3 };
const doubledArray = Array.prototype.map.call(numbersObj, n => n * 2);
console.log("Borrowed Array.prototype.map on object:", doubledArray);

console.log("\n--- 3. Custom Polyfill for bind (myBind) ---");
Function.prototype.myBind = function(context, ...boundArgs) {
  const originalFn = this;
  return function(...laterArgs) {
    return originalFn.apply(context, [...boundArgs, ...laterArgs]);
  };
};

function formatGreeting(salutation, signoff) {
  return `${salutation} ${this.name}! ${signoff}`;
}
const myBoundGreeting = formatGreeting.myBind({ name: "Divya" }, "Vanakkam");
console.log("myBind result:", myBoundGreeting("Nandri."));
