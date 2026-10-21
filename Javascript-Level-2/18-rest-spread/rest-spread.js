/**
 * 🌊 Module 18: Rest Parameters and Spread Syntax
 * 
 * Rest collects values into an array/object.
 * Spread expands an iterable/object into elements/properties.
 */

console.log("--- 1. Rest in Function Parameters & Destructuring ---");
function logTeam(lead, ...members) {
  console.log("Team Lead:", lead);
  console.log("Members:  ", members);
}
logTeam("Arun", "Divya", "Karthik", "Priya");

const [firstNum, ...remainingNums] = [10, 20, 30, 40];
console.log("firstNum:     ", firstNum);
console.log("remainingNums:", remainingNums);

console.log("\n--- 2. Spread in Arrays & Function Calls ---");
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];
const allFruits = [...fruits1, ...fruits2];
console.log("Combined:", allFruits);

const numbers = [4, 9, 2, 15, 7];
console.log("Math.max with spread:", Math.max(...numbers)); // 15

console.log("\n--- 3. Spread in Objects & Shallow Copy Alert ---");
const baseConfig = { host: "localhost", port: 3000, theme: "dark" };
const userConfig = { port: 8080 }; // overrides port
const finalConfig = { ...baseConfig, ...userConfig };
console.log("Merged config:", finalConfig);

// Shallow copy warning
const nestedObj = { user: { name: "Arun" } };
const shallowCopy = { ...nestedObj };
shallowCopy.user.name = "Kumar";
console.log("Original nested name was mutated!", nestedObj.user.name); // Kumar
console.log("For true deep copy, use: structuredClone(obj)");
