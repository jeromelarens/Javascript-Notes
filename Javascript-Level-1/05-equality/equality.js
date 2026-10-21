/**
 * 🟰 Module 5: Equality Operators
 * 
 * ==  (Loose equality): performs type coercion before comparison.
 * === (Strict equality): compares value AND type without coercion.
 */

console.log("--- 1. Loose (==) vs Strict (===) Equality ---");
console.log("5 == '5'   ->", 5 == "5", "  (loose: coerces string to number)");
console.log("5 === '5'  ->", 5 === "5", " (strict: different types -> false)");

console.log("false == 0 ->", false == 0);
console.log("false === 0->", false === 0);

console.log("'' == 0    ->", "" == 0);
console.log("'' === 0   ->", "" === 0);

console.log("\n--- 2. null vs undefined ---");
console.log("null == undefined  ->", null == undefined, " (special rule: loosely equal)");
console.log("null === undefined ->", null === undefined, "(different types)");

console.log("\n--- 3. Object Reference Equality ---");
console.log("{} === {} ->", {} === {}, "(distinct references in memory)");
console.log("[] === [] ->", [] === []);

const original = { theme: "dark" };
const refCopy = original;
console.log("original === refCopy ->", original === refCopy, "(point to exact same reference)");

console.log("\n--- 4. NaN Special Equality Rule ---");
console.log("NaN === NaN         ->", NaN === NaN, "(by spec, NaN is never equal to anything)");
console.log("Number.isNaN(NaN)   ->", Number.isNaN(NaN));
console.log("Object.is(NaN, NaN) ->", Object.is(NaN, NaN));
