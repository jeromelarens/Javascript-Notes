/**
 * Exercise 16: Fixing Extracted Method this Binding
 * Prompt: Create an object method that loses this when extracted; fix it with bind.
 */

const accountHolder = {
  name: "Arun",
  getBalance() {
    return `${this.name} has balance ₹25,000`;
  }
};

// Extracted method loses context
const unBoundFn = accountHolder.getBalance;
try {
  unBoundFn(); // In strict mode throws or yields undefined
} catch (e) {
  console.log("Unbound call error:", e.message);
}

// Fixed using bind
const safeFn = accountHolder.getBalance.bind(accountHolder);
console.log("Fixed via bind:", safeFn()); // Arun has balance ₹25,000
