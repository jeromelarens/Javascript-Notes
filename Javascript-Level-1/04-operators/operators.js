/**
 * ➕ Module 4: Operators
 * 
 * Arithmetic, Assignment, Comparison, Logical, Increment,
 * Ternary, Nullish Coalescing (??), Optional Chaining (?.)
 */

console.log("--- 1. Arithmetic Operators ---");
const a = 10;
const b = 3;
console.log("10 + 3 =", a + b);
console.log("10 - 3 =", a - b);
console.log("10 * 3 =", a * b);
console.log("10 / 3 =", a / b);
console.log("10 % 3 =", a % b);  // Remainder
console.log("2 ** 3 =", 2 ** 3); // Exponentiation

console.log("\n--- 2. Increment & Decrement ---");
let post = 5;
console.log("post++ returns:", post++, "and then becomes:", post);
let pre = 5;
console.log("++pre returns:", ++pre, "directly");

console.log("\n--- 3. Logical Operators: &&, ||, ! ---");
// AND (&&): returns first falsy value, or last truthy if all truthy
console.log("true && 'Apple'  ->", true && "Apple");
console.log("0 && 'Apple'     ->", 0 && "Apple");

// OR (||): returns first truthy value, or last falsy if all falsy
console.log("false || 'Guest' ->", false || "Guest");
console.log("'' || 'Default'  ->", "" || "Default");
console.log("'Arun' || 'Guest'->", "Arun" || "Guest");

// NOT (!)
console.log("!true  ->", !true);
console.log("!0     ->", !0);

console.log("\n--- 4. Nullish Coalescing Operator (??) ---");
// ?? only falls back on null or undefined! Unlike ||, it preserves 0 and ""
const userCount = 0;
console.log("userCount || 10  ->", userCount || 10, "(unexpected: 0 was replaced)");
console.log("userCount ?? 10  ->", userCount ?? 10, "(correct: 0 is preserved)");

const missingName = null;
console.log("missingName ?? 'Anonymous' ->", missingName ?? "Anonymous");

console.log("\n--- 5. Optional Chaining (?.) ---");
const user = {
  id: 101,
  profile: {
    city: "Chennai"
  }
};

console.log("user.profile?.city ->", user.profile?.city);
console.log("user.address?.city ->", user.address?.city, "(returns undefined, does NOT throw)");

console.log("\n--- 6. Ternary Operator ---");
const age = 20;
const voteStatus = age >= 18 ? "Eligible to vote" : "Not eligible";
console.log("Ternary result:", voteStatus);
