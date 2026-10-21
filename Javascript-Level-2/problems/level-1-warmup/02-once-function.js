/**
 * Problem 2: once(fn) — Run a Function Only One Time
 * Logic: Remember whether it ran and what it returned via closures.
 */

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const initializeDatabase = once((dbName) => {
  console.log(`[BOOT] Database ${dbName} connected successfully!`);
  return { status: "connected", db: dbName };
});

console.log(initializeDatabase("Production_DB")); // Runs and logs
console.log(initializeDatabase("Production_DB")); // Returns cached result silently
console.log(initializeDatabase("Production_DB"));
