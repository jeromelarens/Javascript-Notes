/**
 * 🧪 Module 15: Pure Functions and Side Effects
 * 
 * Pure functions:
 * 1. Same input ALWAYS produces same output
 * 2. No side effects (no mutation, no global changes, no unhandled I/O)
 */

console.log("--- 1. Impure Mutation vs Pure Immutability ---");
const cart = ["Apple", "Mango"];

// ❌ Impure: mutates original array argument
function addItemImpure(list, item) {
  list.push(item);
  return list;
}

// ✅ Pure: returns brand new array without touching input
function addItemPure(list, item) {
  return [...list, item];
}

const updatedCart = addItemPure(cart, "Orange");
console.log("Original cart: ", cart);        // ["Apple", "Mango"] (Unchanged!)
console.log("Updated cart:  ", updatedCart); // ["Apple", "Mango", "Orange"]

console.log("\n--- 2. Injecting Side Effects (Making Impure Code Pure) ---");
// Impure because it calls new Date() inside (non-deterministic)
function createReceiptImpure(amount) {
  return { amount, time: new Date().toISOString() };
}

// Pure: time is injected as an explicit argument
function createReceiptPure(amount, timestamp) {
  return { amount, time: timestamp };
}

const fixedDate = new Date("2026-01-01T00:00:00Z").toISOString();
console.log("Pure Receipt:", createReceiptPure(500, fixedDate));
