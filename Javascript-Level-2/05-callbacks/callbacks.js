/**
 * 📞 Module 5: Callback Functions
 * 
 * Synchronous vs Asynchronous Callbacks, and Node.js Error-First Conventions.
 */

console.log("--- 1. Synchronous Callback ---");
function processData(items, callback) {
  const result = [];
  for (const item of items) {
    result.push(callback(item));
  }
  return result;
}

const doubled = processData([1, 2, 3], n => n * 2);
console.log("Synchronous callback result:", doubled);

console.log("\n--- 2. Node.js Style Error-First Callback ---");
function fetchUserRecord(id, callback) {
  setTimeout(() => {
    if (!id || id <= 0) {
      return callback(new Error("Invalid User ID provided"));
    }
    // Success: error is null, data is second argument
    callback(null, { id, name: "Arun Kumar", role: "Developer" });
  }, 50);
}

// Valid call
fetchUserRecord(101, (err, user) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("User retrieved:", user);
});

// Invalid call
fetchUserRecord(-1, (err, user) => {
  if (err) {
    console.log("Error-first captured as expected:", err.message);
  }
});
