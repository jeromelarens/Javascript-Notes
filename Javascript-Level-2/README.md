<div align="center">

# 🚀 JavaScript Level 2 — Functions & Advanced JavaScript

### Complete Learning Repository

**English + Thunglish • Practical Examples • Interview Questions • Logical Problems with Solutions**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Level](https://img.shields.io/badge/Level-2%20Intermediate-orange?style=for-the-badge)
![Modules](https://img.shields.io/badge/Modules-20-blue?style=for-the-badge)
![Interview](https://img.shields.io/badge/Interview-Ready-red?style=for-the-badge)
![Language](https://img.shields.io/badge/English-%2B%20Thunglish-ff69b4?style=for-the-badge)

*Syntax memorize panradhu illa — **JavaScript-ai deep-ah purinjikitu, reusable, predictable code ezhudhuradhu** dhaan goal.* 🧠

</div>

---

## 👋 Welcome to JavaScript Level 2!

This repository covers **functions and the core advanced concepts** needed to write reusable, predictable, and maintainable JavaScript code.

**Designed for:**

- 🌱 Beginners who have completed **JavaScript Level 1**
- 🧩 MERN Stack Developers
- 🟢 Node.js Backend Developers
- 🎯 Students preparing for technical interviews
- 💡 Developers who want to understand JavaScript deeply instead of memorizing syntax

Every major topic includes:

| | What you get |
|---|---|
| 📘 | Definitions in **English** |
| 🗣️ | Definitions in **Thunglish** |
| 💻 | Practical **code examples** with outputs |
| 🌍 | **Real-world** applications |
| 🎤 | **Interview questions** with answers |
| 🧠 | **Coding challenges** with solutions |

> [!TIP]
> Level 2 dhaan **interview-la adhigam kekkura level**. Closures, `this`, call/apply/bind, currying, memoization — idhellam strong-ah irundha, senior-level questions-um easy dhaan. 🔥

---

## 📑 Table of Contents

| # | Section |
|---|---------|
| 1 | [🎯 Learning Objectives](#-learning-objectives) |
| 2 | [🧰 Prerequisites and Setup](#-prerequisites-and-setup) |
| 3 | [📦 Module 1: Function Fundamentals Revision](#-module-1-function-fundamentals-revision) |
| 4 | [🔀 Module 2: Function Declaration vs Function Expression](#-module-2-function-declaration-vs-function-expression) |
| 5 | [🧱 Module 3: Parameters, Arguments and Default Parameters](#-module-3-parameters-arguments-and-default-parameters) |
| 6 | [🥇 Module 4: First-Class Functions](#-module-4-first-class-functions) |
| 7 | [📞 Module 5: Callback Functions](#-module-5-callback-functions) |
| 8 | [🔝 Module 6: Higher-Order Functions](#-module-6-higher-order-functions) |
| 9 | [🔭 Module 7: Lexical Scope](#-module-7-lexical-scope) |
| 10 | [🔒 Module 8: Closures](#-module-8-closures) |
| 11 | [👉 Module 9: The `this` Keyword](#-module-9-the-this-keyword) |
| 12 | [🧲 Module 10: `call()`, `apply()` and `bind()`](#-module-10-call-apply-and-bind) |
| 13 | [⚡ Module 11: IIFE (Immediately Invoked Function Expression)](#-module-11-iife-immediately-invoked-function-expression) |
| 14 | [🔁 Module 12: Recursion](#-module-12-recursion) |
| 15 | [🍛 Module 13: Function Currying](#-module-13-function-currying) |
| 16 | [🧩 Module 14: Partial Application](#-module-14-partial-application) |
| 17 | [🧪 Module 15: Pure Functions and Side Effects](#-module-15-pure-functions-and-side-effects) |
| 18 | [🔗 Module 16: Function Composition](#-module-16-function-composition) |
| 19 | [🧠 Module 17: Memoization](#-module-17-memoization) |
| 20 | [🌊 Module 18: Rest Parameters and Spread Syntax](#-module-18-rest-parameters-and-spread-syntax) |
| 21 | [📎 Module 19: The `arguments` Object](#-module-19-the-arguments-object) |
| 22 | [🧵 Module 20: Execution Context and Call Stack](#-module-20-execution-context-and-call-stack) |
| 23 | [🎤 Advanced Interview Questions](#-advanced-interview-questions) |
| 24 | [🧠 Logical Problem Solving with Solutions](#-logical-problem-solving-with-solutions) |
| 25 | [🎯 Output Prediction Challenges](#-output-prediction-challenges) |
| 26 | [🎮 Mini Projects](#-mini-projects) |
| 27 | [💪 Practice Exercises](#-practice-exercises) |
| 28 | [🚨 Common Mistakes](#-common-mistakes) |
| 29 | [✅ Learning Checklist](#-learning-checklist) |
| 30 | [📁 Recommended Repository Structure](#-recommended-repository-structure) |
| 31 | [📚 Official Learning Resources](#-official-learning-resources) |


---

## 🎯 Learning Objectives

After completing Level 2, you should be able to:

- [x] Explain how functions work internally
- [x] Differentiate function declarations and expressions
- [x] Understand callbacks and higher-order functions
- [x] Explain lexical scope and closures
- [x] Use `this` correctly in different invocation patterns
- [x] Understand `call()`, `apply()` and `bind()`
- [x] Implement recursive functions
- [x] Write curried functions
- [x] Differentiate pure functions and side effects
- [x] Implement function composition and memoization
- [x] Understand execution contexts and the call stack
- [x] Solve function-based coding interview problems
- [x] Apply these concepts to Node.js and backend development

---

## 🧰 Prerequisites and Setup

You should understand these **Level 1** concepts:

`var` / `let` / `const` • Data types • Operators • Conditions • Loops • Functions • Scope • Hoisting • Truthy and falsy values

**Install Node.js** from <https://nodejs.org/> and verify:

```bash
node --version
npm --version
```

**Create your project:**

```bash
mkdir javascript-level-2
cd javascript-level-2
```

Create `index.js` and execute it:

```bash
node index.js
```

> [!NOTE]
> Examples that depend on strict mode or on the Node.js module system mention it explicitly. Add `"use strict";` at the top of a file to practice strict-mode behavior.

---

## 📦 Module 1: Function Fundamentals Revision

### 1.1 What Is a Function?

> **📘 English:** A function is a reusable unit of code that performs a task. It can accept inputs, execute statements, and return a value.

> **🗣️ Thunglish:** Function-na oru particular task perform panna reusable-ah code ezhuthuradhu. Thevai padumbodhu function-ai call panni use pannalaam.

**Example**

```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
console.log(add(5, 15));
```

```text
30
20
```

**Explanation**

| Part | Meaning |
|---|---|
| `function` | Declares the function |
| `add` | Function name |
| `a`, `b` | Parameters |
| `return` | Sends the result to the caller |
| `add(10, 20)` | Invokes the function with two arguments |

**Thunglish:** Oru thadava function write pannittu, different values pass panni multiple times use pannalaam.

### 1.2 Parameters vs Arguments

> **📘 English:** A **parameter** is a variable defined in a function's parameter list. An **argument** is a value supplied when the function is called.

> **🗣️ Thunglish:** Function definition-la irukkura input variable **parameter**. Function call pannumbodhu pass panra actual value **argument**.

```js
function greet(name) {   // name → parameter
  return `Hello, ${name}`;
}

greet("Arun");           // "Arun" → argument
```

### 1.3 Return vs `console.log`

```js
function add(a, b) {
  console.log(a + b);
}

const result = add(2, 3);
console.log(result);
```

```text
5
undefined
```

**Why?** The function **prints** the sum but doesn't **return** it.

✅ Correct implementation:

```js
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

> [!IMPORTANT]
> `console.log` is for **humans** (debugging). `return` is for **the program** (passing the result back to the caller).

### 🎤 Interview Questions — Fundamentals

<details>
<summary><b>Q1. What happens if a function doesn't have a <code>return</code> statement?</b></summary>

It returns `undefined`.
</details>

<details>
<summary><b>Q2. What is the difference between <code>return</code> and <code>console.log</code>?</b></summary>

`console.log` only prints a value for the developer. `return` ends the function and hands a value back to the caller so it can be stored or used.
</details>

<details>
<summary><b>Q3. What does this return? <code>function f() { return<br>{ a: 1 }; }</code></b></summary>

`undefined`. Automatic Semicolon Insertion places a semicolon right after `return`, so the object literal is never returned. Keep `{` on the same line as `return`.
</details>

---

## 🔀 Module 2: Function Declaration vs Function Expression

### 2.1 Function Declaration

> **📘 English:** A function declaration defines a named function using the `function` keyword.

> **🗣️ Thunglish:** `function` keyword use panni direct-ah named function define pannuradhu function declaration.

```js
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 4)); // 20
```

### 2.2 Function Expression

> **📘 English:** A function expression creates a function as part of an expression, often assigning the function to a variable.

> **🗣️ Thunglish:** Function-ai oru expression-ah create panni variable-la store pannuradhu function expression.

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4)); // 20
```

### 2.3 Important Difference: Hoisting

A function declaration can generally be called **before** its textual declaration because the function is initialized during declaration instantiation.

```js
greet();

function greet() {
  console.log("Hello!");
}
```

```text
Hello!
```

Now consider a function expression:

```js
// TypeError: greet is not a function
// greet();

var greet = function () {
  console.log("Hello!");
};
```

Before the assignment executes, `greet` contains `undefined`. A `let` or `const` function expression cannot be accessed before initialization either (`ReferenceError`).

| | Declaration | Expression |
|---|---|---|
| Syntax | `function f() {}` | `const f = function () {}` |
| Callable before definition | ✅ Yes (same scope) | ❌ No |
| Error if called early | — | `TypeError` (`var`) / `ReferenceError` (`let`/`const`) |
| Can be anonymous | ❌ (needs a name, except `export default`) | ✅ Yes |

### 2.4 Named Function Expression

```js
const factorial = function calculate(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculate(n - 1);
};

console.log(factorial(5)); // 120
```

The internal name `calculate` can be used **inside** the function (for recursion), but it is not visible outside.

```js
// console.log(calculate); // ❌ ReferenceError
```

> [!TIP]
> Named function expressions give better **stack traces** while debugging. 🛠️

### 🎤 Interview Questions — Declaration vs Expression

<details>
<summary><b>Q1. What is the difference between a function declaration and a function expression?</b></summary>

A declaration defines a named function and is initialized during declaration instantiation. An expression creates a function as part of an expression and follows the initialization rules of the surrounding binding.
</details>

<details>
<summary><b>Q2. Can a function declaration be called before its declaration?</b></summary>

Generally yes, within the same scope.
</details>

<details>
<summary><b>Q3. What happens if a function expression assigned to <code>const</code> is called before initialization?</b></summary>

Accessing the binding before initialization throws a `ReferenceError`.
</details>

<details>
<summary><b>Q4. What is a named function expression and why use it?</b></summary>

A function expression with its own name (e.g., `const f = function inner() {}`). The name is only accessible inside the function, useful for recursion and clearer stack traces.
</details>

---

## 🧱 Module 3: Parameters, Arguments and Default Parameters

### 3.1 Default Parameters

> **📘 English:** Default parameters provide fallback values when an argument is omitted or supplied as `undefined`.

> **🗣️ Thunglish:** Function-ku argument pass pannala, illa `undefined` pass pannina, default value use panna mudiyum.

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet());           // Hello, Guest
console.log(greet("Arun"));     // Hello, Arun
console.log(greet(undefined));  // Hello, Guest
console.log(greet(null));       // Hello, null
```

> [!IMPORTANT]
> `null` is an **explicit value**, so it does **not** activate the default parameter. Only a missing argument or `undefined` does.

**Defaults can use earlier parameters and expressions**

```js
function createUser(name, role = "user", id = Date.now()) {
  return { name, role, id };
}

function area(width, height = width) {
  return width * height;
}

console.log(area(5)); // 25
```

### 3.2 Rest Parameters

> **📘 English:** Rest parameters collect the remaining arguments into an array.

> **🗣️ Thunglish:** Function-ku evlo arguments vandhaalum remaining arguments-ai single array-la collect panna rest parameter use pannalaam.

```js
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20));         // 30
console.log(sum(1, 2, 3, 4, 5));  // 15
```

Rest parameters must be the **last** parameter in a function's parameter list.

```js
function logAll(first, ...others) {
  console.log(first);  // 1
  console.log(others); // [2, 3, 4]
}
logAll(1, 2, 3, 4);
```

### 3.3 Destructured Parameters

```js
function displayUser({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

displayUser({ name: "Arun", age: 21 });
```

```text
Name: Arun
Age: 21
```

Useful when a function accepts an **options object** with many named values. Combine with defaults:

```js
function connect({ host = "localhost", port = 5432, ssl = false } = {}) {
  return `${ssl ? "https" : "http"}://${host}:${port}`;
}

console.log(connect());                    // http://localhost:5432
console.log(connect({ port: 3000 }));      // http://localhost:3000
```

> 💡 **Backend tip:** This "options object" pattern is everywhere in Node.js libraries (`new Pool({ host, port })`, `express.static(path, options)`).

### 🎤 Interview Questions — Parameters

<details>
<summary><b>Q1. What is a default parameter?</b></summary>

A parameter that uses a specified default value when its argument is missing or `undefined`.
</details>

<details>
<summary><b>Q2. What is the purpose of rest parameters?</b></summary>

They collect multiple remaining arguments into a real array.
</details>

<details>
<summary><b>Q3. What is the difference between rest parameters and the spread operator?</b></summary>

Rest **collects** values into an array; spread **expands** an iterable or suitable object into individual values or properties, depending on the context.
</details>

<details>
<summary><b>Q4. Does <code>greet(null)</code> use the default parameter?</b></summary>

No. Only `undefined` (or a missing argument) triggers the default.
</details>

---

## 🥇 Module 4: First-Class Functions

### 4.1 What Are First-Class Functions?

> **📘 English:** JavaScript treats functions as first-class values. They can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures.

> **🗣️ Thunglish:** JavaScript-la function-ai normal value maadhiri variable-la store pannalaam, innoru function-ku argument-ah pass pannalaam, function-lendhu return pannalaam.

**Example 1: Assign a Function to a Variable**

```js
function greet() {
  return "Hello!";
}

const messageFunction = greet;

console.log(messageFunction()); // Hello!
```

> Notice `greet` is assigned **without parentheses**. This copies its function reference; it doesn't call the function.

**Example 2: Pass a Function as an Argument**

```js
function execute(callback) {
  return callback();
}

function greet() {
  return "Welcome!";
}

console.log(execute(greet)); // Welcome!
```

**Example 3: Return a Function**

```js
function createGreeter() {
  return function () {
    return "Hello, Developer!";
  };
}

const greet = createGreeter();
console.log(greet()); // Hello, Developer!
```

**Example 4: Store Functions in Data Structures**

```js
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

const actions = [Math.sqrt, Math.abs];

console.log(operations.add(5, 3));  // 8
console.log(actions[0](16));        // 4
```

### 🎤 Interview Questions — First-Class Functions

<details>
<summary><b>Q1. What does it mean that functions are first-class citizens?</b></summary>

Functions can be treated as values: assigned, passed, returned, and stored.
</details>

<details>
<summary><b>Q2. Are first-class functions and higher-order functions the same thing?</b></summary>

No. **First-class** describes how functions can be treated as values. A **higher-order function** accepts a function as an argument or returns a function.
</details>

<details>
<summary><b>Q3. What is the difference between <code>fn</code> and <code>fn()</code>?</b></summary>

`fn` is a reference to the function itself. `fn()` invokes it and evaluates to its return value.
</details>

---

## 📞 Module 5: Callback Functions

### 5.1 What Is a Callback?

> **📘 English:** A callback is a function passed to another function so that the receiving function can invoke it.

> **🗣️ Thunglish:** Oru function-ai innoru function-ku argument-ah pass pannuvom. Andha function thevai padumbodhu callback-ai execute pannum.

**Example 1: Basic Callback**

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function finish() {
  console.log("Greeting completed");
}

greet("Arun", finish);
```

```text
Hello, Arun
Greeting completed
```

**Example 2: Callback with a Result**

```js
function calculate(a, b, callback) {
  return callback(a, b);
}

const result = calculate(10, 5, function (a, b) {
  return a + b;
});

console.log(result); // 15
```

### 5.2 Synchronous Callback

A synchronous callback executes **during** the current function call.

```js
function process(callback) {
  console.log("Start");
  callback();
  console.log("End");
}

process(() => console.log("Callback"));
```

```text
Start
Callback
End
```

### 5.3 Asynchronous Callback

An asynchronous callback is invoked **later**, after an asynchronous operation or scheduling mechanism reaches the relevant stage.

```js
console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 0);

console.log("End");
```

```text
Start
End
Callback
```

**Why?** The timer callback executes after the current synchronous code finishes.

### 5.4 Error-First Callbacks (Node.js Style)

Node.js convention: the **first argument** of the callback is the error (or `null`).

```js
function readUser(id, callback) {
  setTimeout(() => {
    if (!id) return callback(new Error("ID required"));
    callback(null, { id, name: "Arun" });
  }, 100);
}

readUser(1, (err, user) => {
  if (err) return console.error(err.message);
  console.log(user); // { id: 1, name: 'Arun' }
});
```

### 5.5 Callback Hell

Callback hell occurs when deeply nested callbacks make control flow and error handling difficult to understand.

```js
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0].id, (payment) => {
      console.log(payment);
    });
  });
});
```

> This example assumes the functions follow a callback-based API.

A Promise-based implementation can often make the flow easier to compose:

```js
async function loadPayment(userId) {
  const user = await getUser(userId);
  const orders = await getOrders(user.id);
  const payment = await getPayment(orders[0].id);

  return payment;
}
```

> The conversion requires the underlying APIs to return Promises or appropriate Promise wrappers.

### 🎤 Interview Questions — Callbacks

<details>
<summary><b>Q1. What is a callback function?</b></summary>

A function passed to another function for later or immediate invocation.
</details>

<details>
<summary><b>Q2. Are all callbacks asynchronous?</b></summary>

No. Callbacks can execute synchronously (like `array.map(cb)`) or asynchronously (like `setTimeout(cb)`).
</details>

<details>
<summary><b>Q3. What is callback hell?</b></summary>

Excessive callback nesting that makes code harder to read, maintain, and handle errors in.
</details>

<details>
<summary><b>Q4. How can callback hell be reduced?</b></summary>

Use named functions, separate responsibilities, Promises, and `async`/`await` where appropriate.
</details>

<details>
<summary><b>Q5. What is an error-first callback?</b></summary>

A Node.js convention where the callback's first parameter is an error object (or `null` on success) and the following parameters carry results.
</details>

---

## 🔝 Module 6: Higher-Order Functions

### 6.1 What Is a Higher-Order Function?

> **📘 English:** A higher-order function is a function that accepts one or more functions as arguments, returns a function, or does both.

> **🗣️ Thunglish:** Oru function innoru function-ai argument-ah accept panninaalum, illa function-ai return panninaalum adhu higher-order function.

**Example 1**

```js
function operate(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(operate(5, 3, add));      // 8
console.log(operate(5, 3, multiply)); // 15
```

**Example 2: Returning a Function**

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### 6.2 Built-In Higher-Order Functions

JavaScript array methods frequently accept callbacks.

**`map()`** — transforms every element and creates a **new array**.

```js
const numbers = [1, 2, 3];
const result = numbers.map(number => number * 2);
console.log(result); // [2, 4, 6]
```

**`filter()`** — selects elements satisfying a condition.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(number => number % 2 === 0);
console.log(result); // [2, 4, 6]
```

**`reduce()`** — combines array values into a **single result**.

```js
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total); // 10
```

| Method | Returns | Use when |
|---|---|---|
| `map` | New array, same length | Transform each item |
| `filter` | New array, shorter or equal | Keep items that pass a test |
| `reduce` | Single value | Aggregate (sum, group, count) |
| `forEach` | `undefined` | Run side effects |
| `find` | First match or `undefined` | Look up one item |
| `some` / `every` | Boolean | Check any / all |

**Chaining**

```js
const orders = [
  { id: 1, amount: 500, paid: true },
  { id: 2, amount: 300, paid: false },
  { id: 3, amount: 700, paid: true },
];

const paidTotal = orders
  .filter(order => order.paid)
  .map(order => order.amount)
  .reduce((sum, amount) => sum + amount, 0);

console.log(paidTotal); // 1200
```

### 🎤 Interview Questions — Higher-Order Functions

<details>
<summary><b>Q1. What is a higher-order function?</b></summary>

A function that accepts a function as an argument or returns a function.
</details>

<details>
<summary><b>Q2. Are <code>map()</code>, <code>filter()</code>, and <code>reduce()</code> higher-order functions?</b></summary>

Yes. They accept callback functions.
</details>

<details>
<summary><b>Q3. Why are higher-order functions useful?</b></summary>

They support reusable behavior, abstraction, composition, and declarative data processing.
</details>

<details>
<summary><b>Q4. What is the difference between <code>map</code> and <code>forEach</code>?</b></summary>

`map` returns a new array of transformed values; `forEach` returns `undefined` and is used for side effects.
</details>

---

## 🔭 Module 7: Lexical Scope

### 7.1 What Is Lexical Scope?

> **📘 English:** Lexical scope determines variable accessibility based on where code is written and the surrounding lexical environments.

> **🗣️ Thunglish:** Oru function source code-la enga define pannirukkom-nu base panni, adhu endha variables-ai access panna mudiyum-nu decide aagum. Idhudhaan lexical scope.

```js
const globalName = "Global";

function outer() {
  const outerName = "Outer";

  function inner() {
    const innerName = "Inner";

    console.log(globalName);
    console.log(outerName);
    console.log(innerName);
  }

  inner();
}

outer();
```

```text
Global
Outer
Inner
```

The inner function can access its own bindings and bindings in enclosing lexical environments.

### 7.2 Scope Chain

> **📘 English:** The scope chain is the sequence of lexical environments JavaScript searches when resolving an identifier.

> **🗣️ Thunglish:** Oru variable current scope-la kidaikkala-na, enclosing scope-la thedi, thevai pattalum mela irukkura scopes-la thedum. Andha lookup process-ai scope chain-nu solluvom.

```js
const a = 10;

function first() {
  const b = 20;

  function second() {
    const c = 30;
    console.log(a + b + c);
  }

  second();
}

first(); // 60
```

```text
second scope ──► first scope ──► global scope ──► (not found → ReferenceError)
```

### 7.3 Lexical Scope vs Dynamic Scope

JavaScript uses **lexical scoping** for ordinary identifier resolution.

```js
const value = "Global";

function showValue() {
  console.log(value);
}

function run() {
  const value = "Local";
  showValue();
}

run(); // Global
```

**Why?** `showValue` was defined in the environment where the global `value` is visible. It doesn't search the caller's local variables just because `run()` invoked it.

> [!NOTE]
> Lexical scope = **where the function is written**. `this` (Module 9) = **how the function is called**. Idha mix pannaadheenga! ⚠️

### 🎤 Interview Questions — Lexical Scope

<details>
<summary><b>Q1. What is lexical scope?</b></summary>

Variable accessibility determined by the source-code structure and enclosing lexical environments.
</details>

<details>
<summary><b>Q2. What is a scope chain?</b></summary>

The chain of lexical environments used to resolve identifiers.
</details>

<details>
<summary><b>Q3. Does JavaScript use dynamic scoping for normal variables?</b></summary>

No. JavaScript uses lexical scoping.
</details>

---

## 🔒 Module 8: Closures

### 8.1 What Is a Closure?

> **📘 English:** A closure is a function bundled with access to its surrounding lexical environment, allowing it to retain access to variables from that environment even after the outer function has finished executing.

> **🗣️ Thunglish:** Outer function execute aagi mudinjirundhaalum, adhu create panna inner function, outer scope-la irukkura variables-ai access pannite irukkum. Andha behavior-ku **closure**-nu solluvom. 🎒 (Function oru "backpack"-la outer variables-ai edhuthukittu pogum!)

**Example 1: Basic Closure**

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();
```

```text
1
2
3
```

**Explanation**

1. `outer()` creates the `count` binding.
2. `inner()` closes over that binding.
3. `outer()` returns `inner`.
4. The returned function continues accessing and updating `count`.

> [!IMPORTANT]
> A closure retains access to the **binding**, not a frozen **copy** of its initial value.

**Independent closures**

```js
const counterA = outer();
const counterB = outer();

counterA(); // 1
counterA(); // 2
counterB(); // 1  ← separate count
```

Each call to `outer()` creates a **new** lexical environment.

### 8.2 Private State with Closures

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Amount must be positive");
      }

      balance += amount;
      return balance;
    },

    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.getBalance()); // 1500
console.log(account.balance);      // undefined 🔐
```

The `balance` variable is **not directly exposed** as an object property.

**Real-world usage:**

- 🔐 Encapsulating internal state
- 🏭 Creating function factories
- 🖱️ Implementing callbacks and event handlers
- ⚡ Memoization
- 💾 Maintaining state between function calls

### 8.3 Closure and Loops

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```

```text
4
4
4
```

**Why?** All callbacks close over the **same** function-scoped `var i` binding. By the time they execute, the loop has finished and `i` is `4`.

✅ **Solution 1 — use `let`:**

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```

```text
1
2
3
```

Each iteration gets its **own** `let` binding for the loop variable.

✅ **Solution 2 — use an IIFE (old-school):**

```js
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
```

### 8.4 Closure Pitfall: Memory Retention

```js
function createHeavy() {
  const bigData = new Array(1_000_000).fill("x");

  return function () {
    return bigData.length; // keeps bigData alive
  };
}
```

As long as the returned function is reachable, `bigData` stays in memory. Release references (`fn = null`) when no longer needed.

### 🎤 Interview Questions — Closures

<details>
<summary><b>Q1. What is a closure?</b></summary>

A function that retains access to its surrounding lexical environment.
</details>

<details>
<summary><b>Q2. Does a closure preserve a copy of a variable?</b></summary>

Generally, a closure retains access to the **binding**, so changes to that binding can be observed by the closure.
</details>

<details>
<summary><b>Q3. What are common use cases for closures?</b></summary>

Private state, function factories, memoization, callbacks, and event handlers.
</details>

<details>
<summary><b>Q4. Can closures cause memory problems?</b></summary>

They can contribute to memory retention when references keep otherwise unnecessary objects reachable. Properly release references when they are no longer needed.
</details>

<details>
<summary><b>Q5. What is the difference between lexical scope and closure?</b></summary>

Lexical scope defines variable accessibility from code structure. A closure is the function's retained access to that lexical environment after the outer function has returned.
</details>

<details>
<summary><b>Q6. Why does the <code>var</code> + <code>setTimeout</code> loop print the same number?</b></summary>

All callbacks share one function-scoped `i`. When they run, the loop is already finished. Use `let` (new binding per iteration) or an IIFE to capture each value.
</details>

---

## 👉 Module 9: The `this` Keyword

### 9.1 What Is `this`?

> **📘 English:** `this` is a keyword whose value is determined by **how a function is called** (the invocation pattern), except in arrow functions, which take `this` from their surrounding scope.

> **🗣️ Thunglish:** `this`-oda value function **eppadi call pannom**-nu base panni decide aagum. Function enga define pannirukkom-nu illa! (Arrow function mattum exception — adhu surrounding scope-oda `this`-ai use pannum.)

```text
Lexical scope  →  WHERE the function is written
this           →  HOW the function is called
```

### 9.2 The 5 Rules of `this`

| # | Invocation pattern | `this` value |
|---|---|---|
| 1 | **Default** — plain call `fn()` | `undefined` (strict mode) / global object (sloppy mode) |
| 2 | **Implicit** — method call `obj.fn()` | `obj` (the object before the dot) |
| 3 | **Explicit** — `fn.call(x)`, `apply(x)`, `bind(x)` | `x` |
| 4 | **`new`** — `new Fn()` | The newly created object |
| 5 | **Arrow function** | `this` of the surrounding (lexical) scope |

**Priority:** `new` → explicit → implicit → default.

### 9.3 Rule 1: Default Binding

```js
"use strict";

function show() {
  console.log(this);
}

show(); // undefined
```

In non-strict code, `this` would be the global object (`globalThis`).

### 9.4 Rule 2: Implicit Binding (Method Call)

```js
const user = {
  name: "Arun",
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // Hello, Arun
```

`this` is whatever is **left of the dot** at call time.

### 9.5 Losing `this` ⚠️

```js
const user = {
  name: "Arun",
  greet() {
    return `Hello, ${this.name}`;
  },
};

const fn = user.greet; // copy the function reference only

// fn();  // strict mode → TypeError: Cannot read properties of undefined
//        // sloppy mode → "Hello, undefined"
```

When you extract a method, the object connection is **lost**.

**Also happens with callbacks:**

```js
const timer = {
  seconds: 5,
  start() {
    setTimeout(function () {
      console.log(this.seconds); // ❌ this is NOT timer
    }, 100);
  },
};
```

✅ **Fixes**

```js
// Fix 1: arrow function (inherits this from start())
setTimeout(() => console.log(this.seconds), 100);

// Fix 2: bind
setTimeout(function () { console.log(this.seconds); }.bind(this), 100);

// Fix 3: save a reference (older style)
const self = this;
setTimeout(function () { console.log(self.seconds); }, 100);
```

### 9.6 Rule 3: Explicit Binding

```js
function intro(city) {
  return `${this.name} from ${city}`;
}

const person = { name: "Arun" };

console.log(intro.call(person, "Chennai")); // Arun from Chennai
```

(Details in Module 10.)

### 9.7 Rule 4: `new` Binding

```js
function User(name) {
  this.name = name;
}

const u = new User("Arun");
console.log(u.name); // Arun
```

`new` creates an empty object, sets `this` to it, runs the function, and returns the object.

### 9.8 Rule 5: Arrow Functions

Arrow functions **do not have their own `this`**. They use the `this` of the enclosing scope.

```js
const counter = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++; // ✅ this = counter
    }, 1000);
  },
};
```

> [!WARNING]
> **Don't use arrow functions as object methods** when you need `this` to refer to the object.

```js
const obj = {
  name: "Arun",
  regular() { return this.name; },     // "Arun"
  arrow: () => this.name,              // ❌ not obj
};
```

### 9.9 `this` at the Top Level (Node.js)

In a Node.js CommonJS file (`.js`), top-level `this` is `module.exports` (an empty object `{}` by default), **not** the global object.

```js
console.log(this); // {}
```

### 9.10 `this` in Classes (Preview)

```js
class Counter {
  count = 0;

  increment() {
    this.count++;
  }

  // arrow class field keeps `this` bound
  incrementSafe = () => {
    this.count++;
  };
}

const c = new Counter();
const { increment, incrementSafe } = c;
// increment();      // ❌ TypeError (this is undefined in class code)
incrementSafe();     // ✅ works
```

Class bodies are always in strict mode.

### 🎤 Interview Questions — `this`

<details>
<summary><b>Q1. What determines the value of <code>this</code>?</b></summary>

How the function is **called**. Arrow functions are the exception: they capture `this` lexically from the enclosing scope.
</details>

<details>
<summary><b>Q2. What is <code>this</code> in a plain function call?</b></summary>

`undefined` in strict mode; the global object in sloppy mode.
</details>

<details>
<summary><b>Q3. Why do we "lose" <code>this</code> when we extract a method?</b></summary>

`this` depends on the call site. `const fn = obj.method; fn()` has no object before the dot, so default binding applies.
</details>

<details>
<summary><b>Q4. How can you fix a lost <code>this</code>?</b></summary>

Use an arrow function, `.bind(obj)`, `.call()`/`.apply()` at the call site, or wrap the call: `() => obj.method()`.
</details>

<details>
<summary><b>Q5. What is the precedence order of <code>this</code> binding rules?</b></summary>

`new` → explicit (`call`/`apply`/`bind`) → implicit (method call) → default.
</details>

<details>
<summary><b>Q6. Can you change <code>this</code> of an arrow function with <code>call</code>?</b></summary>

No. `call`, `apply`, and `bind` cannot change an arrow function's `this`.
</details>

<details>
<summary><b>Q7. What is <code>this</code> at the top level of a Node.js module?</b></summary>

In CommonJS it is `module.exports` (initially `{}`), not `globalThis`.
</details>

---

## 🧲 Module 10: `call()`, `apply()` and `bind()`

### 10.1 What Are They?

> **📘 English:** `call`, `apply`, and `bind` are `Function.prototype` methods that let you explicitly set the value of `this` for a function.

> **🗣️ Thunglish:** Function-ku `this` value-ai nammaley set panna `call`, `apply`, `bind` use pannuvom.

| Method | Calls the function now? | Arguments | Returns |
|---|---|---|---|
| `call(thisArg, a, b)` | ✅ Yes | Individually | Function result |
| `apply(thisArg, [a, b])` | ✅ Yes | As an **array** | Function result |
| `bind(thisArg, a, b)` | ❌ No | Individually (can pre-fill) | A **new function** |

> 🧠 **Memory trick:** **C**all = **C**omma separated, **A**pply = **A**rray, **B**ind = **B**ack later.

### 10.2 `call()`

```js
function introduce(city, country) {
  return `${this.name} from ${city}, ${country}`;
}

const person = { name: "Arun" };

console.log(introduce.call(person, "Chennai", "India"));
// Arun from Chennai, India
```

### 10.3 `apply()`

```js
console.log(introduce.apply(person, ["Chennai", "India"]));
// Arun from Chennai, India
```

**Classic use: `Math.max` with an array**

```js
const numbers = [4, 9, 2, 15];

console.log(Math.max.apply(null, numbers)); // 15
console.log(Math.max(...numbers));          // 15 (modern spread)
```

### 10.4 `bind()`

`bind` returns a **new function** with `this` permanently set.

```js
const introArun = introduce.bind(person);

console.log(introArun("Chennai", "India"));
// Arun from Chennai, India
```

**Fixing lost `this`:**

```js
const user = {
  name: "Arun",
  greet() { return `Hello, ${this.name}`; },
};

const greet = user.greet.bind(user);
console.log(greet()); // Hello, Arun ✅
```

**Binding is permanent:**

```js
function whoAmI() { return this.name; }

const bound = whoAmI.bind({ name: "A" });

console.log(bound.call({ name: "B" })); // A  (cannot be rebound)
```

### 10.5 Method Borrowing

```js
const arrayLike = { 0: "a", 1: "b", length: 2 };

const result = Array.prototype.map.call(arrayLike, ch => ch.toUpperCase());
console.log(result); // ["A", "B"]
```

```js
const person1 = { name: "Arun" };
const person2 = { name: "Divya" };

function sayHi() { return `Hi, ${this.name}`; }

console.log(sayHi.call(person1)); // Hi, Arun
console.log(sayHi.call(person2)); // Hi, Divya
```

### 10.6 Partial Application with `bind`

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5));  // 10
console.log(double(21)); // 42
```

### 10.7 Polyfill: Writing Your Own `bind` (Interview Favorite ⭐)

```js
Function.prototype.myBind = function (context, ...boundArgs) {
  const fn = this;

  return function (...args) {
    return fn.apply(context, [...boundArgs, ...args]);
  };
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const hello = greet.myBind({ name: "Arun" }, "Hello");
console.log(hello("!")); // Hello, Arun!
```

> This simplified version doesn't support using the bound function with `new`. The native `bind` does.

### 10.8 Polyfill: Writing Your Own `call`

```js
Function.prototype.myCall = function (context, ...args) {
  const ctx = context ?? globalThis;
  const key = Symbol("fn");

  ctx[key] = this;
  const result = ctx[key](...args);
  delete ctx[key];

  return result;
};
```

### 🎤 Interview Questions — call / apply / bind

<details>
<summary><b>Q1. What is the difference between <code>call</code>, <code>apply</code> and <code>bind</code>?</b></summary>

`call` and `apply` invoke the function immediately; `call` takes arguments one by one and `apply` takes an array. `bind` does not invoke it; it returns a new function with `this` (and optionally some arguments) fixed.
</details>

<details>
<summary><b>Q2. Can a bound function be re-bound?</b></summary>

No. The first `bind` fixes `this` permanently; later `call`/`apply`/`bind` can't change it.
</details>

<details>
<summary><b>Q3. When would you use <code>apply</code> over <code>call</code>?</b></summary>

When the arguments are already in an array (before spread syntax existed, e.g. `Math.max.apply(null, arr)`).
</details>

<details>
<summary><b>Q4. What does <code>bind(null, 2)</code> do for a two-parameter function?</b></summary>

It creates a new function with the first argument fixed to `2` (partial application).
</details>

<details>
<summary><b>Q5. What happens if you pass <code>null</code> as <code>thisArg</code>?</b></summary>

In strict mode, `this` is `null`; in sloppy mode it becomes the global object.
</details>

<details>
<summary><b>Q6. What is method borrowing?</b></summary>

Using a method from one object on another via `call`/`apply`, e.g. `Array.prototype.slice.call(arguments)`.
</details>

---

## ⚡ Module 11: IIFE (Immediately Invoked Function Expression)

### 11.1 What Is an IIFE?

> **📘 English:** An IIFE is a function expression that is defined and executed immediately.

> **🗣️ Thunglish:** Function-ai define pannina udane, adhe time-la run panna IIFE use pannuvom. Oru thadava mattum run aagum.

```js
(function () {
  console.log("Runs immediately!");
})();
```

```text
Runs immediately!
```

**Syntax variations**

```js
// Classic
(function () { /* ... */ })();

// Arrow IIFE
(() => { /* ... */ })();

// With arguments
(function (name) {
  console.log(`Hello, ${name}`);
})("Arun");

// Alternative parentheses placement
(function () { /* ... */ }());
```

The wrapping parentheses make the engine treat `function` as an **expression** rather than a declaration.

### 11.2 Why Use an IIFE?

**1. Avoid polluting global scope**

```js
(function () {
  var temp = "private";
  console.log(temp);
})();

// console.log(temp); // ❌ ReferenceError
```

**2. Module pattern (private state)**

```js
const counter = (function () {
  let count = 0;

  return {
    increment() { return ++count; },
    reset() { count = 0; },
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
counter.reset();
console.log(counter.count);       // undefined 🔐
```

**3. Capture loop variables (pre-`let` era)**

```js
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
```

**4. Run async code at the top level**

```js
(async () => {
  const data = await Promise.resolve("loaded");
  console.log(data);
})();
```

> [!TIP]
> Modern code uses **ES modules** and block scope (`let`/`const`), so IIFEs are less common, but they appear in **legacy code, bundler output, and interviews**.

### 🎤 Interview Questions — IIFE

<details>
<summary><b>Q1. What is an IIFE and why is it used?</b></summary>

A function expression executed immediately after its definition. It creates a private scope, avoids global pollution, and enables the module pattern.
</details>

<details>
<summary><b>Q2. Why are parentheses required around the function?</b></summary>

Without them, a statement starting with `function` is parsed as a declaration, which requires a name and can't be invoked directly. Parentheses force expression context.
</details>

<details>
<summary><b>Q3. Can an IIFE return a value?</b></summary>

Yes: `const result = (function () { return 42; })();`
</details>

<details>
<summary><b>Q4. Do we still need IIFEs today?</b></summary>

Less often, because of block scope and ES modules. They are still useful for one-off async setup code and appear in older codebases.
</details>

---

## 🔁 Module 12: Recursion

### 12.1 What Is Recursion?

> **📘 English:** Recursion is a technique where a function calls itself to solve smaller instances of the same problem until a stopping condition (base case) is reached.

> **🗣️ Thunglish:** Oru function thannaiye thirumba call pannikkitu, problem-ai chinna chinna pieces-ah pirichu solve pannuradhu recursion. **Base case** (nirkkura condition) irukkanum, illana infinite-ah poiduvom! ♾️

Every recursive function needs:

1. ✅ **Base case** — when to stop
2. ✅ **Recursive case** — call itself with a **smaller** problem

### 12.2 Countdown

```js
function countdown(n) {
  if (n === 0) {            // base case
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);         // recursive case
}

countdown(3);
```

```text
3
2
1
Done!
```

### 12.3 Factorial

```js
function factorial(n) {
  if (n <= 1) return 1;           // base case
  return n * factorial(n - 1);    // recursive case
}

console.log(factorial(5)); // 120
```

**Trace:**

```text
factorial(5)
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * 4 * 3 * 2 * 1
= 120
```

### 12.4 Sum of an Array

```js
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // 10
```

### 12.5 Fibonacci (Naive vs Memoized)

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // 55
```

> ⚠️ Naive `fib(n)` recalculates the same values repeatedly → **exponential time**. Use **memoization** (Module 19) to make it linear.

```js
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(50)); // 12586269025
```

### 12.5.1 Power Function

```js
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 5)); // 32
```

### 12.6 Reverse a String and Palindrome

```js
function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(reverse("hello"));      // olleh
console.log(isPalindrome("level")); // true
```

### 12.7 Flatten a Nested Array

```js
function flatten(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
```

### 12.8 Traversing Nested Data (Real-World)

```js
const menu = {
  name: "Root",
  children: [
    { name: "Home", children: [] },
    {
      name: "Products",
      children: [
        { name: "Phones", children: [] },
        { name: "Laptops", children: [] },
      ],
    },
  ],
};

function printTree(node, depth = 0) {
  console.log(" ".repeat(depth * 2) + node.name);
  for (const child of node.children) {
    printTree(child, depth + 1);
  }
}

printTree(menu);
```

```text
Root
  Home
  Products
    Phones
    Laptops
```

### 12.9 Stack Overflow

```js
function infinite() {
  return infinite();
}

// infinite(); // ❌ RangeError: Maximum call stack size exceeded
```

Each call adds a frame to the **call stack** (Module 20). Without a base case, the stack runs out.

### 12.10 Recursion vs Loop

| | Recursion | Loop |
|---|---|---|
| Readability for tree/nested data | ✅ Excellent | 😓 Harder |
| Memory | Uses call stack (risk of overflow) | Constant |
| Performance | Function-call overhead | Usually faster |
| Best for | Trees, graphs, divide & conquer | Simple repetition |

> [!NOTE]
> The ES2015 spec includes **tail-call optimization**, but most JavaScript engines (including V8 in Node.js) do **not** implement it. Don't rely on it for deep recursion; convert to a loop instead.

### 🎤 Interview Questions — Recursion

<details>
<summary><b>Q1. What is recursion?</b></summary>

A function calling itself to solve smaller subproblems until it reaches a base case.
</details>

<details>
<summary><b>Q2. What is a base case and why is it essential?</b></summary>

The condition that stops the recursion. Without it, the function calls itself forever and causes a stack overflow (`RangeError`).
</details>

<details>
<summary><b>Q3. What is the time complexity of naive Fibonacci?</b></summary>

Exponential, about O(2ⁿ), because of repeated subproblems. Memoization reduces it to O(n).
</details>

<details>
<summary><b>Q4. What causes "Maximum call stack size exceeded"?</b></summary>

Too many nested calls (typically infinite recursion or extremely deep recursion) exhausting the call stack.
</details>

<details>
<summary><b>Q5. When would you prefer a loop over recursion?</b></summary>

For simple repetition or very deep iteration, where recursion adds overhead and risks stack overflow.
</details>

<details>
<summary><b>Q6. Does JavaScript optimize tail calls?</b></summary>

The spec defines it, but most major engines (including V8) don't implement it, so deep tail recursion can still overflow.
</details>

---

## 🍛 Module 13: Function Currying

### 13.1 What Is Currying?

> **📘 English:** Currying transforms a function that takes multiple arguments into a sequence of functions, each taking **one** argument: `f(a, b, c)` → `f(a)(b)(c)`.

> **🗣️ Thunglish:** Oru function-ku 3 arguments ore nerathula kudukkama, onnu onnu-ah kudukkura maadhiri maathuradhu currying. `add(1, 2, 3)` → `add(1)(2)(3)`. Named after mathematician **Haskell Curry**. 🍛

### 13.2 Basic Example

```js
// Normal
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6

// Arrow version
const add3 = a => b => c => a + b + c;
console.log(add3(1)(2)(3)); // 6
```

It works because of **closures** — each inner function remembers the earlier arguments.

### 13.3 Why Curry? Reusable Specialized Functions

```js
const discount = percent => price => price - (price * percent) / 100;

const tenOff = discount(10);
const twentyOff = discount(20);

console.log(tenOff(1000));    // 900
console.log(twentyOff(1000)); // 800
```

```js
const log = level => message => `[${level}] ${message}`;

const info = log("INFO");
const error = log("ERROR");

console.log(info("Server started"));   // [INFO] Server started
console.log(error("DB failed"));       // [ERROR] DB failed
```

### 13.4 A Generic `curry` Utility

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function (...next) {
      return curried.apply(this, [...args, ...next]);
    };
  };
}

function volume(l, w, h) {
  return l * w * h;
}

const curriedVolume = curry(volume);

console.log(curriedVolume(2)(3)(4)); // 24
console.log(curriedVolume(2, 3)(4)); // 24
console.log(curriedVolume(2, 3, 4)); // 24
```

> [!WARNING]
> `fn.length` counts only parameters **before** the first default or rest parameter. Functions like `(a, b = 2) => ...` or `(...args) => ...` need an explicit arity.

### 13.5 Infinite Currying (Interview Favorite ⭐)

```js
function sum(a) {
  return function (b) {
    if (b === undefined) return a;  // call with () to finish
    return sum(a + b);
  };
}

console.log(sum(1)(2)(3)()); // 6
```

### 🎤 Interview Questions — Currying

<details>
<summary><b>Q1. What is currying?</b></summary>

Transforming a multi-argument function into a chain of single-argument functions: `f(a, b, c)` → `f(a)(b)(c)`.
</details>

<details>
<summary><b>Q2. What JavaScript feature makes currying possible?</b></summary>

Closures: each returned function remembers the arguments from earlier calls.
</details>

<details>
<summary><b>Q3. What is the benefit of currying?</b></summary>

Creating reusable, specialized functions (`tenOff = discount(10)`), cleaner composition, and delayed execution.
</details>

<details>
<summary><b>Q4. How do you write a generic <code>curry</code> function?</b></summary>

Collect arguments until `args.length >= fn.length`, then call `fn`; otherwise return a function that gathers more arguments.
</details>

<details>
<summary><b>Q5. Implement <code>sum(1)(2)(3)()</code>.</b></summary>

See section 13.5: each call returns a function; when called with no argument, return the accumulated total.
</details>

---

## 🧩 Module 14: Partial Application

### 14.1 What Is Partial Application?

> **📘 English:** Partial application fixes some arguments of a function in advance and returns a new function that expects the **remaining** arguments.

> **🗣️ Thunglish:** Function-oda sila arguments-ai munnadiye fix panni, meedhi arguments-ai apram kudukka vaikkura technique partial application.

### 14.2 Using `bind`

```js
function power(base, exponent) {
  return base ** exponent;
}

const powerOfTwo = power.bind(null, 2);  // fixes base = 2
console.log(powerOfTwo(5)); // 2 ** 5 = 32
```

### 14.3 Using Closures

```js
function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function send(protocol, host, path) {
  return `${protocol}://${host}${path}`;
}

const sendHttps = partial(send, "https");
const apiCall = partial(send, "https", "api.example.com");

console.log(sendHttps("example.com", "/home")); // https://example.com/home
console.log(apiCall("/users"));                 // https://api.example.com/users
```

### 14.4 Currying vs Partial Application

| | Currying | Partial application |
|---|---|---|
| Result | Chain of **unary** (1-arg) functions | A function with **fewer** parameters |
| Arguments per call | Exactly one | Any number |
| Example | `f(1)(2)(3)` | `partial(f, 1)(2, 3)` |
| Needs all args eventually | ✅ | ✅ |

### 🎤 Interview Questions — Partial Application

<details>
<summary><b>Q1. What is partial application?</b></summary>

Pre-filling some arguments of a function to produce a new function that takes the rest.
</details>

<details>
<summary><b>Q2. What is the difference between currying and partial application?</b></summary>

Currying always produces a chain of one-argument functions. Partial application fixes any number of arguments at once and returns a function of the remaining ones.
</details>

<details>
<summary><b>Q3. How can you do partial application natively?</b></summary>

With `Function.prototype.bind`, e.g. `fn.bind(null, arg1)`.
</details>

---

## 🧪 Module 15: Pure Functions and Side Effects

### 15.1 What Is a Pure Function?

> **📘 English:** A pure function returns the **same output for the same input** and has **no side effects**.

> **🗣️ Thunglish:** Same input kudutha, **eppavum same output** kudukkanum, vera edhaiyum (global variable, file, DB, console) maathakoodadhu. Idhudhaan pure function. 🧼

### 15.2 Pure Function Examples

```js
function add(a, b) {
  return a + b;
}

const getFullName = (first, last) => `${first} ${last}`;

console.log(add(2, 3)); // 5 (always)
```

### 15.3 Impure Function Examples

```js
let total = 0;

// ❌ Depends on and modifies external state
function addToTotal(n) {
  total += n;
  return total;
}

// ❌ Non-deterministic output
function randomId() {
  return Math.random();
}

// ❌ Depends on the current time
function today() {
  return new Date().toDateString();
}

// ❌ Side effect: I/O
function log(msg) {
  console.log(msg);
}
```

### 15.4 What Are Side Effects?

Anything a function does **besides computing and returning a value**:

| Side effect | Example |
|---|---|
| Modifying a variable outside the function | `total += n` |
| Mutating an argument | `arr.push(1)` |
| Console / file / network / DB I/O | `console.log`, `fs.writeFile`, `fetch` |
| DOM changes | `element.innerHTML = ...` |
| Randomness and time | `Math.random()`, `Date.now()` |
| Throwing errors (debated) | `throw new Error()` |

### 15.5 Mutation: The Sneaky Side Effect

```js
// ❌ Impure: mutates the input
function addItemBad(cart, item) {
  cart.push(item);
  return cart;
}

// ✅ Pure: returns a new array
function addItem(cart, item) {
  return [...cart, item];
}

const cart = ["apple"];
const newCart = addItem(cart, "banana");

console.log(cart);    // ["apple"]  (unchanged)
console.log(newCart); // ["apple", "banana"]
```

**Pure object updates**

```js
const user = { name: "Arun", age: 21 };

const updated = { ...user, age: 22 };

console.log(user.age);    // 21
console.log(updated.age); // 22
```

> [!WARNING]
> `sort()`, `reverse()`, `splice()`, `push()` and `pop()` **mutate** the array. For pure code, copy first: `[...arr].sort()` or use `toSorted()` (modern runtimes).

> Spread makes a **shallow** copy. Nested objects are still shared by reference.

### 15.6 Making Impure Code Pure

```js
// ❌ Impure
function createOrder(items) {
  return { items, createdAt: new Date() };
}

// ✅ Pure: time is injected
function createOrderPure(items, createdAt) {
  return { items, createdAt };
}
```

### 15.7 Benefits of Pure Functions

- ✅ **Predictable** — easy to reason about
- ✅ **Testable** — no mocks needed
- ✅ **Cacheable** — safe to memoize (Module 19)
- ✅ **Parallel-safe** — no shared state
- ✅ **Referentially transparent** — a call can be replaced with its result

> 💡 **Backend reality:** Real apps need side effects (DB, HTTP). Good design keeps the **core logic pure** and pushes side effects to the **edges** (controllers, repositories).

### 🎤 Interview Questions — Pure Functions

<details>
<summary><b>Q1. What is a pure function?</b></summary>

A function that, for the same input, always returns the same output and causes no side effects.
</details>

<details>
<summary><b>Q2. Is a function that calls <code>console.log</code> pure?</b></summary>

No. Logging is I/O, which is a side effect.
</details>

<details>
<summary><b>Q3. Is <code>arr.map(fn)</code> pure?</b></summary>

`map` itself doesn't mutate the original array and returns a new one, but it's only fully pure if the callback `fn` is pure.
</details>

<details>
<summary><b>Q4. Why are pure functions easier to test?</b></summary>

They depend only on their inputs, so tests need no setup, mocks, or global state.
</details>

<details>
<summary><b>Q5. What is referential transparency?</b></summary>

An expression can be replaced with its value without changing the program's behavior. Pure functions have this property.
</details>

<details>
<summary><b>Q6. Which array methods mutate the original array?</b></summary>

`push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`.
</details>

---

## 🔗 Module 16: Function Composition

### 16.1 What Is Composition?

> **📘 English:** Function composition combines several functions so that the output of one becomes the input of the next, producing a new function.

> **🗣️ Thunglish:** Chinna chinna functions-ai oru chain-ah serthu, onnoda output-ai adutha function-ku input-ah kudukkura technique composition. Factory assembly line maadhiri! 🏭

```text
input ──► f ──► g ──► h ──► output
```

### 16.2 Manual Composition

```js
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const addDashes = str => str.replace(/\s+/g, "-");

const result = addDashes(toLower(trim("  Hello JavaScript World  ")));
console.log(result); // hello-javascript-world
```

### 16.3 `compose` (Right → Left)

```js
const compose = (...fns) => input =>
  fns.reduceRight((acc, fn) => fn(acc), input);

const slugify = compose(addDashes, toLower, trim);

console.log(slugify("  Hello JavaScript World  "));
// hello-javascript-world
```

Executes **right to left**: `trim` → `toLower` → `addDashes`.

### 16.4 `pipe` (Left → Right)

```js
const pipe = (...fns) => input =>
  fns.reduce((acc, fn) => fn(acc), input);

const slugify2 = pipe(trim, toLower, addDashes);

console.log(slugify2("  Hello JavaScript World  "));
// hello-javascript-world
```

Executes **left to right**, matching reading order. Most developers find `pipe` more intuitive.

### 16.5 Real-World Example: Data Pipeline

```js
const users = [
  { name: "Arun", age: 25, active: true },
  { name: "Divya", age: 17, active: true },
  { name: "Karthik", age: 30, active: false },
  { name: "Meena", age: 28, active: true },
];

const onlyActive = list => list.filter(u => u.active);
const onlyAdults = list => list.filter(u => u.age >= 18);
const getNames   = list => list.map(u => u.name);
const sortAZ     = list => [...list].sort();

const getEligibleNames = pipe(onlyActive, onlyAdults, getNames, sortAZ);

console.log(getEligibleNames(users)); // ["Arun", "Meena"]
```

### 16.6 Composition + Currying = ❤️

```js
const add = a => b => a + b;
const multiply = a => b => a * b;

const calc = pipe(add(5), multiply(2));

console.log(calc(10)); // (10 + 5) * 2 = 30
```

> Compose works best with **unary** (one-argument) functions, which is why currying pairs well with it.

### 🎤 Interview Questions — Composition

<details>
<summary><b>Q1. What is function composition?</b></summary>

Combining functions so the result of one feeds into the next, creating a new function.
</details>

<details>
<summary><b>Q2. What is the difference between <code>compose</code> and <code>pipe</code>?</b></summary>

`compose` applies functions right to left; `pipe` applies them left to right.
</details>

<details>
<summary><b>Q3. How do you implement <code>pipe</code>?</b></summary>

`const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);`
</details>

<details>
<summary><b>Q4. Why does currying help composition?</b></summary>

Composition passes one value through the chain, so each function should take one argument. Currying converts multi-argument functions into unary ones.
</details>

---

## 🧠 Module 17: Memoization

### 17.1 What Is Memoization?

> **📘 English:** Memoization is an optimization technique that caches the results of function calls so repeated calls with the same arguments return the stored result instead of recomputing.

> **🗣️ Thunglish:** Oru function-oda result-ai nyabagam vechukkittu, same input thirumba vandhaa thirumba calculate pannama, cache-la irundhu eduthu tharuradhu memoization. 💾

### 17.2 Simple Cache Example

```js
const cache = {};

function slowSquare(n) {
  if (cache[n] !== undefined) {
    console.log("From cache");
    return cache[n];
  }

  console.log("Computing...");
  cache[n] = n * n;
  return cache[n];
}

console.log(slowSquare(5)); // Computing... 25
console.log(slowSquare(5)); // From cache   25
```

### 17.3 Generic `memoize` Higher-Order Function

```js
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const slowAdd = (a, b) => {
  for (let i = 0; i < 1e8; i++) {} // simulate heavy work
  return a + b;
};

const fastAdd = memoize(slowAdd);

console.time("first");
fastAdd(2, 3);
console.timeEnd("first");   // slow

console.time("second");
fastAdd(2, 3);
console.timeEnd("second");  // almost instant
```

This uses **closures** (private `cache`) and **higher-order functions** (`memoize` takes and returns a function).

### 17.4 Memoizing Recursive Fibonacci

```js
const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

console.log(fib(50)); // 12586269025 (instant)
```

### 17.5 Limitations and Caveats ⚠️

| Caveat | Explanation |
|---|---|
| Only for **pure** functions | Impure results (time, random, DB) would be cached incorrectly |
| Memory growth | The cache grows forever unless you limit it (e.g., LRU) |
| Key generation | `JSON.stringify` fails for functions, `undefined`, cycles, and is order-sensitive for object keys |
| Not free | Cache lookup has a cost; useless for cheap functions |
| Object arguments | Different object references with equal content create different entries (with reference keys) |

> 💡 **Backend use cases:** caching expensive computations, config parsing, permission lookups. For data that changes or must be shared across servers, use **Redis** instead of in-process memoization.

### 🎤 Interview Questions — Memoization

<details>
<summary><b>Q1. What is memoization?</b></summary>

Caching a function's results keyed by its arguments so identical calls return the cached value.
</details>

<details>
<summary><b>Q2. Which kinds of functions can be safely memoized?</b></summary>

Pure functions, since their output depends only on their input.
</details>

<details>
<summary><b>Q3. Which JavaScript concepts are used to build <code>memoize</code>?</b></summary>

Closures (private cache), higher-order functions (accept and return functions), and rest parameters.
</details>

<details>
<summary><b>Q4. What is the difference between memoization and caching?</b></summary>

Memoization is a specific form of caching: storing the return values of a function based on its input arguments.
</details>

<details>
<summary><b>Q5. What are the downsides of memoization?</b></summary>

Memory growth, cost of key generation, and incorrect results if the function is impure.
</details>

---

## 🌊 Module 18: Rest Parameters and Spread Syntax

### 18.1 Same `...`, Two Jobs

> **📘 English:** The `...` syntax is **rest** when it *collects* values and **spread** when it *expands* values.

> **🗣️ Thunglish:** `...` oru dhaan, aana **collect** pannina rest, **expand** pannina spread. 📦↔️📤

| | Rest | Spread |
|---|---|---|
| Purpose | **Collect** many values into one array/object | **Expand** an iterable/object into individual values |
| Where | Function parameters, destructuring | Function calls, array/object literals |
| Position | Must be **last** | Anywhere |

### 18.2 Rest in Function Parameters

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### 18.3 Rest in Destructuring

```js
const [first, second, ...others] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(others); // [30, 40, 50]

const { name, ...rest } = { name: "Arun", age: 21, city: "Chennai" };
console.log(rest);   // { age: 21, city: "Chennai" }
```

### 18.4 Spread with Arrays

```js
const a = [1, 2, 3];
const b = [4, 5];

const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4, 5]

const copy = [...a];       // shallow copy
console.log(Math.max(...a)); // 3
console.log([..."hi"]);      // ["h", "i"]
```

### 18.5 Spread with Objects

```js
const defaults = { theme: "light", lang: "en" };
const userPrefs = { lang: "ta" };

const settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: "light", lang: "ta" }
```

Later properties **override** earlier ones.

### 18.6 Spread in Function Calls

```js
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // 6
```

### 18.7 Shallow Copy Warning ⚠️

```js
const original = { name: "Arun", address: { city: "Chennai" } };
const copy = { ...original };

copy.address.city = "Madurai";

console.log(original.address.city); // Madurai 😱 (shared nested object)
```

For deep copies use `structuredClone(original)`.

### 🎤 Interview Questions — Rest & Spread

<details>
<summary><b>Q1. What is the difference between rest and spread?</b></summary>

Rest collects multiple values into an array (or object) and appears in parameters/destructuring targets. Spread expands an iterable or object into individual elements/properties and appears in calls and literals.
</details>

<details>
<summary><b>Q2. Does spread create a deep copy?</b></summary>

No, a shallow copy. Nested objects/arrays are still shared. Use `structuredClone()` for deep copies.
</details>

<details>
<summary><b>Q3. Where must a rest parameter be placed?</b></summary>

Last in the parameter list; only one rest parameter is allowed.
</details>

<details>
<summary><b>Q4. What does <code>Math.max(...[])</code> return?</b></summary>

`-Infinity`.
</details>

---

## 📎 Module 19: The `arguments` Object

### 19.1 What Is `arguments`?

> **📘 English:** `arguments` is an **array-like** object available inside non-arrow functions that contains all arguments passed to the function.

> **🗣️ Thunglish:** Normal function-kulla automatic-ah irukkura `arguments` object-la, function-ku pass pannina ellaa arguments-um irukkum. Aana adhu **real array illa**!

```js
function showArgs() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showArgs("a", "b", "c");
```

```text
3
a
b
```

### 19.2 It Is Array-Like, Not an Array

```js
function test() {
  console.log(Array.isArray(arguments)); // false
  // arguments.map(...)  // ❌ TypeError: arguments.map is not a function
}
test(1, 2, 3);
```

**Convert to a real array**

```js
function sum() {
  const args = Array.from(arguments);   // or [...arguments]
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### 19.3 Arrow Functions Have No `arguments`

```js
const arrow = () => {
  // console.log(arguments); // ❌ not the arrow's own arguments
};

const withRest = (...args) => args.length;
console.log(withRest(1, 2, 3)); // 3
```

### 19.4 Variable-Length Arguments (Overloading Style)

```js
function area() {
  if (arguments.length === 1) return arguments[0] ** 2;       // square
  if (arguments.length === 2) return arguments[0] * arguments[1]; // rectangle
  return 0;
}

console.log(area(4));    // 16
console.log(area(4, 5)); // 20
```

### 19.5 `arguments` vs Rest Parameters

| | `arguments` | Rest parameters |
|---|---|---|
| Type | Array-like object | Real array |
| Array methods | ❌ No | ✅ Yes |
| Arrow functions | ❌ Not available | ✅ Works |
| Includes named params | Yes (all arguments) | Only the remaining ones |
| Modern recommendation | Legacy | ✅ **Preferred** |

### 🎤 Interview Questions — `arguments`

<details>
<summary><b>Q1. What is the <code>arguments</code> object?</b></summary>

An array-like object in non-arrow functions holding all passed arguments.
</details>

<details>
<summary><b>Q2. Is <code>arguments</code> an array?</b></summary>

No. It has indexes and `length` but lacks array methods. Convert with `Array.from(arguments)` or `[...arguments]`.
</details>

<details>
<summary><b>Q3. Do arrow functions have <code>arguments</code>?</b></summary>

No. They don't have their own `arguments`; use rest parameters.
</details>

<details>
<summary><b>Q4. Why prefer rest parameters over <code>arguments</code>?</b></summary>

Rest gives a real array, works in arrow functions, and makes the function signature self-documenting.
</details>

---

## 🧵 Module 20: Execution Context and Call Stack

### 20.1 What Is an Execution Context?

> **📘 English:** An execution context is the environment in which JavaScript code is evaluated. It holds the variable bindings, the scope chain, and the value of `this`.

> **🗣️ Thunglish:** JavaScript code run aagura "environment"-ku execution context-nu per. Adhula variables, scope chain, `this` ellam irukkum.

**Types**

| Type | Created when |
|---|---|
| **Global** execution context | Program starts (only one) |
| **Function** execution context | A function is **called** |
| **Eval** execution context | `eval()` runs (avoid) |

### 20.2 Two Phases

Every execution context goes through:

**1️⃣ Creation phase (memory setup)**
- Create the variable/lexical environment
- `var` → registered and set to `undefined`
- `let` / `const` → registered but **uninitialized** (TDZ)
- Function declarations → registered with the **whole function**
- Determine `this` and the outer scope reference

**2️⃣ Execution phase**
- Run code line by line, assign values, call functions

```js
console.log(a); // undefined  (creation phase: var a = undefined)
// console.log(b); // ReferenceError (TDZ)

var a = 10;
let b = 20;

console.log(greet()); // works (function hoisted fully)

function greet() {
  return "Hello";
}
```

> 🔑 **This explains hoisting!** Hoisting isn't code moving; it is the **creation phase** registering declarations first.

### 20.3 What Is the Call Stack?

> **📘 English:** The call stack is a LIFO (Last In, First Out) data structure that tracks which function is currently running and where to return when it finishes.

> **🗣️ Thunglish:** Function call pannumbodhu stack-la push, mudinjadhum pop. Plates stack maadhiri: **kadaisiya vecha plate dhaan mudhalla edukka mudiyum**. 🍽️

```js
function third() {
  console.log("third");
}

function second() {
  third();
  console.log("second");
}

function first() {
  second();
  console.log("first");
}

first();
```

```text
third
second
first
```

**Stack snapshots (top of list = currently running)**

```text
1. first()    →  [ global, first ]
2. second()   →  [ global, first, second ]
3. third()    →  [ global, first, second, third ]
4. third ends →  [ global, first, second ]      (logs "third")
5. second ends→  [ global, first ]              (logs "second")
6. first ends →  [ global ]                     (logs "first")
```

Order: `first()` pushed → `second()` pushed → `third()` pushed → `third` logs and pops → `second` logs and pops → `first` logs and pops.

### 20.4 Stack Overflow

```js
function recurse() {
  recurse();
}

// recurse(); // RangeError: Maximum call stack size exceeded
```

### 20.5 JavaScript Is Single-Threaded: The Event Loop (Preview)

JavaScript has **one** call stack, so it runs one thing at a time. Asynchronous work is handled by the **runtime environment** (Node.js or browser) and the **event loop**.

```text
 ┌──────────────┐     ┌────────────────────────┐
 │  Call Stack  │◄────│       Event Loop       │
 └──────────────┘     └───────┬────────┬───────┘
                              │        │
                 ┌────────────▼──┐  ┌──▼─────────────────┐
                 │ Microtask Q   │  │ Callback (Task) Q  │
                 │ Promise.then  │  │ setTimeout, I/O    │
                 └───────────────┘  └────────────────────┘
```

**Rule:** the event loop pushes queued callbacks to the stack only when the stack is **empty**; **microtasks** (promises) run **before** the next task (timers).

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

```text
1
4
3
2
```

Order: sync code (`1`, `4`) → microtask (`3`) → timer task (`2`).

### 🎤 Interview Questions — Execution Context & Call Stack

<details>
<summary><b>Q1. What is an execution context?</b></summary>

The environment where code is evaluated, containing variable bindings, the scope chain (outer reference), and the `this` value.
</details>

<details>
<summary><b>Q2. What are the phases of an execution context?</b></summary>

Creation (memory setup, hoisting, `this`, scope chain) and execution (running code line by line).
</details>

<details>
<summary><b>Q3. What is the call stack?</b></summary>

A LIFO structure that keeps track of active function calls. A new frame is pushed on call and popped on return.
</details>

<details>
<summary><b>Q4. What causes "Maximum call stack size exceeded"?</b></summary>

Too many frames on the stack, typically infinite or extremely deep recursion.
</details>

<details>
<summary><b>Q5. How does hoisting relate to execution contexts?</b></summary>

During the creation phase, declarations are registered in the context's environment before execution, which makes `var` (as `undefined`) and function declarations (fully) available early.
</details>

<details>
<summary><b>Q6. Why does <code>setTimeout(fn, 0)</code> run after synchronous code?</b></summary>

The callback is queued and only moved to the empty call stack by the event loop after the current synchronous code finishes.
</details>

<details>
<summary><b>Q7. In what order do microtasks and timers run?</b></summary>

After the current stack empties, all queued microtasks (promise callbacks) run first, then the next timer/task.
</details>

---

## 🎤 Advanced Interview Questions

> [!TIP]
> Senior-level answer formula: **Definition → Example → Real-world use → Gotcha**. Idha follow pannaa interviewer impress aaguvaanga! 🎯

### 🔥 Section A — Core Concepts

<details>
<summary><b>1. What is a closure? Give a real-world use case.</b></summary>

A closure is a function that retains access to its lexical environment even after the outer function has returned. Use cases: private state (counters, bank account), function factories, memoization caches, event handlers, `once()` / `debounce()` utilities.

```js
function createCounter() {
  let count = 0;
  return () => ++count;
}
```
</details>

<details>
<summary><b>2. Explain lexical scope vs closure vs scope chain.</b></summary>

- **Lexical scope** — where variables are accessible, decided by where code is written.
- **Scope chain** — the lookup path from the current scope outward to global.
- **Closure** — a function keeping that environment alive after the outer function has finished.
</details>

<details>
<summary><b>3. How is <code>this</code> determined?</b></summary>

By the call site: `new` > explicit (`call`/`apply`/`bind`) > implicit (method call) > default (undefined in strict mode / global object in sloppy mode). Arrow functions use the enclosing scope's `this`.
</details>

<details>
<summary><b>4. Difference between <code>call</code>, <code>apply</code>, <code>bind</code>?</b></summary>

`call(this, a, b)` and `apply(this, [a, b])` invoke immediately. `bind(this, a)` returns a new function with `this` fixed and optional pre-filled arguments.
</details>

<details>
<summary><b>5. What is a higher-order function? Name built-in examples.</b></summary>

A function that takes or returns a function. Built-in: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `sort` (with comparator), `setTimeout`.
</details>

<details>
<summary><b>6. What is the difference between currying and partial application?</b></summary>

Currying converts `f(a, b, c)` into `f(a)(b)(c)` (unary chain). Partial application fixes some arguments and returns a function expecting the rest (any arity).
</details>

<details>
<summary><b>7. What is a pure function? Why does it matter?</b></summary>

Same input → same output, no side effects. It is predictable, testable, cacheable (memoizable), and safe for concurrency.
</details>

<details>
<summary><b>8. What is memoization and what are its pitfalls?</b></summary>

Caching results by arguments. Pitfalls: only valid for pure functions, unbounded memory growth, expensive/unsafe key generation (`JSON.stringify`).
</details>

<details>
<summary><b>9. What is function composition? <code>compose</code> vs <code>pipe</code>?</b></summary>

Chaining functions so one's output is the next's input. `compose` runs right → left, `pipe` runs left → right.
</details>

<details>
<summary><b>10. What is an IIFE and when is it useful?</b></summary>

A function expression invoked immediately. Useful for private scope, module pattern, and top-level async code. Largely replaced by block scope and ES modules.
</details>

<details>
<summary><b>11. What is the difference between rest and spread?</b></summary>

Rest collects values into an array (parameters, destructuring). Spread expands iterables/objects into individual elements (calls, literals).
</details>

<details>
<summary><b>12. How does <code>arguments</code> differ from rest parameters?</b></summary>

`arguments` is an array-like object (no array methods, unavailable in arrow functions). Rest parameters produce a real array and are preferred in modern code.
</details>

<details>
<summary><b>13. What is the call stack?</b></summary>

A LIFO structure tracking function execution contexts. Calls push frames; returns pop them. Overflowing it throws `RangeError: Maximum call stack size exceeded`.
</details>

<details>
<summary><b>14. What are the phases of an execution context?</b></summary>

Creation (hoisting, `this`, scope chain) and execution.
</details>

<details>
<summary><b>15. Why are functions "first-class citizens" in JavaScript?</b></summary>

They can be assigned to variables, passed as arguments, returned from functions, and stored in objects/arrays, just like any other value.
</details>

### 🧗 Section B — Deeper Questions

<details>
<summary><b>16. Why does <code>this</code> become <code>undefined</code> when I pass <code>obj.method</code> as a callback?</b></summary>

Passing `obj.method` copies the function reference without the object. When called later as a plain function, default binding applies. Fix with `obj.method.bind(obj)`, an arrow wrapper `() => obj.method()`, or an arrow class field.
</details>

<details>
<summary><b>17. Can arrow functions be used as constructors or have their own <code>arguments</code>?</b></summary>

No to both. They have no own `this`, `arguments`, `prototype`, or `new.target`.
</details>

<details>
<summary><b>18. What is the difference between a function declaration, expression, and arrow function regarding hoisting?</b></summary>

Declarations are hoisted with their body. Expressions and arrow functions follow their variable's rules: `var` → `undefined` (TypeError on call), `let`/`const` → TDZ (ReferenceError).
</details>

<details>
<summary><b>19. How do closures cause memory leaks?</b></summary>

If a long-lived closure references large objects, those objects can't be garbage-collected. Example: event listeners or caches that capture big data and are never removed.
</details>

<details>
<summary><b>20. Why does <code>for (var i...) setTimeout</code> print the same value, and how do you fix it?</b></summary>

Callbacks share one function-scoped `i`. Fix: use `let` (per-iteration binding), an IIFE, or pass the value via `bind`/parameter.
</details>

<details>
<summary><b>21. Explain default parameter evaluation. Is it evaluated at call time?</b></summary>

Yes. Defaults are evaluated each time the function is called (when the argument is `undefined`), so `Date.now()` gives a new value per call and mutable defaults aren't shared between calls (unlike Python).
</details>

<details>
<summary><b>22. What does <code>fn.length</code> return?</b></summary>

The number of parameters before the first default or rest parameter. It's why generic `curry` breaks for functions with defaults or rest.
</details>

<details>
<summary><b>23. How would you implement <code>Function.prototype.bind</code>?</b></summary>

Return a function that calls the original with `apply(context, [...boundArgs, ...laterArgs])`. A complete version also handles `new` calls.
</details>

<details>
<summary><b>24. What is the difference between <code>debounce</code> and <code>throttle</code>?</b></summary>

Debounce waits until activity **stops** for N ms, then runs once (search box). Throttle runs at most **once every N ms** during continuous activity (scroll handler).
</details>

<details>
<summary><b>25. What is a callback hell solution hierarchy?</b></summary>

Named functions → Promises → `async`/`await` → composition/utility libraries, plus proper error handling at each step.
</details>

<details>
<summary><b>26. Is recursion always slower than iteration?</b></summary>

Usually has call-stack overhead and stack-depth limits in JavaScript, but for trees and nested structures it can be clearer. Convert to loops/explicit stacks for very deep inputs.
</details>

<details>
<summary><b>27. What is a function factory?</b></summary>

A function that returns customized functions using closures, e.g. `multiplier(2)`, `createLogger("auth")`.
</details>

<details>
<summary><b>28. How do pure functions help in Node.js / backend development?</b></summary>

Business rules (pricing, validation, permissions) written as pure functions are easy to unit-test and reuse; side effects (DB, network) stay in repositories/controllers.
</details>

<details>
<summary><b>29. Explain the event loop order: sync code, microtasks, timers.</b></summary>

Synchronous code on the call stack finishes first; then microtasks (`Promise.then`, `queueMicrotask`) drain; then the next macrotask (timers, I/O callbacks) runs.
</details>

<details>
<summary><b>30. How does Express middleware relate to higher-order functions and closures?</b></summary>

Middleware are functions passed to `app.use`; factories like `rateLimit({ max: 5 })` return middleware that closes over their options. `next` is a callback driving the chain.
</details>

---

## 🧠 Logical Problem Solving with Solutions

> [!NOTE]
> Pehle **neengale try pannunga**, stuck aanaa mattum solution paarunga. Ovvoru solution-layum **logic** + **code** + **sample output** irukku. ✍️

### 🟢 Level 1 — Warm-up

<details>
<summary><b>Problem 1: Counter Factory (Closure)</b></summary>

**Task:** `createCounter(start)` returns an object with `increment`, `decrement`, `reset`, and `value`.

**Logic:** Keep `count` private in the closure; return methods that share it.

```js
function createCounter(start = 0) {
  let count = start;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = start),
    value: () => count,
  };
}

const c = createCounter(10);
console.log(c.increment()); // 11
console.log(c.increment()); // 12
console.log(c.decrement()); // 11
console.log(c.reset());     // 10
```
</details>

<details>
<summary><b>Problem 2: <code>once(fn)</code> — Run a Function Only One Time</b></summary>

**Logic:** Remember whether it ran and what it returned.

```js
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

const init = once(() => {
  console.log("Initialized!");
  return 42;
});

console.log(init()); // Initialized!  42
console.log(init()); // 42  (no log)
```
</details>

<details>
<summary><b>Problem 3: Multiplier Factory</b></summary>

```js
const multiplier = factor => number => number * factor;

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(7)); // 14
console.log(triple(7)); // 21
```
</details>

<details>
<summary><b>Problem 4: Sum of Digits (Recursion)</b></summary>

```js
function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(1234)); // 10
```
</details>

<details>
<summary><b>Problem 5: Reverse a String (Recursion)</b></summary>

```js
const reverse = str => (str === "" ? "" : reverse(str.slice(1)) + str[0]);

console.log(reverse("JavaScript")); // tpircSavaJ
```
</details>

<details>
<summary><b>Problem 6: Run Function N Times</b></summary>

```js
function repeat(n, fn) {
  for (let i = 0; i < n; i++) fn(i);
}

repeat(3, i => console.log(`Run ${i + 1}`));
```

```text
Run 1
Run 2
Run 3
```
</details>

### 🟡 Level 2 — Interview Staples

<details>
<summary><b>Problem 7: Infinite Currying <code>sum(1)(2)(3)()</code></b></summary>

**Logic:** Each call returns a function that accumulates; calling with no argument ends the chain.

```js
function sum(a) {
  return function (b) {
    return b === undefined ? a : sum(a + b);
  };
}

console.log(sum(1)(2)(3)(4)()); // 10
```
</details>

<details>
<summary><b>Problem 8: Generic <code>curry</code></b></summary>

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...next) => curried.apply(this, [...args, ...next]);
  };
}

const add3 = (a, b, c) => a + b + c;
const c = curry(add3);

console.log(c(1)(2)(3)); // 6
console.log(c(1, 2)(3)); // 6
```
</details>

<details>
<summary><b>Problem 9: Implement <code>compose</code> and <code>pipe</code></b></summary>

```js
const compose = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, f) => f(acc), x);

const inc = x => x + 1;
const dbl = x => x * 2;

console.log(compose(dbl, inc)(5)); // dbl(inc(5)) = 12
console.log(pipe(dbl, inc)(5));    // inc(dbl(5)) = 11
```
</details>

<details>
<summary><b>Problem 10: Implement <code>memoize</code></b></summary>

```js
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const square = memoize(n => {
  console.log("computing", n);
  return n * n;
});

console.log(square(4)); // computing 4  16
console.log(square(4)); // 16
```
</details>

<details>
<summary><b>Problem 11: Flatten a Nested Array (Recursion)</b></summary>

```js
function flatten(arr) {
  return arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );
}

console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
```
</details>

<details>
<summary><b>Problem 12: Implement <code>Array.prototype.map</code></b></summary>

```js
Array.prototype.myMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
```
</details>

<details>
<summary><b>Problem 13: Implement <code>Array.prototype.filter</code></b></summary>

```js
Array.prototype.myFilter = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0)); // [2, 4]
```
</details>

<details>
<summary><b>Problem 14: Implement <code>Array.prototype.reduce</code></b></summary>

```js
Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let start = 0;

  if (arguments.length >= 2) {
    acc = initialValue;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
    start = 1;
  }

  for (let i = start; i < this.length; i++) {
    if (i in this) acc = callback(acc, this[i], i, this);
  }
  return acc;
};

console.log([1, 2, 3, 4].myReduce((a, b) => a + b, 0)); // 10
```
</details>

### 🔴 Level 3 — Challenging

<details>
<summary><b>Problem 15: Implement <code>debounce</code></b></summary>

**Logic:** Each call cancels the previous timer and starts a new one; the function runs only after `delay` ms of silence.

```js
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce(q => console.log("Searching:", q), 300);

search("j");
search("ja");
search("jav"); // only this one runs after 300ms
```

**Use case:** search-as-you-type, window resize.
</details>

<details>
<summary><b>Problem 16: Implement <code>throttle</code></b></summary>

**Logic:** Allow the function at most once per `limit` ms.

```js
function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

const onScroll = throttle(() => console.log("scroll handled"), 1000);
```

**Use case:** scroll handlers, API rate protection.
</details>

<details>
<summary><b>Problem 17: Implement <code>Function.prototype.bind</code></b></summary>

```js
Function.prototype.myBind = function (context, ...bound) {
  const fn = this;
  return function (...args) {
    return fn.apply(context, [...bound, ...args]);
  };
};

function greet(greeting, mark) {
  return `${greeting}, ${this.name}${mark}`;
}

console.log(greet.myBind({ name: "Arun" }, "Hello")("!")); // Hello, Arun!
```
</details>

<details>
<summary><b>Problem 18: <code>after(n, fn)</code> — Run Only From the n-th Call</b></summary>

```js
function after(n, fn) {
  let calls = 0;

  return function (...args) {
    calls++;
    if (calls >= n) return fn.apply(this, args);
  };
}

const done = after(3, () => console.log("Third call reached!"));

done(); // nothing
done(); // nothing
done(); // Third call reached!
```
</details>

<details>
<summary><b>Problem 19: Fibonacci with Memoization</b></summary>

```js
const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

console.log(fib(10)); // 55
console.log(fib(50)); // 12586269025
```

`memoize` is from Problem 10.
</details>

<details>
<summary><b>Problem 20: Deep Count of Nested Values (Recursion)</b></summary>

**Task:** Count all numbers inside arbitrarily nested arrays.

```js
function countNumbers(arr) {
  let count = 0;
  for (const item of arr) {
    if (Array.isArray(item)) count += countNumbers(item);
    else if (typeof item === "number") count++;
  }
  return count;
}

console.log(countNumbers([1, [2, "a", [3]], "b", [[4]]])); // 4
```
</details>

---

## 🎯 Output Prediction Challenges

> Try each **before** opening the answer. Predict, then run it in Node.js to verify. 🧪

<details>
<summary><b>Q1. Closure counter</b></summary>

```js
function outer() {
  let n = 0;
  return () => ++n;
}
const a = outer();
const b = outer();
console.log(a(), a(), b());
```

```text
1 2 1
```
Each `outer()` call creates a separate `n`.
</details>

<details>
<summary><b>Q2. <code>var</code> in loops</b></summary>

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

```text
4
4
4
```
</details>

<details>
<summary><b>Q3. <code>let</code> in loops</b></summary>

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

```text
1
2
3
```
</details>

<details>
<summary><b>Q4. Shared <code>var</code> in closures array</b></summary>

```js
function createFns() {
  var fns = [];
  for (var i = 0; i < 3; i++) fns.push(() => i);
  return fns;
}
console.log(createFns().map(f => f()));
```

```text
[3, 3, 3]
```
</details>

<details>
<summary><b>Q5. Lost <code>this</code></b></summary>

```js
"use strict";
const user = {
  name: "Arun",
  greet() { return this?.name; },
};
const fn = user.greet;
console.log(user.greet(), fn());
```

```text
Arun undefined
```
</details>

<details>
<summary><b>Q6. Arrow function as method (Node.js CommonJS file)</b></summary>

```js
const obj = {
  name: "Arun",
  regular() { return this.name; },
  arrow: () => this.name,
};
console.log(obj.regular(), obj.arrow());
```

```text
Arun undefined
```
Top-level `this` in a CommonJS module is `module.exports` (`{}`), which has no `name`.
</details>

<details>
<summary><b>Q7. <code>bind</code> is permanent</b></summary>

```js
function show() { return this.n; }
const bound = show.bind({ n: 1 });
console.log(bound.call({ n: 2 }));
```

```text
1
```
</details>

<details>
<summary><b>Q8. Default parameters and <code>null</code></b></summary>

```js
function f(x = 10) { return x; }
console.log(f(), f(undefined), f(null), f(0));
```

```text
10 10 null 0
```
</details>

<details>
<summary><b>Q9. Function hoisting vs <code>var</code></b></summary>

```js
console.log(typeof foo);
var foo = 1;
function foo() {}
```

```text
function
```
Function declarations are hoisted over `var` names during the creation phase; the assignment `foo = 1` happens later.
</details>

<details>
<summary><b>Q10. Function expression hoisting</b></summary>

```js
console.log(typeof sayHi);
var sayHi = function () {};
console.log(typeof sayHi);
```

```text
undefined
function
```
</details>

<details>
<summary><b>Q11. Event loop order</b></summary>

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

```text
A
D
C
B
```
</details>

<details>
<summary><b>Q12. Curried addition</b></summary>

```js
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3), add(1)(2)(3) === 6);
```

```text
6 true
```
</details>

<details>
<summary><b>Q13. Implicit global with <code>var a = b = 5</code> (sloppy mode)</b></summary>

```js
(function () {
  var a = b = 5;
})();
console.log(typeof a, typeof b);
```

```text
undefined number
```
`var a = b = 5` means `b = 5` (undeclared → global) and `var a = b`.
</details>

<details>
<summary><b>Q14. ASI trap</b></summary>

```js
function f() {
  return
  { a: 1 };
}
console.log(f());
```

```text
undefined
```
</details>

<details>
<summary><b>Q15. Call stack order</b></summary>

```js
function a() { b(); console.log("a"); }
function b() { console.log("b"); }
a();
```

```text
b
a
```
</details>

<details>
<summary><b>Q16. Named function expression scope</b></summary>

```js
const f = function g() { return typeof g; };
console.log(f(), typeof g);
```

```text
function undefined
```
</details>

<details>
<summary><b>Q17. <code>map(parseInt)</code></b></summary>

```js
console.log(["1", "2", "3"].map(parseInt));
```

```text
[1, NaN, NaN]
```
`map` passes `(value, index)`, so it runs `parseInt("1", 0)`, `parseInt("2", 1)`, `parseInt("3", 2)`.
</details>

<details>
<summary><b>Q18. Rest and spread</b></summary>

```js
function f(a, ...rest) { return rest.length; }
console.log(f(1, 2, 3), [..."hi"], Math.max(...[]));
```

```text
2 [ 'h', 'i' ] -Infinity
```
</details>

<details>
<summary><b>Q19. <code>this</code> in <code>setTimeout</code></b></summary>

```js
const timer = {
  label: "T",
  start() {
    setTimeout(() => console.log(this.label), 0);
    setTimeout(function () { console.log(this.label); }, 0);
  },
};
timer.start();
```

```text
T
undefined
```
The arrow keeps `timer` as `this`. In Node.js, a regular function callback from `setTimeout` gets the `Timeout` object as `this`, which has no `label`.
</details>

<details>
<summary><b>Q20. Pure vs impure</b></summary>

```js
const arr = [3, 1, 2];
const sorted = arr.sort();
console.log(arr === sorted, arr);
```

```text
true [ 1, 2, 3 ]
```
`sort` mutates and returns the same array.
</details>

---

## 🎮 Mini Projects

### 🛠️ Project 1: Function Utility Library (`fn-utils.js`)

**Goal:** Combine closures, HOFs, currying, composition, memoization, and recursion into a reusable mini-library with self-tests.

**Requirements**

- [x] `once`, `after`, `memoize`
- [x] `debounce`, `throttle`
- [x] `curry`, `partial`
- [x] `compose`, `pipe`
- [x] Tests using `console.assert`

```js
"use strict";

// ---------- Utilities ----------
const once = (fn) => {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
};

const memoize = (fn) => {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn.apply(this, args));
    return cache.get(key);
  };
};

const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
};

const throttle = (fn, limit) => {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      return fn.apply(this, args);
    }
  };
};

const curry = (fn) =>
  function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...next) => curried.apply(this, [...args, ...next]);
  };

const partial = (fn, ...preset) => (...later) => fn(...preset, ...later);

const compose = (...fns) => (x) => fns.reduceRight((acc, f) => f(acc), x);
const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

// ---------- Tests ----------
let initCount = 0;
const init = once(() => ++initCount);
init(); init();
console.assert(initCount === 1, "once should run exactly one time");

let computeCount = 0;
const square = memoize((n) => { computeCount++; return n * n; });
square(5); square(5);
console.assert(computeCount === 1, "memoize should cache results");

const add3 = curry((a, b, c) => a + b + c);
console.assert(add3(1)(2)(3) === 6, "curry (a)(b)(c)");
console.assert(add3(1, 2)(3) === 6, "curry (a, b)(c)");

const greet = partial((greeting, name) => `${greeting}, ${name}`, "Hello");
console.assert(greet("Arun") === "Hello, Arun", "partial");

const inc = (x) => x + 1;
const dbl = (x) => x * 2;
console.assert(compose(dbl, inc)(5) === 12, "compose");
console.assert(pipe(dbl, inc)(5) === 11, "pipe");

console.log("✅ All tests finished (no assertion errors above means success)");

module.exports = { once, memoize, debounce, throttle, curry, partial, compose, pipe };
```

**🚀 Bonus:** add `retry(fn, times)`, `limit(fn, n)`, and an LRU cache option for `memoize`.

### 🏦 Project 2: Bank Account System (Closures + Private State)

**Goal:** Build `createAccount(owner, initialBalance)` with private balance, transaction history, and validation.

```js
"use strict";

function createAccount(owner, initialBalance = 0) {
  let balance = initialBalance;
  const history = [];

  const record = (type, amount) => {
    history.push({ type, amount, balance, at: new Date().toISOString() });
  };

  return {
    deposit(amount) {
      if (!(amount > 0)) throw new Error("Deposit must be positive");
      balance += amount;
      record("deposit", amount);
      return balance;
    },

    withdraw(amount) {
      if (!(amount > 0)) throw new Error("Withdrawal must be positive");
      if (amount > balance) throw new Error("Insufficient funds");
      balance -= amount;
      record("withdraw", amount);
      return balance;
    },

    getBalance: () => balance,
    getOwner: () => owner,
    getHistory: () => history.map((entry) => ({ ...entry })), // copies
  };
}

const account = createAccount("Arun", 1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());        // 1300
console.log(account.getHistory().length); // 2

try {
  account.withdraw(5000);
} catch (e) {
  console.log(e.message);                 // Insufficient funds
}

console.log(account.balance);             // undefined 🔐
```

**🚀 Bonus:** add `transfer(toAccount, amount)` and a `getStatement()` that formats history using `pipe`.

### 🔌 Project 3: Express-Style Middleware Runner (Backend Favorite)

**Goal:** Understand how `app.use(...)` and `next()` work internally using higher-order functions, closures, and recursion.

```js
"use strict";

function createApp() {
  const stack = [];

  return {
    use(fn) {
      stack.push(fn);
      return this;               // enables chaining
    },

    run(ctx) {
      let index = -1;

      function dispatch(i) {
        if (i <= index) throw new Error("next() called multiple times");
        index = i;

        const fn = stack[i];
        if (!fn) return;

        fn(ctx, () => dispatch(i + 1));   // next() = recursion
      }

      dispatch(0);
      return ctx;
    },
  };
}

// ---------- Middleware factories (closures) ----------
const logger = (label) => (ctx, next) => {
  console.log(`[${label}] ${ctx.method} ${ctx.path}`);
  next();
};

const auth = (allowedRole) => (ctx, next) => {
  if (ctx.user?.role !== allowedRole) {
    ctx.status = 403;
    ctx.body = "Forbidden";
    return;                    // stop the chain
  }
  next();
};

const handler = (ctx) => {
  ctx.status = 200;
  ctx.body = `Welcome ${ctx.user.name}`;
};

// ---------- Use it ----------
const app = createApp();
app.use(logger("REQ")).use(auth("admin")).use(handler);

console.log(app.run({ method: "GET", path: "/admin", user: { name: "Arun", role: "admin" } }));
console.log(app.run({ method: "GET", path: "/admin", user: { name: "Ravi", role: "guest" } }));
```

```text
(Node prints each object over several lines; shortened here)
[REQ] GET /admin
{ ..., status: 200, body: 'Welcome Arun' }
[REQ] GET /admin
{ ..., status: 403, body: 'Forbidden' }
```

**What you practiced:** HOF (`use`), closures (`logger("REQ")`), callbacks (`next`), recursion (`dispatch`), and early exit.

**🚀 Bonus:** support async middleware with `async`/`await`, add an error-handling middleware, and add a `timing` middleware that measures duration.

---

## 💪 Practice Exercises

> Solve each in `exercises/exNN.js`. **Type it, don't copy it.** ⌨️

### 🔧 Functions & Parameters
1. Write a function declaration and an equivalent function expression. Call both **before** their definitions and note which one fails.
2. Write `createUser({ name, role = "user", active = true } = {})` using destructuring and defaults.
3. Write `sum(...nums)` and `average(...nums)` using rest parameters.
4. Write a function that returns `undefined` accidentally due to ASI, then fix it.

### 🥇 First-Class, Callbacks & HOFs
5. Store 3 functions in an object (`add`, `sub`, `mul`) and call them dynamically by name.
6. Write `calculate(a, b, operation)` that accepts a callback.
7. Write your own `forEach`, `map`, `filter`, and `reduce`.
8. Chain `filter → map → reduce` to compute the total price of in-stock products.
9. Write `repeat(n, fn)` that runs a callback `n` times.

### 🔭 Scope & Closures
10. Create `createCounter()` with `increment`, `decrement`, and `reset`.
11. Create `createLogger(prefix)` that returns a function printing `[prefix] message`.
12. Fix the `var` + `setTimeout` loop **three ways**: `let`, IIFE, and `bind`.
13. Build `createStack()` with private storage and `push`, `pop`, `peek`, `size`.
14. Write `once(fn)` and `after(n, fn)`.
15. Build a rate limiter `limitCalls(fn, max)` that blocks calls after `max` invocations.

### 👉 `this`, `call`, `apply`, `bind`
16. Create an object method that loses `this` when extracted; fix it with `bind`.
17. Use `call` to borrow a method from one object for another.
18. Use `apply` to find the max of an array without spread.
19. Create `double` and `triple` from `multiply` using `bind`.
20. Write `myBind` and `myCall` polyfills.
21. Demonstrate `this` in: plain call, method call, `new`, arrow function, and `call`.

### ⚡ IIFE, Recursion
22. Build a module-pattern counter with an IIFE.
23. Write recursive: `factorial`, `power`, `sumArray`, `reverseString`, `isPalindrome`.
24. Write `fibonacci(n)` recursively, then add memoization and compare timings.
25. Write `flatten(arr)` and `countNested(arr)` for deeply nested arrays.
26. Print a nested folder tree object with indentation using recursion.

### 🍛 Currying, Composition, Memoization
27. Write `curry(fn)` and test with 2, 3, and 4 parameters.
28. Implement `sum(1)(2)(3)()`.
29. Write `partial(fn, ...preset)` and compare with `bind`.
30. Implement `pipe` and use it to build a `slugify` function.
31. Write `memoize(fn)` with a cache size limit of 100 (evict the oldest entry).
32. Write `debounce` and `throttle`, then test them with `setTimeout`.

### 🧪 Purity, Rest/Spread, `arguments`
33. Convert 3 impure functions into pure ones (no mutation, inject time/random).
34. Merge two objects and two arrays immutably using spread.
35. Write `sumAll()` using `arguments`, then rewrite it with rest.

### 🧵 Execution Context
36. Draw the call stack for a program with 4 nested function calls.
37. Predict the output order for a mix of sync code, `setTimeout`, and `Promise.then`.
38. Write a program that causes a stack overflow, catch it with `try/catch`, and fix it with a loop.

---

## 🚨 Common Mistakes

| # | ❌ Mistake | ✅ Fix |
|---|---|---|
| 1 | Using `console.log` instead of `return` | Return the value; log it at the call site |
| 2 | Calling `fn` instead of `fn()` (or the reverse) | `fn` = reference, `fn()` = invocation |
| 3 | Passing `callback()` instead of `callback` to `setTimeout` | `setTimeout(callback, 100)` or `() => callback(arg)` |
| 4 | `var` in loops with async callbacks | Use `let` |
| 5 | Losing `this` when passing methods as callbacks | `bind`, arrow wrapper, or arrow class field |
| 6 | Arrow function as an object method needing `this` | Use method shorthand `greet() {}` |
| 7 | Using an arrow function as a constructor | Use a regular function or `class` |
| 8 | Expecting `null` to trigger a default parameter | Only `undefined` does; use `??` inside the function |
| 9 | Forgetting the base case in recursion | Always write the base case first |
| 10 | Mutating arguments (`arr.push`, `obj.x = 1`) in "pure" functions | Return new copies with spread |
| 11 | Relying on `arguments` inside arrow functions | Use rest parameters |
| 12 | Treating `arguments` as a real array | `Array.from(arguments)` or use rest |
| 13 | Memoizing impure functions | Memoize only pure functions |
| 14 | Unbounded memoization caches | Limit size (LRU) or use Redis with TTL |
| 15 | Assuming spread makes a deep copy | Use `structuredClone()` |
| 16 | `return` followed by a newline and `{` | Keep `{` on the same line as `return` |
| 17 | Confusing `call` and `apply` argument formats | **C**omma vs **A**rray |
| 18 | Callback hell instead of Promises/async | Refactor to `async`/`await` |
| 19 | `fn.length` with defaults/rest in `curry` | Pass explicit arity |
| 20 | Rebinding an already-bound function | Bind only once; keep the original function |

---

## ✅ Learning Checklist

Tick an item only when you can **explain it without notes** and **write the code from scratch**.

### 🔧 Functions Basics
- [ ] I can explain declaration vs expression, including hoisting
- [ ] I understand parameters vs arguments, defaults, rest, and destructured params
- [ ] I know why `null` doesn't trigger defaults

### 🥇 Functional Concepts
- [ ] I can explain first-class and higher-order functions
- [ ] I can write callbacks (sync, async, error-first)
- [ ] I can use `map`, `filter`, `reduce` fluently and implement them myself

### 🔒 Scope & Closures
- [ ] I can explain lexical scope and the scope chain
- [ ] I can explain closures with three real use cases
- [ ] I can fix the `var` loop problem in 3 ways

### 👉 `this` & Binding
- [ ] I can state the 5 rules of `this` and their precedence
- [ ] I can fix a lost `this`
- [ ] I can use `call`, `apply`, `bind` and write a `bind` polyfill

### 🧠 Advanced Patterns
- [ ] I can write an IIFE and explain why it exists
- [ ] I can write recursive solutions with a correct base case
- [ ] I can implement `curry`, `partial`, `compose`, `pipe`
- [ ] I can implement `memoize`, `once`, `debounce`, `throttle`
- [ ] I can write pure functions and avoid mutation
- [ ] I can explain rest vs spread and the `arguments` object

### 🧵 Internals
- [ ] I can explain execution contexts (creation vs execution phase)
- [ ] I can draw the call stack for nested calls
- [ ] I can predict output order for sync code, microtasks, and timers

### 🎯 Interview & Projects
- [ ] I answered all 30 advanced questions confidently
- [ ] I solved all 20 logical problems without looking
- [ ] I predicted the 20 output challenges correctly
- [ ] I completed all 3 mini projects

> 🏁 **All ticked?** Congratulations! You are ready for **Level 3: Objects, Prototypes, Classes, Async JavaScript (Promises, async/await), Modules and Error Handling**. 🚀

---

## 📁 Recommended Repository Structure

```text
javascript-level-2/
│
├── README.md
├── package.json
│
├── 01-function-fundamentals/
├── 02-declaration-vs-expression/
├── 03-parameters/
├── 04-first-class-functions/
├── 05-callbacks/
├── 06-higher-order-functions/
├── 07-lexical-scope/
├── 08-closures/
├── 09-this-keyword/
├── 10-call-apply-bind/
├── 11-iife/
├── 12-recursion/
├── 13-currying/
├── 14-partial-application/
├── 15-pure-functions/
├── 16-function-composition/
├── 17-memoization/
├── 18-rest-spread/
├── 19-arguments-object/
├── 20-execution-context-call-stack/
│   └── (each folder: concept.js + interview-questions.md)
│
├── interview/
│   ├── advanced-questions.md
│   └── output-prediction.js
├── problems/
│   ├── level-1-warmup/
│   ├── level-2-interview/
│   └── level-3-challenging/
├── exercises/
│   └── ex01.js ... ex38.js
└── mini-projects/
    ├── fn-utils/
    ├── bank-account/
    └── middleware-runner/
```

---

## 📚 Official Learning Resources

| Resource | Link |
|---|---|
| 📖 MDN: Functions | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions> |
| 📖 MDN: Closures | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures> |
| 📖 MDN: `this` | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this> |
| 📖 MDN: `Function.prototype.bind()` | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind> |
| 📖 MDN: Event Loop | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop> |
| 📜 ECMAScript Specification | <https://tc39.es/ecma262/> |
| 🟢 Node.js Documentation | <https://nodejs.org/en/docs> |
| 📘 javascript.info: Functions | <https://javascript.info/function-basics> |
| 🧪 Event loop visualizer | <https://www.jsv9000.app/> |

---

<div align="center">

### 🌟 If this repository helped you, give it a ⭐ and share it with your friends!

**Happy Coding! 💻🔥**

*"Functions strong-ah irundha, JavaScript-la ellam strong dhaan."*

</div>
