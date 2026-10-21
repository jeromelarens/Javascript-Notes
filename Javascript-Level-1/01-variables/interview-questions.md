# 🎤 Module 1: Variables — Interview Questions & Answers

### Q1. What is a variable?
A variable is a named binding used to reference a value stored in computer memory. In JavaScript, variables are declared using `var`, `let`, and `const`.

---

### Q2. What is the difference between `let` and `const`?
- Both `let` and `const` are **block-scoped** and reside in the **Temporal Dead Zone (TDZ)** before their declaration line.
- `let` allows **reassignment** to a new value.
- `const` requires immediate initialization and **prohibits reassignment**.

---

### Q3. Can we change an object declared with `const`?
**Yes.** `const` binds the variable identifier to the memory reference of the object. It prevents *reassigning* the variable to another object or value. However, the properties *inside* the object can still be mutated, added, or deleted. To make the object itself immutable, use `Object.freeze()`.

---

### Q4. Can we redeclare a `var` variable?
**Yes**, within the same scope. This is considered bad practice in modern development because it can lead to unintentional overwriting of data.

---

### Q5. Which declaration should you generally prefer in modern JavaScript?
1. Default to **`const`** for predictability and to prevent accidental reassignment.
2. Use **`let`** when a variable's value needs to change over time (e.g., loop counters, accumulators).
3. Avoid **`var`** in modern code.

---

### Q6. What is the Temporal Dead Zone (TDZ)?
The TDZ is the time window between entering a scope and the line where a `let` or `const` variable is declared and initialized. Attempting to access the variable during this window throws a `ReferenceError`.

---

### Q7. How do you make an object truly immutable (shallow)?
Use `Object.freeze(obj)`. It prevents adding new properties, removing existing properties, or changing existing property values on that object.
