/**
 * 🧬 Module 2: Data Types
 * 
 * JavaScript has 7 primitive types and 1 non-primitive type (Object).
 * Primitives: String, Number, BigInt, Boolean, Undefined, Null, Symbol
 * Non-Primitives: Object (Arrays, Functions, Dates, plain Objects)
 */

console.log("--- 1. The 7 Primitive Types ---");
const str = "Hello JavaScript";             // String
const num = 42;                             // Number (includes NaN, Infinity)
const big = 9007199254740993n;               // BigInt
const bool = true;                          // Boolean
let unassigned;                             // Undefined
const emptyVal = null;                      // Null
const sym = Symbol("uniqueKey");            // Symbol

console.log("String:   ", typeof str, "->", str);
console.log("Number:   ", typeof num, "->", num);
console.log("BigInt:   ", typeof big, "->", big);
console.log("Boolean:  ", typeof bool, "->", bool);
console.log("Undefined:", typeof unassigned, "->", unassigned);
console.log("Null:     ", typeof emptyVal, "->", emptyVal, "(Note: typeof null is 'object' due to historical bug)");
console.log("Symbol:   ", typeof sym, "->", sym.toString());

console.log("\n--- 2. Non-Primitive: Object, Array, Function ---");
const user = { name: "Arun", age: 21 };
const skills = ["JavaScript", "Node.js", "React"];
const greet = function() { return "Hi!"; };

console.log("Object:   ", typeof user, "->", user);
console.log("Array:    ", typeof skills, "-> Array.isArray?", Array.isArray(skills));
console.log("Function: ", typeof greet, "->", greet());

console.log("\n--- 3. Primitive (By Value) vs Non-Primitive (By Reference) ---");
// Primitives are copied by value
let a = 10;
let b = a;
b = 20;
console.log("Primitive copy by value: a =", a, ", b =", b); // a remains 10

// Objects are copied by reference
const obj1 = { score: 100 };
const obj2 = obj1; // Copies memory reference
obj2.score = 500;
console.log("Object copy by reference: obj1.score =", obj1.score, ", obj2.score =", obj2.score); // both 500

console.log("\n--- 4. Floating Point Precision Gotcha ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3 ?", 0.1 + 0.2 === 0.3); // false
const isRoughlyEqual = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
console.log("Safe comparison using Number.EPSILON:", isRoughlyEqual); // true
