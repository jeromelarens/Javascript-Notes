/**
 * 📦 Module 1: Variables
 * 
 * In JavaScript, variables are named bindings used to store or reference values.
 * Thunglish: Variable-na oru value-ai access panna oru labelled box maadhiri.
 */

console.log("--- 1. Declaring Variables ---");
var userName = "Arun";
let userAge = 21;
const userCountry = "India";

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Country:", userCountry);

console.log("\n--- 2. Reassignment and Redeclaration ---");
// var allows both reassignment and redeclaration in same scope
var score = 10;
score = 20;       // Reassignment: OK
var score = 30;   // Redeclaration: OK
console.log("var score:", score);

// let allows reassignment but NOT redeclaration
let points = 50;
points = 60;      // Reassignment: OK
// let points = 70; // ❌ SyntaxError: Identifier 'points' has already been declared
console.log("let points:", points);

// const allows neither reassignment nor redeclaration
const maxLimit = 100;
// maxLimit = 120; // ❌ TypeError: Assignment to constant variable
console.log("const maxLimit:", maxLimit);

console.log("\n--- 3. const and Object Mutation ---");
// IMPORTANT: const protects the binding, NOT the internal properties of an object!
const student = {
  name: "Arun",
  role: "Student"
};

student.name = "Kumar";       // ✅ Allowed: property mutation
student.city = "Chennai";     // ✅ Allowed: adding property
console.log("Mutated student object:", student);

// To prevent object mutation completely, use Object.freeze()
const lockedStudent = Object.freeze({
  name: "Divya",
  role: "Engineer"
});
// lockedStudent.name = "Priya"; // In strict mode throws TypeError; otherwise fails silently
console.log("Locked student:", lockedStudent);

console.log("\n--- 4. Temporal Dead Zone (TDZ) ---");
// Accessing let/const before initialization line throws ReferenceError
try {
  // console.log(tdzVar); // Cannot access before initialization
  let tdzVar = "I am ready now";
  console.log("tdzVar after init:", tdzVar);
} catch (err) {
  console.error("TDZ Caught Error:", err.message);
}
