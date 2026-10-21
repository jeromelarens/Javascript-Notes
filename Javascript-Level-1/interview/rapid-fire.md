# 🎤 JavaScript Level 1 — 25 Rapid-Fire Interview Questions & Answers

> **Interview Formula:** Definition → Example → Gotcha. This 3-step formula gives strong, professional answers!

---

### 1. What is JavaScript?
**Answer:** JavaScript is a high-level, single-threaded, just-in-time (JIT) compiled, dynamically typed, multi-paradigm language. Originally created for the browser, it now powers backend systems (Node.js), mobile applications, and serverless environments.

---

### 2. Is JavaScript statically or dynamically typed?
**Answer:** Dynamically typed. In JavaScript, variables are not bound to a specific type; values have types. A variable declared with `let x = 10` can later hold a string `x = "hello"` at runtime without a compilation error.

---

### 3. What is the difference between `var`, `let`, and `const`?
**Answer:**
- **Scope:** `var` is function-scoped (or global); `let` and `const` are block-scoped (`{}`).
- **Redeclaration:** `var` can be redeclared in the same scope; `let` and `const` cannot.
- **Reassignment:** `var` and `let` can be reassigned; `const` cannot.
- **Hoisting:** `var` is hoisted and initialized as `undefined`. `let` and `const` are hoisted into the Temporal Dead Zone (TDZ) and throw a `ReferenceError` if accessed before initialization.

---

### 4. What are the 7 primitive data types in JavaScript?
**Answer:**
1. `String`
2. `Number`
3. `BigInt`
4. `Boolean`
5. `Undefined`
6. `Null`
7. `Symbol`

---

### 5. What is the difference between `==` and `===`?
**Answer:**
- `==` (Loose equality) compares two values after attempting type coercion if their types differ.
- `===` (Strict equality) compares both value and type without coercion. If types are different, it immediately returns `false`.

---

### 6. What is `NaN`, and how do you test for it reliably?
**Answer:** `NaN` stands for "Not-a-Number", but its `typeof` is `"number"`. It represents an invalid numeric computation (such as `0 / 0` or `Number("abc")`). Because `NaN === NaN` is `false`, you must test for it using `Number.isNaN(value)`.

---

### 7. What is the difference between `null` and `undefined`?
**Answer:**
- `undefined` means a variable has been declared but has not yet been assigned a value (or a function lacks a return).
- `null` represents an explicit, intentional absence of any object value.
- `typeof undefined` is `"undefined"`, while `typeof null` is `"object"` (a historical bug).

---

### 8. What is Hoisting?
**Answer:** Hoisting is the behavior of the JavaScript engine where variable and function declarations are registered into memory during the creation phase of an execution context, before any code executes line by line.

---

### 9. What is Scope? Name the primary scopes in JavaScript.
**Answer:** Scope defines the boundary of visibility and accessibility for variables and functions. The primary types are:
1. **Global Scope:** Accessible everywhere.
2. **Function Scope:** Variables declared inside a function (`var`, `let`, `const`) are confined to it.
3. **Block Scope:** Variables declared with `let` and `const` inside `{}` are accessible only within that block.
4. **Module Scope:** Scope within ES modules.

---

### 10. What is a Closure?
**Answer:** A closure is the combination of a function bundled together with references to its lexical environment. It allows an inner function to access an outer function's scope even after the outer function has returned and exited the call stack.

---

### 11. What is the difference between a Function Declaration and an Arrow Function?
**Answer:**
- **Syntax:** Arrow functions provide a concise syntax with optional implicit returns.
- **`this` Binding:** Arrow functions do not have their own `this`; they inherit `this` lexically from their enclosing context.
- **`arguments` Object:** Arrow functions lack an `arguments` object (use rest parameters instead).
- **Constructors:** Arrow functions cannot be called with `new`.

---

### 12. What is the Temporal Dead Zone (TDZ)?
**Answer:** TDZ is the period between entering a block scope and the actual line where a `let` or `const` variable is declared and initialized. Referencing the variable inside this zone triggers a `ReferenceError`.

---

### 13. What are the 8 falsy values in JavaScript?
**Answer:**
`false`, `0`, `-0`, `0n`, `""` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy.

---

### 14. What is the difference between `||` and `??`?
**Answer:**
- `||` (Logical OR) returns the right-hand operand if the left operand is *any* falsy value (including `0`, `false`, `""`).
- `??` (Nullish Coalescing) returns the right-hand operand *only* if the left operand is `null` or `undefined`.

---

### 15. What is Type Coercion?
**Answer:** Type coercion is the automatic or implicit conversion of values from one data type to another by JavaScript during operations (e.g., `"5" + 2 === "52"` or `"5" - 2 === 3`).

---

### 16. What is the difference between `for...in` and `for...of`?
**Answer:**
- `for...in` iterates over all enumerable property **keys** (names) of an object.
- `for...of` iterates over the **values** of an iterable object (arrays, strings, maps, sets).

---

### 17. What is a Callback Function?
**Answer:** A callback function is a function passed as an argument to another function, intended to be invoked at a later time or once an operation finishes.

---

### 18. What is an IIFE (Immediately Invoked Function Expression)?
**Answer:** An IIFE is a JavaScript function that runs as soon as it is defined: `(function() { ... })();`. It is primarily used to create a private scope and prevent variable pollution of the global namespace.

---

### 19. Can an object declared with `const` be mutated?
**Answer:** Yes. `const` prevents reassigning the variable identifier to another object reference. The properties within the object can be added, updated, or removed freely unless locked with `Object.freeze()`.

---

### 20. What does `typeof []` return, and how do you properly verify an array?
**Answer:** `typeof []` returns `"object"`. To accurately check if a value is an array, use `Array.isArray(value)`.

---

### 21. What is Optional Chaining (`?.`)?
**Answer:** Optional chaining (`?.`) allows you to safely read the value of a property located deep within a chain of connected objects without causing an error if an intermediate reference is `null` or `undefined`. It returns `undefined` instead of throwing a `TypeError`.

---

### 22. What is Pass-by-Value vs Pass-by-Reference in JavaScript?
**Answer:**
- Primitives are passed by value: a copy of the actual data is provided.
- Objects and arrays are passed by reference (more precisely, copy of reference): mutating properties inside a function changes the original object, but reassigning the parameter does not affect the outer binding.

---

### 23. What does `"use strict"` do?
**Answer:** It enforces JavaScript's strict mode, eliminating silent failures by throwing runtime errors (e.g., assigning to undeclared variables), preventing accidental globals, and disabling deprecated syntax.

---

### 24. What is the difference between `parseInt("42px")` and `Number("42px")`?
**Answer:**
- `parseInt("42px", 10)` parses the leading numeric characters from the string until it encounters an invalid character, yielding `42`.
- `Number("42px")` requires the entire string to be valid numeric characters; otherwise, it returns `NaN`.

---

### 25. What is Variable Shadowing?
**Answer:** Variable shadowing occurs when a variable declared within an inner scope (such as inside a function or a block) shares the same name as a variable in an outer scope. The inner variable shadows (hides) the outer variable within that inner scope.
