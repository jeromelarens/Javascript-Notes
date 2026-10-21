/**
 * 🔌 Project 3: Express-Style Middleware Runner
 * 
 * Demonstrates:
 * - Higher-order functions (use, middleware factories)
 * - Closures (configuration state)
 * - Recursive dispatch driving the next() chain
 * - Early termination / guard clauses
 */

"use strict";

function createApp() {
  const stack = [];

  return {
    use(fn) {
      stack.push(fn);
      return this; // enables method chaining
    },

    run(ctx) {
      let index = -1;

      function dispatch(i) {
        if (i <= index) throw new Error("next() called multiple times");
        index = i;

        const fn = stack[i];
        if (!fn) return;

        fn(ctx, () => dispatch(i + 1)); // next() invokes next middleware recursively
      }

      dispatch(0);
      return ctx;
    },
  };
}

// ---------- Middleware Factories (Closures) ----------
const logger = (label) => (ctx, next) => {
  console.log(`[${label}] Incoming: ${ctx.method} ${ctx.path}`);
  next();
};

const auth = (allowedRole) => (ctx, next) => {
  if (ctx.user?.role !== allowedRole) {
    ctx.status = 403;
    ctx.body = "Forbidden: Access Denied";
    console.log(`[AUTH] Blocked access for role '${ctx.user?.role ?? "none"}'`);
    return; // stops the chain early!
  }
  next();
};

const handler = (ctx) => {
  ctx.status = 200;
  ctx.body = `Welcome ${ctx.user.name}`;
};

console.log("==================================================");
console.log("🔌 MIDDLEWARE RUNNER SIMULATION");
console.log("==================================================");

const app = createApp();
app.use(logger("REQ")).use(auth("admin")).use(handler);

console.log("\n--- Request 1: Admin User ---");
const result1 = app.run({ method: "GET", path: "/admin", user: { name: "Arun", role: "admin" } });
console.log("Response:", result1);

console.log("\n--- Request 2: Unauthorized Guest ---");
const result2 = app.run({ method: "GET", path: "/admin", user: { name: "Ravi", role: "guest" } });
console.log("Response:", result2);
console.log("==================================================\n");

module.exports = { createApp, logger, auth, handler };
