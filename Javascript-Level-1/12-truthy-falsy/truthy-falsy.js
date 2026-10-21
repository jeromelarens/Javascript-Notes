/**
 * 🎭 Module 12: Truthy and Falsy Values
 * 
 * In JavaScript, every value is evaluated as either truthy or falsy
 * in a Boolean context (such as an if condition).
 */

console.log("--- 1. The 8 Falsy Values in JavaScript ---");
// 1. false
// 2. 0
// 3. -0
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN

const falsyList = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyList.forEach((val, index) => {
  console.log(`${index + 1}. String representation: "${String(val)}" -> Boolean:`, Boolean(val));
});

console.log("\n--- 2. Surprising Truthy Values (Watch Out!) ---");
// Anything NOT in the 8 falsy list is TRUTHY!
console.log("Boolean('0')        ->", Boolean("0"), "      (non-empty string is truthy!)");
console.log("Boolean('false')    ->", Boolean("false"), "  (non-empty string is truthy!)");
console.log("Boolean([])         ->", Boolean([]), "       (empty array is an object, hence truthy!)");
console.log("Boolean({})         ->", Boolean({}), "       (empty object is truthy!)");
console.log("Boolean(-1)         ->", Boolean(-1), "       (non-zero number is truthy!)");
console.log("Boolean(Infinity)   ->", Boolean(Infinity));

console.log("\n--- 3. Proper Way to Check Empty Arrays and Objects ---");
const emptyArray = [];
const emptyObj = {};

// WRONG: if (emptyArray) will always be true!
// RIGHT:
console.log("Is array empty? ->", emptyArray.length === 0);
console.log("Is object empty?->", Object.keys(emptyObj).length === 0);

console.log("\n--- 4. Short-Circuiting Pitfall: || vs ?? ---");
const pageLimit = 0; // 0 is a valid page number or limit!
const fallbackWithOr = pageLimit || 20; // 0 is falsy, so falls back to 20!
const fallbackWithNullish = pageLimit ?? 20; // Only falls back on null/undefined!

console.log("Using ||: pageLimit || 20 ->", fallbackWithOr, "(Bug: replaced valid 0 with 20)");
console.log("Using ??: pageLimit ?? 20 ->", fallbackWithNullish, "(Correct: preserved 0)");

console.log("\n--- 5. The Double NOT (!!) Operator ---");
console.log("!!'developer' ->", !!"developer");
console.log("!!null        ->", !!null);
console.log("!!0           ->", !!0);
