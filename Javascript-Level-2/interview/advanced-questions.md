# 🎤 JavaScript Level 2 — 30 Advanced Interview Questions & Answers

> **Senior-Level Answer Formula:** Definition → Code Example → Real-world Use → Gotchas.

---

### 🔥 Section A — Core Concepts

#### 1. What is a closure? Give a real-world use case.
**Answer:** A closure is a function bundled with references to its surrounding lexical environment. It allows an inner function to access an outer function's scope even after the outer function has returned.
- **Use Cases:** Private state (encapsulating sensitive variables), function factories, memoization, event handlers, and utilities like `once()` and `debounce()`.

---

#### 2. Explain lexical scope vs closure vs scope chain.
**Answer:**
- **Lexical scope:** Determines variable accessibility based on *where code is written*.
- **Scope chain:** The hierarchy of parent lexical environments searched when resolving an identifier.
- **Closure:** The mechanism by which a function *keeps alive* that lexical environment after the outer function finishes.

---

#### 3. How is `this` determined?
**Answer:** By the call site invocation pattern (with precedence):
1. `new` binding: points to the newly instantiated object.
2. Explicit binding: `call`, `apply`, `bind` explicitly set `this`.
3. Implicit binding: the object left of the dot at call time (`obj.method()`).
4. Default binding: `undefined` in strict mode; global object in sloppy mode.
*Exception:* Arrow functions do not bind their own `this`; they inherit it lexically from the enclosing scope.

---

#### 4. Difference between `call`, `apply`, and `bind`?
**Answer:**
- `call(thisArg, a, b)` invokes the function immediately with comma-separated arguments.
- `apply(thisArg, [a, b])` invokes the function immediately with arguments in an array.
- `bind(thisArg, a, b)` does not invoke the function; it returns a new function with `this` and optional preset arguments fixed permanently.

---

#### 5. What is a higher-order function? Name built-in examples.
**Answer:** A higher-order function is any function that accepts one or more functions as arguments, returns a function, or both.
- Built-in examples: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `sort`, `setTimeout`.

---

#### 6. What is the difference between currying and partial application?
**Answer:**
- **Currying:** Converts a function with $N$ arguments into a chain of $N$ unary functions (each taking exactly 1 argument): `f(a, b, c) -> f(a)(b)(c)`.
- **Partial application:** Fixes *some* arguments ahead of time and returns a function expecting the remaining arguments (can accept multiple arguments at once).

---

#### 7. What is a pure function? Why does it matter?
**Answer:** A function that:
1. Always returns the same output for identical inputs (deterministic).
2. Produces zero side effects (does not mutate inputs, alter external variables, or perform unmanaged I/O).
- *Benefits:* Referentially transparent, easy to unit test, cacheable, and concurrency-safe.

---

#### 8. What is memoization and what are its pitfalls?
**Answer:** Memoization is an optimization technique that caches return values based on input arguments.
- *Pitfalls:* Only works for pure functions; causes memory growth if unbounded (needs LRU eviction); key generation via `JSON.stringify` has serialization overhead.

---

#### 9. What is function composition? `compose` vs `pipe`?
**Answer:** Function composition is chaining multiple functions so the output of one feeds directly into the input of the next.
- `compose`: Evaluates from right to left: `f(g(h(x)))`.
- `pipe`: Evaluates from left to right: `h(x) -> g -> f`.

---

#### 10. What is an IIFE and when is it useful?
**Answer:** An Immediately Invoked Function Expression runs immediately upon definition. It prevents polluting global scope and enables the module pattern.

---

#### 11. What is the difference between rest parameters and the spread operator?
**Answer:** Both use `...`:
- **Rest:** *Collects* multiple elements into a single array (parameters, destructuring).
- **Spread:** *Expands* an iterable into individual elements (calls, literals).

---

#### 12. How does `arguments` differ from rest parameters?
**Answer:**
- `arguments` is an array-like object (lacks array methods like `.map`) and is not available in arrow functions.
- Rest parameters create real arrays and are standard in modern ES6+.

---

#### 13. What is the call stack?
**Answer:** A LIFO (Last In, First Out) stack data structure maintained by the JavaScript engine to track execution contexts of running functions.

---

#### 14. What are the phases of an execution context?
**Answer:**
1. **Creation phase:** Allocates memory, hoists declarations (`var` as `undefined`, functions fully, `let`/`const` into TDZ), sets `this` and outer environment references.
2. **Execution phase:** Runs code line by line, assigns values, and executes functions.

---

#### 15. Why are functions "first-class citizens"?
**Answer:** They can be treated like any standard data value: assigned to variables, passed as arguments, returned from other functions, and stored in arrays or objects.

---

### 🧗 Section B — Deeper Questions

#### 16. Why does `this` become `undefined` when passing `obj.method` as a callback?
**Answer:** Passing `obj.method` extracts the reference to the function without preserving the object context. When called later by the caller without an object prefix, default binding applies (`undefined` in strict mode). Fix with `.bind(obj)` or an arrow function wrapper.

---

#### 17. Can arrow functions be constructors?
**Answer:** No. Arrow functions lack a `[[Construct]]` internal method, have no prototype property, and cannot be invoked with `new`.

---

#### 18. What is the difference between function declaration and function expression hoisting?
**Answer:** Function declarations are hoisted completely with their function body. Function expressions follow variable hoisting: with `var` they are `undefined` initially (causing `TypeError` if called early), and with `let`/`const` they remain in the TDZ (`ReferenceError`).

---

#### 19. How do closures cause memory leaks?
**Answer:** When an outer function finishes, variables referenced by an active inner closure cannot be garbage collected. If large data structures or unremoved DOM event listeners are retained, memory leaks occur.

---

#### 20. Why does `for (var i = 0; i < 3; i++) setTimeout` print 3, 3, 3?
**Answer:** `var` is function-scoped. All three timer callbacks share the exact same `i` binding. By the time the event loop executes the timer callbacks, the loop has completed and `i` equals 3. Using `let` fixes this because each loop iteration receives its own distinct block binding.

---

#### 21. How are default parameters evaluated?
**Answer:** Default parameter expressions are evaluated at call time, not at parse time. If an argument is missing or explicitly passed as `undefined`, the default expression is evaluated.

---

#### 22. What does `fn.length` return?
**Answer:** The number of formal parameters up to the first parameter with a default value or rest parameter.

---

#### 23. How do you implement `Function.prototype.bind`?
**Answer:** Return a new function that invokes the original using `.apply(context, [...presetArgs, ...laterArgs])`.

---

#### 24. What is the difference between debounce and throttle?
**Answer:**
- **Debounce:** Delays execution until a specified delay has passed since the *last* invocation (search box).
- **Throttle:** Guarantees execution at most once every specified time interval (scroll/resize listener).

---

#### 25. What is the callback hell solution hierarchy?
**Answer:** Modular named functions → Promises → `async`/`await` → Functional pipelines.

---

#### 26. Is recursion always slower than iteration in JavaScript?
**Answer:** In V8 and standard JavaScript runtimes without tail-call optimization, recursion adds call stack overhead and risks `RangeError: Maximum call stack size exceeded` for large inputs. For deeply nested structures, loops with an explicit stack are safer.

---

#### 27. What is a function factory?
**Answer:** A higher-order function that configures and returns specialized functions using closures (e.g. `createValidator(schema)`).

---

#### 28. How do pure functions assist in backend development?
**Answer:** Business calculations (tax, discount, authorizations) written as pure functions can be unit-tested without mock databases or external servers.

---

#### 29. What is the event loop ordering rule?
**Answer:** Synchronous call stack code runs first to completion. Then, the entire microtask queue (Promises, `queueMicrotask`) is drained. Finally, the next task in the macrotask/task queue (`setTimeout`, I/O) is processed.

---

#### 30. How does Express middleware use closures and HOFs?
**Answer:** Middleware functions `(req, res, next)` close over their configuration settings. Middleware factories return middleware handlers, and `next()` is a callback that advances execution through an array of handlers recursively.
