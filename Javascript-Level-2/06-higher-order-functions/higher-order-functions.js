/**
 * 🔝 Module 6: Higher-Order Functions
 * 
 * HOFs accept functions as arguments, return functions, or both.
 * Core array methods: map, filter, reduce, find, some, every.
 */

console.log("--- 1. Function Accepting and Returning Functions ---");
function withLogging(fn) {
  return function(...args) {
    console.log(`[EXEC] Calling function with args:`, args);
    const result = fn(...args);
    console.log(`[EXEC] Returned:`, result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(5, 7);

console.log("\n--- 2. Array HOF Pipeline ---");
const products = [
  { id: 1, name: "Mechanical Keyboard", price: 3000, inStock: true },
  { id: 2, name: "Wireless Mouse", price: 1200, inStock: false },
  { id: 3, name: "Gaming Headset", price: 2500, inStock: true },
  { id: 4, name: "USB-C Hub", price: 1500, inStock: true },
];

const totalInStockPrice = products
  .filter(p => p.inStock)             // Keep only in-stock
  .map(p => p.price)                  // Extract prices: [3000, 2500, 1500]
  .reduce((total, p) => total + p, 0); // Sum up

console.log("Total value of in-stock items:", totalInStockPrice); // 7000
