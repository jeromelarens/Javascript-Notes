<div align="center">

# 🚀 JavaScript Level 1 — Complete Fundamentals

### From Zero to Strong Fundamentals

**English + Thunglish • Examples • Interview Questions • Coding Problems • Mini Project**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Level](https://img.shields.io/badge/Level-1%20Beginner-2ea44f?style=for-the-badge)
![Modules](https://img.shields.io/badge/Modules-12-blue?style=for-the-badge)
![Interview](https://img.shields.io/badge/Interview-Ready-orange?style=for-the-badge)
![Language](https://img.shields.io/badge/English-%2B%20Thunglish-ff69b4?style=for-the-badge)

*Memorize panradhu goal illa — **JavaScript eppadi work aagudhu-nu purinjikitu, independent-ah code ezhudhuradhu** dhaan goal.* 💪

</div>

---

## 👋 Welcome

This repository is designed for **beginners, students, MERN Stack developers, and backend developers** who want to build strong JavaScript fundamentals before moving to advanced concepts.

Every concept is taught with:

| | What you get |
|---|---|
| 📘 | Definitions in **English** |
| 🗣️ | Simple explanations in **Thunglish** |
| 💻 | Practical, runnable **JavaScript examples** |
| 🎯 | **Interview questions** and answers |
| 🧠 | **Logical problem-solving** questions |
| ✅ | **Solutions** with explanations |
| 🧰 | **Hands-on exercises** and a **mini project** |

> [!TIP]
> Code-ai **read mattum panna koodadhu**. Ovvoru example-um `index.js` la type panni, run panni, output-ai change panni paaru. Adhudhaan real learning! 🔥

---

## 📑 Table of Contents

| # | Section | You will learn |
|---|---------|----------------|
| 1 | [🎯 Learning Objectives](#-learning-objectives) | What you can do after Level 1 |
| 2 | [🧰 Prerequisites and Setup](#-prerequisites-and-setup) | Node.js, first program |
| 3 | [📦 Module 1: Variables](#-module-1-variables) | `var`, `let`, `const`, TDZ |
| 4 | [🧬 Module 2: Data Types](#-module-2-data-types) | Primitives, objects, `typeof` |
| 5 | [🔄 Module 3: Type Conversion](#-module-3-type-conversion) | Explicit vs implicit coercion |
| 6 | [➕ Module 4: Operators](#-module-4-operators) | Arithmetic, logical, `??`, `?.` |
| 7 | [🟰 Module 5: Equality Operators](#-module-5-equality-operators) | `==` vs `===` |
| 8 | [🔀 Module 6: Conditional Statements](#-module-6-conditional-statements) | `if`, `switch`, ternary |
| 9 | [🔁 Module 7: Loops](#-module-7-loops) | `for`, `while`, `for...of`, `for...in` |
| 10 | [🔧 Module 8: Functions](#-module-8-functions) | Declarations, expressions, callbacks |
| 11 | [🧩 Module 9: Arrow Functions](#-module-9-arrow-functions) | Syntax, `this`, differences |
| 12 | [🔭 Module 10: Scope](#-module-10-scope) | Global, function, block, closure |
| 13 | [🧱 Module 11: Hoisting](#-module-11-hoisting) | `var`, TDZ, function hoisting |
| 14 | [🎭 Module 12: Truthy and Falsy Values](#-module-12-truthy-and-falsy-values) | The 8 falsy values |
| 15 | [🎤 Interview Questions and Answers](#-level-1-interview-questions-and-answers) | 25 rapid-fire + 18 output predictions |
| 16 | [🧠 Logical Problem Solving](#-logical-problem-solving-with-solutions) | 20 problems with solutions |
| 17 | [💪 Practice Exercises](#-practice-exercises) | 28 hands-on exercises |
| 18 | [🎮 Mini Project](#-mini-project) | Student Report Card Generator |
| 19 | [🚨 Common Mistakes](#-common-beginner-mistakes) | 18 pitfalls and fixes |
| 20 | [✅ Learning Checklist](#-learning-checklist) | Track your progress |
| 21 | [📁 Repository Structure](#-recommended-repository-structure) | Folder layout |
| 22 | [📚 Official Learning Resources](#-official-learning-resources) | MDN, ECMAScript, Node.js |

---

## 🎯 Learning Objectives

After completing Level 1, you should be able to:

- [x] Understand JavaScript syntax and fundamentals
- [x] Declare variables using `var`, `let`, and `const`
- [x] Identify primitive and non-primitive data types
- [x] Perform type conversion safely
- [x] Use arithmetic, comparison, logical, and assignment operators
- [x] Write conditional statements
- [x] Implement loops to solve repetitive tasks
- [x] Create and execute functions
- [x] Understand arrow function syntax
- [x] Explain global, function, and block scope
- [x] Predict basic hoisting behavior
- [x] Identify truthy and falsy values
- [x] Solve beginner-level logical programming problems
- [x] Answer common JavaScript fundamentals interview questions

---

## 🧰 Prerequisites and Setup

**Requirements**

- 💻 A computer with a code editor (VS Code recommended)
- 🟢 Node.js installed
- 🧩 Basic understanding of programming logic

**Step 1 — Install Node.js** from the official website: <https://nodejs.org/>

**Step 2 — Verify installation**

```bash
node --version
npm --version
```

**Step 3 — Create a project**

```bash
mkdir javascript-level-1
cd javascript-level-1
```

Create a file named `index.js`

**Step 4 — Execute JavaScript**

```js
console.log("Hello, JavaScript!");
```

```bash
node index.js
```

Expected output:

```text
Hello, JavaScript!
```

---

## 📦 Module 1: Variables

### 1.1 What Is a Variable?

> **📘 English:** A variable is a named binding used to store or reference a value that a program can access.
> In JavaScript, variables are declared using `var`, `let`, and `const`.

> **🗣️ Thunglish:** Variable-na oru value-ai oru name moolama access panna use panra mechanism. Example-ah, user name, age, product price maadhiri values-ai variables moolama represent pannalaam. Think of it as a **labelled box** 📦 — box-kku name irukku, ulla value irukku.

### 1.2 Declaring Variables

```js
var name = "Arun";
let age = 21;
const country = "India";

console.log(name);
console.log(age);
console.log(country);
```

```text
Arun
21
India
```

### 1.3 Difference Between `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function scope | Block scope | Block scope |
| Redeclaration (same scope) | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| Reassignment | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| Must initialize at declaration | No | No | **Yes** |
| Hoisted | Yes | Yes | Yes |
| Access before initialization | `undefined` | `ReferenceError` | `ReferenceError` |

> [!IMPORTANT]
> `let` and `const` **are hoisted**, but they stay in the **Temporal Dead Zone (TDZ)** until the line where they are initialized. Access panna `ReferenceError` varum.

### 1.4 Using `var`

```js
var score = 10;
score = 20;
console.log(score); // 20
```

`var` allows reassignment **and** redeclaration in the same scope:

```js
var score = 10;
var score = 30;
console.log(score); // 30
```

### 1.5 Using `let`

```js
let age = 20;
age = 21;
console.log(age); // 21
```

Redeclaring the same `let` in the same scope is a syntax error:

```js
let age = 20;
// SyntaxError: Identifier 'age' has already been declared
// let age = 25;
```

### 1.6 Using `const`

```js
const pi = 3.14159;
console.log(pi); // 3.14159
```

```js
const age = 20;
// TypeError: Assignment to constant variable
// age = 21;
```

A `const` must be initialized:

```js
// SyntaxError: Missing initializer in const declaration
// const username;
```

> [!WARNING]
> **`const` does NOT make objects immutable!**

```js
const user = { name: "Arun" };

user.name = "Kumar";   // ✅ allowed — property change
console.log(user.name); // Kumar

// user = {};          // ❌ TypeError — reassigning the binding
```

**English:** A `const` binding cannot be reassigned, but the object it references can still be mutated.
**Thunglish:** `const` variable-ku vera object assign panna mudiyadhu. Aana existing object-oda properties-ai change pannalaam. (Fully lock panna `Object.freeze(user)` use pannalaam.)

### 1.7 Naming Rules and Conventions

| Rule | ✅ Valid | ❌ Invalid |
|---|---|---|
| Start with letter, `_` or `$` | `userName`, `_id`, `$price` | `1user` |
| No spaces or hyphens | `firstName` | `first-name`, `first name` |
| No reserved keywords | `className` | `class`, `let`, `if` |
| Case-sensitive | `age` ≠ `Age` | — |

**Convention:** use `camelCase` for variables and functions, `UPPER_SNAKE_CASE` for true constants (`MAX_USERS`), `PascalCase` for classes.

### 1.8 When Should You Use Each?

- ✅ Use **`const`** by default when the binding does not need reassignment.
- ✅ Use **`let`** when reassignment is necessary.
- 📜 Understand **`var`** because it appears in legacy code and interview questions.

### 🎤 Interview Questions — Variables

<details>
<summary><b>Q1. What is a variable?</b></summary>

A variable is a named binding used to reference a value in a program.
</details>

<details>
<summary><b>Q2. What is the difference between <code>let</code> and <code>const</code>?</b></summary>

Both are block-scoped. A `let` binding can be reassigned; a `const` binding cannot.
</details>

<details>
<summary><b>Q3. Can we change an object declared with <code>const</code>?</b></summary>

Yes. We can modify its properties, but we cannot reassign the binding to a different object.
</details>

<details>
<summary><b>Q4. Can we redeclare a <code>var</code> variable?</b></summary>

Yes, within the same scope.
</details>

<details>
<summary><b>Q5. Which declaration should you generally prefer in modern JavaScript?</b></summary>

Prefer `const` by default and use `let` when reassignment is required.
</details>

<details>
<summary><b>Q6. What is the Temporal Dead Zone?</b></summary>

The period between entering a scope and the line where a `let`/`const` variable is initialized. Accessing the variable in this period throws a `ReferenceError`.
</details>

<details>
<summary><b>Q7. How do you make an object truly immutable (shallow)?</b></summary>

Use `Object.freeze(obj)`. It prevents adding, removing, or changing properties of that object (but it is shallow — nested objects are not frozen).
</details>

---

## 🧬 Module 2: Data Types

### 2.1 What Is a Data Type?

> **📘 English:** A data type defines the kind of value a JavaScript value represents and influences the operations that can be performed on it.

> **🗣️ Thunglish:** Data type-na oru value enna type-la irukku-nu identify panna use aagum. Example: number, text, true/false, object.

### 2.2 JavaScript Data Types

```text
JavaScript
├── Primitive (7)
│   ├── String      → "Arun"
│   ├── Number      → 21, 99.99, NaN, Infinity
│   ├── BigInt      → 9007199254740993n
│   ├── Boolean     → true / false
│   ├── Undefined   → undefined
│   ├── Null        → null
│   └── Symbol      → Symbol("id")
└── Non-Primitive
    └── Object      → { }, [ ], function, Date ...
```

> [!NOTE]
> Arrays and functions are **objects**. `typeof` reports functions as `"function"`, but they are still objects internally.

**Primitive vs Non-Primitive**

| | Primitive | Non-Primitive (Object) |
|---|---|---|
| Stored / copied | **By value** | **By reference** |
| Mutable | No (immutable) | Yes |
| Compared by | Value | Identity (reference) |

```js
let a = 10;
let b = a;   // copy of value
b = 20;
console.log(a); // 10

const obj1 = { x: 1 };
const obj2 = obj1;  // same reference
obj2.x = 99;
console.log(obj1.x); // 99
```

### 2.3 String

```js
const firstName = "Arun";
const lastName = 'Kumar';
const message = `Hello, ${firstName}`;

console.log(message); // Hello, Arun
```

**Template literals**

```js
const name = "Arun";
const age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);
```

```text
My name is Arun and I am 21 years old.
```

**Useful string methods**

```js
const text = "  JavaScript  ";

console.log(text.length);          // 14
console.log(text.trim());          // "JavaScript"
console.log(text.toUpperCase());   // "  JAVASCRIPT  "
console.log("Hello".includes("ell")); // true
console.log("a,b,c".split(","));   // ["a", "b", "c"]
console.log("Hello".slice(1, 3));  // "el"
console.log("ha".repeat(3));       // "hahaha"
```

### 2.4 Number

```js
const age = 21;
const price = 99.99;

console.log(typeof age);   // number
console.log(typeof price); // number
```

`Number` also includes the special values `NaN`, `Infinity`, and `-Infinity`.

> [!WARNING]
> **Floating-point precision:** `0.1 + 0.2` is **not** exactly `0.3`.

```js
console.log(0.1 + 0.2);          // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
```

### 2.5 Boolean

```js
const isLoggedIn = true;
const hasPermission = false;
```

### 2.6 Undefined

A variable declared without an initial value receives `undefined`.

```js
let username;
console.log(username);        // undefined
console.log(typeof username); // undefined
```

**Thunglish:** Value assign pannama `let` variable declare pannina default-ah `undefined` varum.

### 2.7 Null

`null` represents an **intentional absence** of a value.

```js
const selectedUser = null;
console.log(selectedUser);        // null
console.log(typeof selectedUser); // object  😵
```

> [!IMPORTANT]
> `typeof null` returning `"object"` is a **historical JavaScript bug**. It does **not** mean `null` is an object.

### 2.8 BigInt

BigInt represents integers larger than the safe range of `Number` (`Number.MAX_SAFE_INTEGER` = 9007199254740991).

```js
const bigNumber = 9007199254740993n;
console.log(bigNumber);        // 9007199254740993n
console.log(typeof bigNumber); // bigint
```

Do not mix BigInt and Number directly:

```js
// TypeError: Cannot mix BigInt and other types
// console.log(10n + 5);

console.log(10n + 5n); // 15n
```

### 2.9 Symbol

Symbol creates **unique** primitive values, often used as unique object property keys.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

### 2.10 Objects

```js
const user = {
  name: "Arun",
  age: 21,
  isStudent: true
};

console.log(user.name);    // Arun
console.log(user["age"]);  // 21
```

### 2.11 Arrays

```js
const skills = ["JavaScript", "Node.js", "MongoDB"];

console.log(skills[0]);     // JavaScript
console.log(skills.length); // 3
```

### 2.12 Using `typeof`

```js
console.log(typeof "Hello");        // string
console.log(typeof 100);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof 10n);            // bigint
console.log(typeof Symbol());       // symbol
console.log(typeof {});             // object
console.log(typeof []);             // object
console.log(typeof null);           // object
console.log(typeof function () {}); // function
console.log(typeof NaN);            // number
```

Checking arrays:

```js
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
```

### 🎤 Interview Questions — Data Types

<details>
<summary><b>Q1. How many primitive data types exist in JavaScript?</b></summary>

Seven — String, Number, BigInt, Boolean, Undefined, Null, and Symbol.
</details>

<details>
<summary><b>Q2. What is the difference between <code>null</code> and <code>undefined</code>?</b></summary>

`undefined` generally means a value has not been assigned or is unavailable. `null` represents an intentional absence of a value.
</details>

<details>
<summary><b>Q3. What is the output of <code>typeof null</code>?</b></summary>

`"object"`, due to a historical language behavior.
</details>

<details>
<summary><b>Q4. Is an array a primitive type?</b></summary>

No. Arrays are objects.
</details>

<details>
<summary><b>Q5. How do you check whether a value is an array?</b></summary>

Use `Array.isArray(value)`.
</details>

<details>
<summary><b>Q6. What is <code>typeof NaN</code>? Why?</b></summary>

`"number"`. `NaN` is a special value *of the Number type* representing an invalid numeric result.
</details>

<details>
<summary><b>Q7. What is the difference between primitive and reference types?</b></summary>

Primitives are immutable and copied by value. Objects are stored by reference, so multiple variables can point to the same object and mutations are visible through all of them.
</details>

<details>
<summary><b>Q8. Why is <code>0.1 + 0.2 !== 0.3</code>?</b></summary>

JavaScript numbers use IEEE-754 double-precision floating point, which cannot represent some decimals exactly.
</details>

---

## 🔄 Module 3: Type Conversion

### 3.1 What Is Type Conversion?

> **📘 English:** Type conversion is the process of converting a value from one data type to another.

> **🗣️ Thunglish:** Oru value-oda type-ai vera type-ah convert pannuradhudhaan type conversion. Example: string `"25"`-ai number `25`-ah convert pannuradhu.

### 3.2 Two Types of Conversion

**A. Explicit Conversion** — the developer converts on purpose.

```js
const value = "100";
const numberValue = Number(value);

console.log(numberValue);         // 100
console.log(typeof numberValue);  // number
```

**B. Implicit Conversion (Type Coercion)** — JavaScript converts automatically.

```js
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
```

> The `+` operator concatenates when either side is a string. Other arithmetic operators convert suitable operands to numbers.

### 3.3 Using `Number()`

```js
console.log(Number("123"));      // 123
console.log(Number("12.5"));     // 12.5
console.log(Number("hello"));    // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(Number(""));         // 0
```

### 3.4 Using `String()`

```js
console.log(String(100));       // "100"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
```

### 3.5 Using `Boolean()`

```js
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
```

### 3.6 Using `parseInt()` and `parseFloat()`

```js
console.log(parseInt("42px", 10)); // 42
console.log(parseFloat("3.14"));   // 3.14
console.log(Number("42px"));       // NaN
```

Unlike `Number("42px")`, `parseInt("42px", 10)` parses the **initial** integer portion.

### 3.7 Quick Reference Table

| Value | `Number()` | `String()` | `Boolean()` |
|---|---|---|---|
| `"123"` | `123` | `"123"` | `true` |
| `""` | `0` | `""` | `false` |
| `"abc"` | `NaN` | `"abc"` | `true` |
| `true` | `1` | `"true"` | `true` |
| `false` | `0` | `"false"` | `false` |
| `null` | `0` | `"null"` | `false` |
| `undefined` | `NaN` | `"undefined"` | `false` |
| `[]` | `0` | `""` | `true` |
| `{}` | `NaN` | `"[object Object]"` | `true` |

### 3.8 Handy Shortcuts

```js
console.log(+"42");     // 42   (unary plus → number)
console.log("" + 42);   // "42" (concatenate → string)
console.log(!!"hello"); // true (double NOT → boolean)
```

### 🎤 Interview Questions — Type Conversion

<details>
<summary><b>Q1. What is type coercion?</b></summary>

JavaScript's automatic conversion of values between types during certain operations.
</details>

<details>
<summary><b>Q2. What is the difference between <code>Number()</code> and <code>parseInt()</code>?</b></summary>

`Number()` tries to convert the **entire** value to a number. `parseInt()` parses an integer from the **beginning** of a string and stops at the first invalid character.
</details>

<details>
<summary><b>Q3. What is the output of <code>"10" + 5</code>?</b></summary>

`"105"` — string concatenation takes place.
</details>

<details>
<summary><b>Q4. What is <code>NaN</code>?</b></summary>

Not-a-Number — a special numeric value representing an invalid numeric result.
</details>

<details>
<summary><b>Q5. How do you check for <code>NaN</code> reliably?</b></summary>

Use `Number.isNaN(value)`. Remember `NaN === NaN` is `false`.
</details>

<details>
<summary><b>Q6. What is the output of <code>"5" - 2</code> and <code>"5" + 2</code>?</b></summary>

`3` and `"52"`.
</details>

---

## ➕ Module 4: Operators

### 4.1 What Is an Operator?

> **📘 English:** An operator performs an operation on one or more operands and produces a result.

> **🗣️ Thunglish:** Operator-na values mela calculation, comparison, assignment, logical checking maadhiri operations perform panna use panradhu.

### 4.2 Arithmetic Operators

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `10 + 5` |
| `-` | Subtraction | `10 - 5` |
| `*` | Multiplication | `10 * 5` |
| `/` | Division | `10 / 5` |
| `%` | Remainder | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

```js
const a = 10;
const b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

### 4.3 Assignment Operators

```js
let score = 10;

score += 5;  console.log(score); // 15
score -= 3;  console.log(score); // 12
score *= 2;  console.log(score); // 24
score /= 4;  console.log(score); // 6
score %= 4;  console.log(score); // 2
```

### 4.4 Comparison Operators

```js
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 10);  // true
console.log(5 === 5);  // true
console.log(5 !== 10); // true
```

### 4.5 Logical Operators

**AND (`&&`)** — returns the first **falsy** operand, or the last operand if all are truthy.

```js
console.log(true && true);  // true
console.log(true && false); // false
console.log("A" && "B");    // "B"
console.log(0 && "B");      // 0
```

**OR (`||`)** — returns the first **truthy** operand, or the last operand if none is truthy.

```js
console.log(false || true); // true
console.log("" || "Guest"); // "Guest"
console.log("Arun" || "Guest"); // "Arun"
```

**NOT (`!`)** — converts to Boolean and negates.

```js
console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true
```

**Truth table**

| A | B | `A && B` | `A \|\| B` | `!A` |
|---|---|---|---|---|
| true | true | true | true | false |
| true | false | false | true | false |
| false | true | false | true | true |
| false | false | false | false | true |

### 4.6 Increment Operators

```js
let a = 5;
console.log(a++); // 5  (returns old value, then increments)
console.log(a);   // 6

let b = 5;
console.log(++b); // 6  (increments first, then returns)
console.log(b);   // 6
```

### 4.7 Ternary Operator

```js
const age = 20;
const result = age >= 18 ? "Eligible" : "Not eligible";
console.log(result); // Eligible
```

### 4.8 Nullish Coalescing (`??`)

Returns the right side only when the left side is `null` or `undefined`.

```js
const username = null;
console.log(username ?? "Guest"); // Guest
```

Unlike `||`, it preserves valid falsy values such as `0` and `""`.

```js
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0
```

### 4.9 Optional Chaining (`?.`)

Safely access nested properties without throwing an error.

```js
const user = { profile: { city: "Chennai" } };

console.log(user.profile?.city);    // Chennai
console.log(user.address?.city);    // undefined (no error)
// console.log(user.address.city);  // ❌ TypeError
```

### 4.10 Operator Precedence (Quick View)

| Priority | Operators |
|---|---|
| 1 (highest) | `()` |
| 2 | `++` `--` `!` |
| 3 | `**` |
| 4 | `*` `/` `%` |
| 5 | `+` `-` |
| 6 | `<` `<=` `>` `>=` |
| 7 | `==` `===` `!=` `!==` |
| 8 | `&&` |
| 9 | `\|\|` `??` |
| 10 | `? :` |
| 11 (lowest) | `=` `+=` `-=` ... |

```js
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20
```

### 🎤 Interview Questions — Operators

<details>
<summary><b>Q1. What is the difference between <code>&&</code> and <code>||</code>?</b></summary>

`&&` returns the first falsy operand or the final operand. `||` returns the first truthy operand or the final operand.
</details>

<details>
<summary><b>Q2. What is the ternary operator?</b></summary>

A conditional expression: `condition ? valueIfTrue : valueIfFalse`.
</details>

<details>
<summary><b>Q3. What is the difference between <code>++x</code> and <code>x++</code>?</b></summary>

`++x` increments before returning the value. `x++` returns the old value, then increments.
</details>

<details>
<summary><b>Q4. What is the difference between <code>||</code> and <code>??</code>?</b></summary>

`||` falls back for any falsy value. `??` falls back only for `null` or `undefined`.
</details>

<details>
<summary><b>Q5. What does optional chaining (<code>?.</code>) do?</b></summary>

It short-circuits and returns `undefined` if the value before `?.` is `null` or `undefined`, instead of throwing a `TypeError`.
</details>

<details>
<summary><b>Q6. What is the output of <code>console.log(1 &lt; 2 &lt; 3)</code> and <code>console.log(3 &gt; 2 &gt; 1)</code>?</b></summary>

`true` and `false`. `1 < 2` → `true` → `true < 3` → `1 < 3` → `true`. But `3 > 2` → `true` → `true > 1` → `1 > 1` → `false`.
</details>

---

## 🟰 Module 5: Equality Operators

### 5.1 What Is Equality?

Equality operators compare values and return Boolean results.

| Operator | Name |
|---|---|
| `==` | Loose equality |
| `===` | Strict equality |
| `!=` | Loose inequality |
| `!==` | Strict inequality |

### 5.2 Loose Equality (`==`)

Can perform **type conversion** before comparing.

```js
console.log(5 == "5");          // true
console.log(false == 0);        // true
console.log(null == undefined); // true
console.log("" == 0);           // true
```

### 5.3 Strict Equality (`===`)

Compares **type and value** with no implicit conversion.

```js
console.log(5 === "5");   // false
console.log(5 === 5);     // true
console.log(false === 0); // false
```

For objects, strict equality compares **identity**, not content.

```js
console.log({} === {}); // false

const user = {};
const anotherReference = user;
console.log(user === anotherReference); // true
```

### 5.4 Special Case: `NaN`

```js
console.log(NaN === NaN);          // false
console.log(Number.isNaN(NaN));    // true
console.log(Object.is(NaN, NaN));  // true
```

> [!TIP]
> **Recommended practice:** Prefer `===` and `!==` in ordinary application code unless loose equality is intentionally needed (e.g., `value == null` checks both `null` and `undefined`).

### 🎤 Interview Questions — Equality

<details>
<summary><b>Q1. What is the difference between <code>==</code> and <code>===</code>?</b></summary>

`==` allows certain type conversions before comparison; `===` does not.
</details>

<details>
<summary><b>Q2. What is the output of <code>null == undefined</code>?</b></summary>

`true`.
</details>

<details>
<summary><b>Q3. What is the output of <code>null === undefined</code>?</b></summary>

`false`, because they have different types.
</details>

<details>
<summary><b>Q4. Why does <code>{} === {}</code> return false?</b></summary>

Each object literal creates a distinct object, and object equality checks identity (reference).
</details>

<details>
<summary><b>Q5. Why is <code>NaN === NaN</code> false? How do you compare NaN?</b></summary>

By specification, `NaN` is not equal to anything, including itself. Use `Number.isNaN()` or `Object.is()`.
</details>

---

## 🔀 Module 6: Conditional Statements

### 6.1 What Are Conditional Statements?

> **📘 English:** Conditional statements execute different blocks of code depending on whether specified conditions are satisfied.

> **🗣️ Thunglish:** Condition true-ah false-ah irukkuradha check panni, adhukku yetha code execute panna conditional statements use pannuvom.

### 6.2 `if`

```js
const age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
}
```

### 6.3 `if...else`

```js
const age = 16;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}
```

### 6.4 `if...else if...else`

```js
const mark = 85;

if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 75) {
  console.log("Grade B");
} else if (mark >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

```text
Grade B
```

### 6.5 `switch`

```js
const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

```text
Tuesday
```

A `switch` statement uses **strict comparison** (`===`) for case matching.

**Fall-through (intentional grouping)**

```js
const month = 4;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("31 days");
    break;
  case 4: case 6: case 9: case 11:
    console.log("30 days");
    break;
  case 2:
    console.log("28 or 29 days");
    break;
  default:
    console.log("Invalid month");
}
```

> [!WARNING]
> Forgetting `break` makes execution **fall through** into the next case — a classic bug.

### 6.6 Nested Conditions

```js
const age = 22;
const hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Access granted");
  } else {
    console.log("ID required");
  }
} else {
  console.log("Access denied");
}
```

Cleaner version using a logical operator and early return style:

```js
if (age >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

### 6.7 Ternary vs `if...else`

```js
// Simple choice → ternary
const label = age >= 18 ? "Adult" : "Minor";

// Multiple branches / side effects → if...else
```

### 🎤 Interview Questions — Conditionals

<details>
<summary><b>Q1. What is the difference between <code>if...else</code> and <code>switch</code>?</b></summary>

`if...else` supports general Boolean expressions and ranges. `switch` is useful when matching one expression against several possible case values.
</details>

<details>
<summary><b>Q2. Why is <code>break</code> used in a switch statement?</b></summary>

It prevents execution from falling through into the following cases.
</details>

<details>
<summary><b>Q3. Does <code>switch</code> use <code>==</code> or <code>===</code>?</b></summary>

Strict equality (`===`).
</details>

<details>
<summary><b>Q4. What happens if no case matches and there is no <code>default</code>?</b></summary>

Nothing is executed inside the `switch`; control moves to the next statement.
</details>

---

## 🔁 Module 7: Loops

### 7.1 What Is a Loop?

> **📘 English:** A loop repeatedly executes a block of code while a condition remains true or while there are items left to process.

> **🗣️ Thunglish:** Oru velaiya thirumba thirumba seiya vendiyadhu irundha, same code-ai 100 dhadavai ezhudhama loop use pannuvom. 🔄

### 7.2 `for` Loop

```text
for (initialization; condition; update) { body }
```

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

```text
1
2
3
4
5
```

**Flow:** `let i = 1` runs once → check `i <= 5` → run body → `i++` → check again...

### 7.3 `while` Loop

Checks the condition **before** every iteration.

```js
let count = 1;

while (count <= 3) {
  console.log("Count:", count);
  count++;
}
```

### 7.4 `do...while` Loop

Runs the body **at least once**, then checks the condition.

```js
let x = 10;

do {
  console.log("Runs once even though condition is false");
  x++;
} while (x < 5);
```

| Loop | Condition checked | Minimum runs |
|---|---|---|
| `while` | Before the body | 0 |
| `do...while` | After the body | **1** |

### 7.5 `for...of` Loop (values)

Iterates over **iterable** values such as arrays and strings.

```js
const skills = ["JavaScript", "Node.js", "SQL"];

for (const skill of skills) {
  console.log(skill);
}

for (const ch of "Hi") {
  console.log(ch); // H, i
}
```

### 7.6 `for...in` Loop (keys)

Iterates over **enumerable property keys** of an object.

```js
const user = { name: "Arun", age: 21 };

for (const key in user) {
  console.log(key, "=>", user[key]);
}
```

```text
name => Arun
age => 21
```

> [!TIP]
> **Memory trick:** `for..o`**f** → **v**alues of arrays. `for..i`**n** → key**n**ames (**i**ndexes/keys). Avoid `for...in` for arrays.

### 7.7 `break` and `continue`

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop at 5
  console.log(i);
}
```

```text
1
2
4
```

### 7.8 Nested Loops — Pattern Example

```js
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let star = 1; star <= row; star++) {
    line += "* ";
  }
  console.log(line);
}
```

```text
* 
* * 
* * * 
* * * * 
```

### 7.9 Infinite Loop ⚠️

```js
// ❌ Never do this unintentionally
// while (true) { }
// for (let i = 0; i < 5; ) { }   // i never changes
```

### 7.10 Which Loop When?

| Situation | Best loop |
|---|---|
| Known number of iterations | `for` |
| Unknown iterations, condition-driven | `while` |
| Must run at least once (menu, retry) | `do...while` |
| Go through array/string values | `for...of` |
| Go through object keys | `for...in` |

### 🎤 Interview Questions — Loops

<details>
<summary><b>Q1. What is the difference between <code>while</code> and <code>do...while</code>?</b></summary>

`while` checks the condition first and may never run. `do...while` runs the body at least once before checking.
</details>

<details>
<summary><b>Q2. Difference between <code>for...in</code> and <code>for...of</code>?</b></summary>

`for...in` iterates over enumerable property **keys**. `for...of` iterates over the **values** of an iterable such as an array or string.
</details>

<details>
<summary><b>Q3. What do <code>break</code> and <code>continue</code> do?</b></summary>

`break` exits the loop completely. `continue` skips the current iteration and moves to the next.
</details>

<details>
<summary><b>Q4. What will this print? <code>for (var i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i), 0);</code></b></summary>

`3 3 3`. `var` is function-scoped, so all callbacks share one `i`, which is `3` when they run. With `let`, each iteration gets its own binding → `0 1 2`.
</details>

<details>
<summary><b>Q5. Can you use <code>break</code> inside <code>forEach</code>?</b></summary>

No. Use a regular `for`/`for...of` loop (or `some`/`every`) when you need early exit.
</details>

---

## 🔧 Module 8: Functions

### 8.1 What Is a Function?

> **📘 English:** A function is a reusable block of code designed to perform a specific task. It can accept inputs (parameters) and return an output.

> **🗣️ Thunglish:** Function-na oru velaiyai seiyara reusable code block. Ore code-ai thirumba thirumba ezhudhama, function-ah define panni evlo dhadavai venaalum call pannalaam. 🔁 Think of it as a **machine**: input podu → output edu.

### 8.2 Function Declaration

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Arun")); // Hello, Arun!
```

### 8.3 Parameters vs Arguments

```js
function add(a, b) {   // a, b → parameters (placeholders)
  return a + b;
}

console.log(add(5, 3)); // 5, 3 → arguments (actual values)
```

### 8.4 Return Value

```js
function square(n) {
  return n * n;
  console.log("Never runs"); // unreachable
}

console.log(square(4)); // 16
```

> [!NOTE]
> A function without a `return` statement returns `undefined`.

```js
function sayHi() {
  console.log("Hi");
}
console.log(sayHi()); // Hi, then undefined
```

### 8.5 Function Expression

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

| | Declaration | Expression |
|---|---|---|
| Syntax | `function f() {}` | `const f = function () {}` |
| Hoisted (callable before definition) | ✅ Fully | ❌ No (TDZ / `undefined`) |

### 8.6 Default Parameters

```js
function welcome(name = "Guest") {
  return `Welcome, ${name}`;
}

console.log(welcome());        // Welcome, Guest
console.log(welcome("Arun"));  // Welcome, Arun
```

### 8.7 Rest Parameters

```js
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
```

### 8.8 Functions Are First-Class Citizens

Functions can be stored in variables, passed as arguments, and returned from other functions.

**Callback function**

```js
function processUser(name, callback) {
  console.log("Processing", name);
  callback(name);
}

processUser("Arun", function (n) {
  console.log("Done with", n);
});
```

**Function returning a function**

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(10)); // 20
```

### 8.9 IIFE (Immediately Invoked Function Expression)

```js
(function () {
  console.log("Runs immediately!");
})();
```

### 8.10 Pure vs Impure Functions

```js
// ✅ Pure: same input → same output, no side effects
function addPure(a, b) {
  return a + b;
}

// ❌ Impure: depends on / changes outside state
let total = 0;
function addImpure(n) {
  total += n;
  return total;
}
```

### 8.11 Recursion (Intro)

A function that calls itself, with a **base case** to stop.

```js
function factorial(n) {
  if (n <= 1) return 1;       // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120
```

### 🎤 Interview Questions — Functions

<details>
<summary><b>Q1. What is the difference between parameters and arguments?</b></summary>

Parameters are the variables listed in the function definition. Arguments are the actual values passed when calling it.
</details>

<details>
<summary><b>Q2. What is the difference between a function declaration and a function expression?</b></summary>

Declarations are fully hoisted and can be called before they appear in code. Function expressions are assigned to variables and can be used only after the assignment executes.
</details>

<details>
<summary><b>Q3. What does a function return if there is no <code>return</code> statement?</b></summary>

`undefined`.
</details>

<details>
<summary><b>Q4. What is a callback function?</b></summary>

A function passed as an argument to another function, to be called later.
</details>

<details>
<summary><b>Q5. What is an IIFE and why is it used?</b></summary>

A function that executes immediately after it is defined. It creates a private scope and avoids polluting the global scope.
</details>

<details>
<summary><b>Q6. What does "functions are first-class citizens" mean?</b></summary>

Functions are treated like any other value: they can be assigned to variables, passed as arguments, and returned from functions.
</details>

<details>
<summary><b>Q7. What are rest parameters?</b></summary>

The `...args` syntax collects remaining arguments into a real array. It must be the last parameter.
</details>

<details>
<summary><b>Q8. What is a pure function?</b></summary>

A function that always returns the same output for the same input and has no side effects.
</details>

---

## 🧩 Module 9: Arrow Functions

### 9.1 What Is an Arrow Function?

> **📘 English:** Arrow functions (introduced in ES6) provide a shorter syntax for writing function expressions.

> **🗣️ Thunglish:** Arrow function-na function-ai short-ah ezhudha oru modern syntax. `function` keyword-ku badhila `=>` use pannuvom.

### 9.2 Syntax Evolution

```js
// 1️⃣ Normal function expression
const add = function (a, b) {
  return a + b;
};

// 2️⃣ Arrow function
const add2 = (a, b) => {
  return a + b;
};

// 3️⃣ Implicit return (single expression, no braces, no return)
const add3 = (a, b) => a + b;

// 4️⃣ Single parameter → parentheses optional
const square = n => n * n;

// 5️⃣ No parameters → empty parentheses required
const hello = () => "Hello!";

console.log(add3(2, 3)); // 5
console.log(square(4));  // 16
console.log(hello());    // Hello!
```

### 9.3 Returning an Object Literal

Wrap the object in parentheses, otherwise `{}` is treated as a function body.

```js
const makeUser = (name) => ({ name, active: true });

console.log(makeUser("Arun")); // { name: 'Arun', active: true }
```

### 9.4 Arrow Functions as Callbacks

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((acc, n) => acc + n, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
console.log(total);   // 15
```

### 9.5 Arrow vs Regular Functions

| Feature | Regular function | Arrow function |
|---|---|---|
| Syntax | Longer | Shorter |
| Own `this` | ✅ Yes (depends on how it is called) | ❌ No (uses surrounding `this`) |
| Own `arguments` object | ✅ Yes | ❌ No (use rest parameters) |
| Can be used as constructor (`new`) | ✅ Yes | ❌ No |
| Hoisting | Declarations hoisted | Not hoisted (like `const`) |

```js
const user = {
  name: "Arun",
  regular: function () { return this.name; },
  arrow: () => typeof this, // `this` is NOT the object
};

console.log(user.regular()); // "Arun"
```

> [!IMPORTANT]
> Don't use arrow functions as **object methods** when you need `this` to refer to the object.

### 🎤 Interview Questions — Arrow Functions

<details>
<summary><b>Q1. What is an arrow function?</b></summary>

A shorter ES6 syntax for function expressions that does not have its own `this`, `arguments`, or `prototype`.
</details>

<details>
<summary><b>Q2. What is an implicit return?</b></summary>

When an arrow function body is a single expression without braces, its value is returned automatically.
</details>

<details>
<summary><b>Q3. How do you return an object literal from an arrow function directly?</b></summary>

Wrap it in parentheses: `() => ({ key: "value" })`.
</details>

<details>
<summary><b>Q4. Can an arrow function be used as a constructor?</b></summary>

No. Using `new` on an arrow function throws a `TypeError`.
</details>

<details>
<summary><b>Q5. How does <code>this</code> behave in an arrow function?</b></summary>

Arrow functions do not bind their own `this`; they inherit it lexically from the enclosing scope.
</details>

---

## 🔭 Module 10: Scope

### 10.1 What Is Scope?

> **📘 English:** Scope determines where variables and functions are accessible in your code.

> **🗣️ Thunglish:** Scope-na "indha variable-ai enga irundhu access panna mudiyum?" — adhoda visibility area.

### 10.2 Global Scope

Variables declared outside any function or block.

```js
const appName = "MyApp";

function show() {
  console.log(appName); // ✅ accessible
}
show();
```

### 10.3 Function Scope

Variables declared inside a function exist **only inside that function** (applies to `var`, `let`, `const`).

```js
function demo() {
  const secret = "hidden";
  console.log(secret); // ✅
}

demo();
// console.log(secret); // ❌ ReferenceError
```

### 10.4 Block Scope

A block is anything inside `{ }` — `if`, `for`, `while`, or a plain block. `let` and `const` are block-scoped; `var` is **not**.

```js
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1  (var ignores block scope)
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError
```

### 10.5 Scope Chain & Lexical Scope

JavaScript looks for a variable in the current scope, then moves **outward** step by step until it reaches the global scope.

```js
const level1 = "global";

function outer() {
  const level2 = "outer";

  function inner() {
    const level3 = "inner";
    console.log(level1, level2, level3); // finds all three
  }

  inner();
}

outer(); // global outer inner
```

```text
inner scope ──► outer scope ──► global scope ──► (not found → ReferenceError)
```

### 10.6 Variable Shadowing

```js
let x = 10;

function test() {
  let x = 20;       // shadows the outer x
  console.log(x);   // 20
}

test();
console.log(x);     // 10
```

### 10.7 Accidental Globals ⚠️

Assigning to an undeclared variable (in non-strict mode) creates a global.

```js
function bad() {
  leaked = "oops"; // no let/const/var
}
bad();
console.log(leaked); // "oops"  😬
```

> [!TIP]
> Add `"use strict";` at the top of a file — it throws a `ReferenceError` for this mistake.

### 10.8 Closure (Intro)

A closure is a function that **remembers variables from its outer scope** even after the outer function has finished.

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const next = counter();
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
```

**Thunglish:** `counter()` mudinjaalum, inner function `count`-ai nyabagam vechukkum. Adhudhaan closure! 🧠

### 🎤 Interview Questions — Scope

<details>
<summary><b>Q1. What are the types of scope in JavaScript?</b></summary>

Global scope, function scope, and block scope (plus module scope in ES modules).
</details>

<details>
<summary><b>Q2. Is <code>var</code> block-scoped?</b></summary>

No. `var` is function-scoped. `let` and `const` are block-scoped.
</details>

<details>
<summary><b>Q3. What is lexical scope?</b></summary>

A function's accessible variables are determined by where it is **written** in the source code, not where it is called.
</details>

<details>
<summary><b>Q4. What is the scope chain?</b></summary>

The ordered lookup path — current scope, then each outer scope, up to global — used to resolve variable names.
</details>

<details>
<summary><b>Q5. What is a closure?</b></summary>

A function bundled with references to its surrounding variables, allowing it to access outer-scope variables even after the outer function has returned.
</details>

<details>
<summary><b>Q6. What is variable shadowing?</b></summary>

Declaring a variable in an inner scope with the same name as one in an outer scope; the inner one hides the outer one within that scope.
</details>

---

## 🧱 Module 11: Hoisting

### 11.1 What Is Hoisting?

> **📘 English:** Hoisting is JavaScript's behavior where declarations are processed before code execution, making them available throughout their scope.

> **🗣️ Thunglish:** Code run aaga aarambikkum munnaadiye, JavaScript declarations-ai scope-oda top-ku "kondu pogum". Aana **values** hoist aagadhu — declaration mattum dhaan!

### 11.2 `var` Hoisting

```js
console.log(city); // undefined (declared, not yet assigned)
var city = "Chennai";
console.log(city); // Chennai
```

JavaScript sees it like this:

```js
var city;            // declaration hoisted, initialized as undefined
console.log(city);   // undefined
city = "Chennai";    // assignment stays in place
```

### 11.3 `let` and `const` — Temporal Dead Zone

```js
// console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 21;
```

### 11.4 Function Declaration Hoisting

Function declarations are hoisted **with their body**.

```js
sayHello(); // ✅ works

function sayHello() {
  console.log("Hello!");
}
```

### 11.5 Function Expression Hoisting

```js
// hello(); // ❌ TypeError: hello is not a function (var → undefined)
var hello = function () {
  console.log("Hi");
};

// greet(); // ❌ ReferenceError (const → TDZ)
const greet = () => console.log("Hi");
```

### 11.6 Hoisting Summary

| Declaration | Hoisted? | Initial value before declaration line | Result if accessed early |
|---|---|---|---|
| `var` | ✅ | `undefined` | `undefined` |
| `let` | ✅ (TDZ) | uninitialized | `ReferenceError` |
| `const` | ✅ (TDZ) | uninitialized | `ReferenceError` |
| Function declaration | ✅ | Whole function | Works |
| Function expression (`var`) | ✅ (var part) | `undefined` | `TypeError` |
| Class | ✅ (TDZ) | uninitialized | `ReferenceError` |

### 🎤 Interview Questions — Hoisting

<details>
<summary><b>Q1. What is hoisting?</b></summary>

JavaScript's process of registering declarations in their scope before executing code, so they are available earlier than where they appear.
</details>

<details>
<summary><b>Q2. What is the output? <code>console.log(a); var a = 5;</code></b></summary>

`undefined` — the declaration is hoisted, the assignment is not.
</details>

<details>
<summary><b>Q3. What is the output? <code>console.log(b); let b = 5;</code></b></summary>

`ReferenceError` — `b` is in the Temporal Dead Zone.
</details>

<details>
<summary><b>Q4. Are <code>let</code> and <code>const</code> hoisted?</b></summary>

Yes, but they are not initialized until their declaration line executes, so accessing them earlier throws a `ReferenceError`.
</details>

<details>
<summary><b>Q5. Why does calling a function expression stored in a <code>var</code> before its definition throw a TypeError?</b></summary>

The `var` name is hoisted as `undefined`, and calling `undefined()` gives "is not a function".
</details>

---

## 🎭 Module 12: Truthy and Falsy Values

### 12.1 What Are Truthy and Falsy?

> **📘 English:** Every JavaScript value is either **truthy** or **falsy** when evaluated in a Boolean context (like an `if` condition).

> **🗣️ Thunglish:** `if (value)` nu ezhudhumbodhu, value `true`/`false` illanaalum JavaScript adha boolean-ah maathi paakkum. Adhu `true`-ah maarina **truthy**, `false`-ah maarina **falsy**.

### 12.2 The 8 Falsy Values (Memorize These!)

| # | Value | Note |
|---|---|---|
| 1 | `false` | The Boolean false |
| 2 | `0` | Number zero |
| 3 | `-0` | Negative zero |
| 4 | `0n` | BigInt zero |
| 5 | `""` | Empty string (`""`, `''`, or an empty template literal) |
| 6 | `null` | Intentional absence |
| 7 | `undefined` | Not assigned |
| 8 | `NaN` | Not-a-Number |

> [!IMPORTANT]
> **Everything else is truthy.**

### 12.3 Surprising Truthy Values 😲

```js
console.log(Boolean("0"));      // true  (non-empty string)
console.log(Boolean("false"));  // true  (non-empty string)
console.log(Boolean([]));       // true  (empty array)
console.log(Boolean({}));       // true  (empty object)
console.log(Boolean(function () {})); // true
console.log(Boolean(-1));       // true
console.log(Boolean(Infinity)); // true
```

### 12.4 Using Truthiness in Conditions

```js
const username = "";

if (username) {
  console.log("Welcome", username);
} else {
  console.log("Please enter a username"); // ✅ runs
}
```

### 12.5 Short-Circuit Patterns

```js
// Default value
const name = "" || "Guest";        // "Guest"

// Run only if truthy
const isAdmin = true;
isAdmin && console.log("Admin panel loaded");

// Preserve 0 and ""  → use ??
const qty = 0;
console.log(qty || 10);  // 10  ❌ unexpected
console.log(qty ?? 10);  // 0   ✅
```

### 12.5.1 Checking an Empty Array/Object

```js
const items = [];

if (items) { /* always true — [] is truthy */ }
if (items.length === 0) { console.log("Array is empty"); } // ✅

const obj = {};
console.log(Object.keys(obj).length === 0); // true → empty object
```

### 12.6 `!!` — Convert to Boolean

```js
console.log(!!"Hello"); // true
console.log(!!0);       // false
console.log(!!null);    // false
```

### 🎤 Interview Questions — Truthy and Falsy

<details>
<summary><b>Q1. List all falsy values in JavaScript.</b></summary>

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.
</details>

<details>
<summary><b>Q2. Is an empty array truthy or falsy?</b></summary>

Truthy. All objects (including `[]` and `{}`) are truthy.
</details>

<details>
<summary><b>Q3. Is the string <code>"0"</code> truthy?</b></summary>

Yes. Any non-empty string is truthy.
</details>

<details>
<summary><b>Q4. What does <code>!!value</code> do?</b></summary>

It converts `value` to its Boolean equivalent.
</details>

<details>
<summary><b>Q5. Why can <code>||</code> cause bugs with numeric defaults?</b></summary>

Because `0` is falsy, `0 || 10` gives `10`. Use `??` to fall back only for `null` / `undefined`.
</details>

<details>
<summary><b>Q6. What is the output of <code>[] == false</code> and <code>!![]</code>?</b></summary>

`true` and `true`. With `==`, `[]` converts to `""` then `0`, and `false` converts to `0`, so they are loosely equal; but `[]` itself is truthy.
</details>

---

## 🎤 Level 1 Interview Questions and Answers

> [!TIP]
> Interview-la answer pannum podhu: **Definition → Example → Gotcha**. Idha follow pannaa answer strong-ah irukkum! 🎯

### 🔥 Section A — Rapid Fire (Must Know)

<details>
<summary><b>1. What is JavaScript?</b></summary>

A high-level, interpreted (JIT-compiled), dynamically typed, multi-paradigm language used to build web frontends, backends (Node.js), mobile apps, and more.
</details>

<details>
<summary><b>2. Is JavaScript statically or dynamically typed?</b></summary>

Dynamically typed — a variable's type is determined at runtime and can change.
</details>

<details>
<summary><b>3. What is the difference between <code>var</code>, <code>let</code>, and <code>const</code>?</b></summary>

`var` is function-scoped, redeclarable, and initialized as `undefined` when hoisted. `let` and `const` are block-scoped with a TDZ; `const` cannot be reassigned.
</details>

<details>
<summary><b>4. What are the primitive types?</b></summary>

String, Number, BigInt, Boolean, Undefined, Null, Symbol.
</details>

<details>
<summary><b>5. <code>==</code> vs <code>===</code>?</b></summary>

`==` coerces types before comparing; `===` compares type and value strictly.
</details>

<details>
<summary><b>6. What is <code>NaN</code>, and how do you test for it?</b></summary>

An invalid numeric result. Use `Number.isNaN(x)`.
</details>

<details>
<summary><b>7. What is the difference between <code>null</code> and <code>undefined</code>?</b></summary>

`undefined` = not assigned. `null` = intentionally empty.
</details>

<details>
<summary><b>8. What is hoisting?</b></summary>

Declarations are registered in their scope before code runs. `var` → `undefined`; `let`/`const` → TDZ; function declarations → fully available.
</details>

<details>
<summary><b>9. What is scope? Name the types.</b></summary>

Visibility of variables. Global, function, block (and module).
</details>

<details>
<summary><b>10. What is a closure?</b></summary>

A function that retains access to its outer scope's variables after the outer function has returned.
</details>

<details>
<summary><b>11. What is the difference between a function declaration and an arrow function?</b></summary>

Arrow functions have shorter syntax, no own `this`/`arguments`, can't be constructors, and aren't hoisted like declarations.
</details>

<details>
<summary><b>12. What is the Temporal Dead Zone?</b></summary>

The time between entering a scope and initializing a `let`/`const` variable, during which access throws `ReferenceError`.
</details>

<details>
<summary><b>13. What are the falsy values?</b></summary>

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
</details>

<details>
<summary><b>14. Difference between <code>||</code> and <code>??</code>?</b></summary>

`||` falls back on any falsy value; `??` only on `null`/`undefined`.
</details>

<details>
<summary><b>15. What is type coercion?</b></summary>

Automatic conversion of values from one type to another by JavaScript.
</details>

<details>
<summary><b>16. Difference between <code>for...in</code> and <code>for...of</code>?</b></summary>

`for...in` → keys of an object; `for...of` → values of an iterable.
</details>

<details>
<summary><b>17. What is a callback?</b></summary>

A function passed to another function to be executed later.
</details>

<details>
<summary><b>18. What is an IIFE?</b></summary>

A function expression that is invoked immediately after creation.
</details>

<details>
<summary><b>19. Can <code>const</code> objects be modified?</b></summary>

Yes — properties can change; the binding can't be reassigned.
</details>

<details>
<summary><b>20. What does <code>typeof</code> return for an array?</b></summary>

`"object"`. Use `Array.isArray()` to detect arrays.
</details>

<details>
<summary><b>21. What is optional chaining?</b></summary>

`?.` safely accesses nested properties and returns `undefined` instead of throwing if a link is `null`/`undefined`.
</details>

<details>
<summary><b>22. What is the difference between pass-by-value and pass-by-reference in JS?</b></summary>

Primitives are copied by value. Objects are passed as a copy of the reference, so mutating the object inside a function affects the original, but reassigning the parameter does not.
</details>

<details>
<summary><b>23. What does <code>"use strict"</code> do?</b></summary>

Enables strict mode: disallows accidental globals, silent errors become thrown errors, etc.
</details>

<details>
<summary><b>24. What is the difference between <code>parseInt</code> and <code>Number</code>?</b></summary>

`parseInt("42px")` → `42`; `Number("42px")` → `NaN`.
</details>

<details>
<summary><b>25. What is shadowing?</b></summary>

An inner-scope variable with the same name hides the outer variable.
</details>

### 🧪 Section B — Output Prediction (Tricky!)

> Try each one **before** opening the answer. 🧠

<details>
<summary><b>Q1.</b> <code>console.log(typeof NaN);</code></summary>

```text
number
```
</details>

<details>
<summary><b>Q2.</b> <code>console.log(0.1 + 0.2 === 0.3);</code></summary>

```text
false
```
Because of floating-point precision (`0.30000000000000004`).
</details>

<details>
<summary><b>Q3.</b> <code>console.log("5" + 3 - 2);</code></summary>

```text
51
```
`"5" + 3` → `"53"`, then `"53" - 2` → `51`.
</details>

<details>
<summary><b>Q4.</b> <code>console.log(1 + "1" - 1);</code></summary>

```text
10
```
</details>

<details>
<summary><b>Q5.</b> <code>console.log(typeof typeof 1);</code></summary>

```text
string
```
`typeof 1` is `"number"`, and `typeof "number"` is `"string"`.
</details>

<details>
<summary><b>Q6.</b> <code>console.log(NaN === NaN);</code></summary>

```text
false
```
</details>

<details>
<summary><b>Q7.</b> <code>console.log([] + []);</code></summary>

```text
(empty string)
```
Both arrays convert to `""`, so the result is `""`.
</details>

<details>
<summary><b>Q8.</b> <code>console.log(+"");  console.log(+"abc");  console.log(+true);</code></summary>

```text
0
NaN
1
```
</details>

<details>
<summary><b>Q9.</b> <code>console.log("b" + "a" + +"a" + "a");</code></summary>

```text
baNaNa
```
`+"a"` is `NaN`, which gets concatenated as the string `"NaN"`.
</details>

<details>
<summary><b>Q10.</b> <code>console.log(a); var a = 10;</code></summary>

```text
undefined
```
</details>

<details>
<summary><b>Q11.</b> <code>let x = 10; { let x = 20; } console.log(x);</code></summary>

```text
10
```
The inner `x` is a separate, block-scoped variable.
</details>

<details>
<summary><b>Q12.</b> <code>console.log(typeof undeclaredVariable);</code></summary>

```text
undefined
```
`typeof` on an undeclared identifier does not throw.
</details>

<details>
<summary><b>Q13.</b> <code>console.log(null ?? "A");  console.log(0 ?? "B");  console.log(0 || "C");</code></summary>

```text
A
0
C
```
</details>

<details>
<summary><b>Q14.</b> <code>console.log(3 &gt; 2 &gt; 1);</code></summary>

```text
false
```
`3 > 2` → `true`, then `true > 1` → `1 > 1` → `false`.
</details>

<details>
<summary><b>Q15.</b> <code>for (var i = 0; i &lt; 3; i++) { setTimeout(() =&gt; console.log(i), 0); }</code></summary>

```text
3
3
3
```
Change `var` to `let` → `0 1 2`.
</details>

<details>
<summary><b>Q16.</b> <code>console.log(Boolean("false") + " " + Boolean(0));</code></summary>

```text
true false
```
</details>

<details>
<summary><b>Q17.</b> <code>sayHi(); var sayHi = function () { console.log("Hi"); };</code></summary>

```text
TypeError: sayHi is not a function
```
</details>

<details>
<summary><b>Q18.</b> <code>console.log([] == false);  console.log(!![]);</code></summary>

```text
true
true
```
</details>

---

## 🧠 Logical Problem Solving with Solutions

> [!NOTE]
> Pehle **neengale try pannunga**. Stuck aanaa mattum solution paarunga. Logic-ai **paper-la step-by-step** ezhudhi paarunga! ✍️

### 🟢 Beginner

<details>
<summary><b>Problem 1: Check Even or Odd</b></summary>

**Logic:** A number divisible by 2 (remainder 0) is even.

```js
function checkEvenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10)); // Even
console.log(checkEvenOdd(7));  // Odd
```
</details>

<details>
<summary><b>Problem 2: Swap Two Numbers (using a temp variable)</b></summary>

```js
let a = 5;
let b = 10;

const temp = a;
a = b;
b = temp;

console.log(a, b); // 10 5
```
</details>

<details>
<summary><b>Problem 3: Find the Largest of Three Numbers</b></summary>

```js
function largest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

console.log(largest(4, 9, 2)); // 9
```
</details>

<details>
<summary><b>Problem 4: Leap Year</b></summary>

**Logic:** Divisible by 4 **and** not by 100 — **or** divisible by 400.

```js
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
```
</details>

<details>
<summary><b>Problem 5: FizzBuzz (1 to 15)</b></summary>

**Logic:** Multiples of 3 → "Fizz", of 5 → "Buzz", of both → "FizzBuzz". Check the **both** case first!

```js
for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
```
</details>

<details>
<summary><b>Problem 6: Sum of 1 to N</b></summary>

```js
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(10)); // 55
```
</details>

<details>
<summary><b>Problem 7: Factorial</b></summary>

```js
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120
```
</details>

### 🟡 Intermediate

<details>
<summary><b>Problem 8: Reverse a String</b></summary>

```js
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("JavaScript")); // tpircSavaJ
```
</details>

<details>
<summary><b>Problem 9: Palindrome Check</b></summary>

```js
function isPalindrome(str) {
  const clean = str.toLowerCase();
  let reversed = "";
  for (const ch of clean) {
    reversed = ch + reversed;
  }
  return clean === reversed;
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
```
</details>

<details>
<summary><b>Problem 10: Count Vowels</b></summary>

```js
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const ch of str.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

console.log(countVowels("Interview")); // 4
```
</details>

<details>
<summary><b>Problem 11: Prime Number Check</b></summary>

**Logic:** A prime is > 1 with no divisor between 2 and √n.

```js
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(17)); // true
console.log(isPrime(21)); // false
```
</details>

<details>
<summary><b>Problem 12: Sum of Digits</b></summary>

```js
function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;           // last digit
    n = Math.floor(n / 10);  // remove last digit
  }
  return sum;
}

console.log(sumOfDigits(1234)); // 10
```
</details>

<details>
<summary><b>Problem 13: Reverse a Number</b></summary>

```js
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseNumber(1234)); // 4321
```
</details>

<details>
<summary><b>Problem 14: Fibonacci Series (first N terms)</b></summary>

```js
function fibonacci(n) {
  const series = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    const next = a + b;
    a = b;
    b = next;
  }
  return series;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```
</details>

### 🔴 Challenging

<details>
<summary><b>Problem 15: Find the Largest Number in an Array</b></summary>

```js
function findMax(arr) {
  let max = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}

console.log(findMax([3, 9, 2, 15, 7])); // 15
```
</details>

<details>
<summary><b>Problem 16: Remove Duplicates from an Array</b></summary>

```js
function removeDuplicates(arr) {
  const unique = [];
  for (const item of arr) {
    if (!unique.includes(item)) unique.push(item);
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
</details>

<details>
<summary><b>Problem 17: Character Frequency Counter</b></summary>

```js
function charFrequency(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  return freq;
}

console.log(charFrequency("hello")); // { h: 1, e: 1, l: 2, o: 1 }
```
</details>

<details>
<summary><b>Problem 18: GCD of Two Numbers (Euclid's Algorithm)</b></summary>

```js
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(48, 18)); // 6
```
</details>

<details>
<summary><b>Problem 19: Armstrong Number</b></summary>

**Logic:** Sum of each digit raised to the power of digit-count equals the number. (153 = 1³ + 5³ + 3³)

```js
function isArmstrong(n) {
  const digits = String(n);
  let sum = 0;

  for (const d of digits) {
    sum += Number(d) ** digits.length;
  }
  return sum === n;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
```
</details>

<details>
<summary><b>Problem 20: Print a Number Pyramid</b></summary>

```js
const rows = 4;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  console.log(line);
}
```

```text
1 
1 2 
1 2 3 
1 2 3 4 
```
</details>

---

## 💪 Practice Exercises

> Solve these in separate files like `exercises/ex01.js`. **Don't copy — type it!** ⌨️

### 📦 Variables & Data Types
1. Declare variables for your name, age, city, and `isStudent`. Print them with a template literal.
2. Create a `const` object for a product (`name`, `price`, `stock`). Update `stock` and print it. Then try reassigning the object and observe the error.
3. Print the `typeof` of 10 different values, including `null`, `[]`, and `NaN`.
4. Show why `0.1 + 0.2 !== 0.3` and write a safe comparison.

### 🔄 Type Conversion & Operators
5. Convert `"123abc"` to a number using `Number()` and `parseInt()`. Compare the results.
6. Predict then verify: `"10" - 5`, `"10" + 5`, `true + 1`, `[] + {}`.
7. Write a program using `||` and `??` that shows the difference with `0`, `""`, and `null`.
8. Use the ternary operator to print "Pass" or "Fail" for a mark.

### 🔀 Conditions
9. Grade calculator: marks → A, B, C, D, or Fail (use `if...else if`).
10. Day-of-week program using `switch` (1–7), with a `default` case.
11. Check whether a user can log in: `username` non-empty **and** `password.length >= 8`.
12. Leap year checker using only logical operators.

### 🔁 Loops
13. Print multiplication tables from 1 to 10 for a given number.
14. Print all even numbers between 1 and 50.
15. Loop through an array of 5 skills with `for...of` and print each with its index.
16. Loop through an object's keys with `for...in` and print `key: value`.
17. Print this pattern using nested loops:
    ```text
    * * * * *
    * * * *
    * * *
    * *
    *
    ```
18. Use `break` to stop at the first number divisible by 7 in the range 50–100.

### 🔧 Functions & Arrow Functions
19. Write `calculateTax(amount, rate = 18)` using a default parameter.
20. Write `sum(...numbers)` using rest parameters.
21. Convert 5 normal functions you wrote earlier into arrow functions.
22. Write a function `makeCounter()` that returns a function that increments and returns a count (closure).
23. Write a recursive function to calculate the sum of digits.

### 🔭 Scope & Hoisting
24. Demonstrate block scope with `var` vs `let` inside an `if` block.
25. Predict output (then verify) of a program that uses `var` hoisting and a function expression called before definition.
26. Fix the classic `var` loop + `setTimeout` bug.

### 🎭 Truthy / Falsy
27. Write a function `isEmpty(value)` that returns `true` for `""`, `null`, `undefined`, `[]`, and `{}`.
28. Test 15 different values with `Boolean()` and group them into truthy and falsy.

---

## 🎮 Mini Project

### 🎓 Student Report Card Generator (Console App)

**Goal:** Combine everything from Level 1 — variables, data types, conditions, loops, functions, arrow functions, scope, and truthy/falsy.

**Requirements**

- [x] Store at least 5 students (name + marks in 5 subjects)
- [x] Calculate **total** and **average** for each student
- [x] Assign a **grade** using conditions
- [x] Show **Pass / Fail** (fail if any subject < 35)
- [x] Display the **topper**
- [x] Show the **class average**
- [x] Handle missing/invalid marks using `??`, `Number.isNaN()`

**Starter Solution**

```js
"use strict";

// 📦 Data
const students = [
  { name: "Arun",  marks: [85, 90, 78, 92, 88] },
  { name: "Divya", marks: [95, 89, 94, 91, 97] },
  { name: "Karthik", marks: [60, 45, 70, 30, 55] },
  { name: "Meena", marks: [72, 68, 80, 75, 79] },
  { name: "Ravi",  marks: [40, 50, 35, 45, null] }, // missing mark!
];

// 🔧 Helper functions
const calculateTotal = (marks) => {
  let total = 0;
  for (const mark of marks) {
    const value = Number(mark ?? 0);          // null/undefined → 0
    total += Number.isNaN(value) ? 0 : value; // invalid → 0
  }
  return total;
};

const calculateAverage = (total, count) => total / count;

const getGrade = (average) => {
  if (average >= 90) return "A+";
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "F";
};

const hasFailedAnySubject = (marks) => {
  for (const mark of marks) {
    if ((mark ?? 0) < 35) return true;
  }
  return false;
};

// 🧮 Build report
const report = students.map((student) => {
  const total = calculateTotal(student.marks);
  const average = calculateAverage(total, student.marks.length);

  return {
    name: student.name,
    total,
    average: Number(average.toFixed(2)),
    grade: getGrade(average),
    result: hasFailedAnySubject(student.marks) ? "Fail" : "Pass",
  };
});

// 🖨️ Print report
console.log("========== 🎓 STUDENT REPORT CARD ==========");
for (const row of report) {
  console.log(
    `${row.name.padEnd(8)} | Total: ${String(row.total).padStart(3)} | ` +
    `Avg: ${String(row.average).padStart(5)} | Grade: ${row.grade.padEnd(2)} | ${row.result}`
  );
}

// 🏆 Topper
let topper = report[0];
for (const row of report) {
  if (row.total > topper.total) topper = row;
}
console.log(`\n🏆 Topper: ${topper.name} (${topper.total})`);

// 📊 Class average
let sumOfAverages = 0;
for (const row of report) sumOfAverages += row.average;
console.log(`📊 Class Average: ${(sumOfAverages / report.length).toFixed(2)}`);
```

**🚀 Bonus Challenges**

1. Show the **subject-wise highest mark**.
2. Print a **rank list** (sort by total — hint: `report.sort((a, b) => b.total - a.total)`).
3. Add a function `addStudent(name, marks)` that validates input before adding.
4. Print a **star-rating** (⭐) per grade using `repeat()`.

---

## 🚨 Common Beginner Mistakes

| # | ❌ Mistake | ✅ Fix |
|---|---|---|
| 1 | Using `=` instead of `===` in conditions: `if (a = 5)` | Use `===` for comparison |
| 2 | Using `var` everywhere | Default to `const`, use `let` when needed |
| 3 | Thinking `const` makes objects immutable | It only prevents **reassignment**; use `Object.freeze()` for shallow immutability |
| 4 | Forgetting `break` in `switch` | Add `break` (or `return`) in each case |
| 5 | Using `typeof` to detect arrays or `null` | `Array.isArray(x)`, `x === null` |
| 6 | `"5" + 3` expecting `8` | Convert first: `Number("5") + 3` |
| 7 | Comparing with `NaN` using `===` | `Number.isNaN(x)` |
| 8 | Using `\|\|` for defaults when `0` or `""` is valid | Use `??` |
| 9 | Off-by-one errors in loops (`<=` vs `<`) | Trace first and last iteration manually |
| 10 | Infinite loops (forgetting to update the counter) | Always verify the loop condition changes |
| 11 | Using `for...in` on arrays | Use `for...of` or a regular `for` loop |
| 12 | Forgetting `return` in functions | Remember: no `return` → `undefined` |
| 13 | Calling a function expression before it's defined | Define first, or use a declaration |
| 14 | Using arrow functions as object methods needing `this` | Use regular method syntax |
| 15 | Assuming `[]` and `{}` are falsy | They are **truthy**; check `.length` / `Object.keys()` |
| 16 | Creating accidental globals (`x = 5`) | Always declare; use `"use strict"` |
| 17 | Expecting `0.1 + 0.2 === 0.3` | Compare with a tolerance (`Number.EPSILON`) |
| 18 | Mixing `BigInt` and `Number` | Convert explicitly, keep the same type |

---

## ✅ Learning Checklist

Tick each item only when you can **explain it without looking** and **write the code from scratch**.

### 📦 Variables & Data Types
- [ ] I can explain `var`, `let`, `const` differences
- [ ] I understand the Temporal Dead Zone
- [ ] I know all 7 primitive types
- [ ] I can explain primitive vs reference types
- [ ] I know why `typeof null` is `"object"`

### 🔄 Conversion, Operators & Equality
- [ ] I can predict implicit coercion results
- [ ] I can use `Number()`, `String()`, `Boolean()`, `parseInt()`
- [ ] I know `&&`, `||`, `!`, `??`, `?.`, and ternary
- [ ] I always know when to use `===` vs `==`

### 🔀 Control Flow
- [ ] I can write `if / else if / else` and `switch`
- [ ] I can use `for`, `while`, `do...while`, `for...of`, `for...in`
- [ ] I can use `break` and `continue`
- [ ] I can print patterns with nested loops

### 🔧 Functions & Scope
- [ ] I can write declarations, expressions, and arrow functions
- [ ] I understand parameters, defaults, rest, and return values
- [ ] I can explain global, function, and block scope
- [ ] I can explain closures with a simple example
- [ ] I can predict hoisting behavior
- [ ] I can list all 8 falsy values from memory

### 🎯 Interview & Problem Solving
- [ ] I solved all 20 logical problems without looking at solutions
- [ ] I answered all rapid-fire questions confidently
- [ ] I solved the output-prediction questions correctly
- [ ] I completed the mini project

> 🏁 **All ticked?** Congratulations! You're ready for **Level 2: Arrays, Objects, Array Methods, ES6+ and Asynchronous JavaScript**. 🚀

---

## 📁 Recommended Repository Structure

```text
javascript-level-1/
│
├── README.md
├── package.json
│
├── 01-variables/
│   ├── variables.js
│   └── interview-questions.md
├── 02-data-types/
│   └── data-types.js
├── 03-type-conversion/
│   └── type-conversion.js
├── 04-operators/
│   └── operators.js
├── 05-equality/
│   └── equality.js
├── 06-conditionals/
│   └── conditionals.js
├── 07-loops/
│   └── loops.js
├── 08-functions/
│   └── functions.js
├── 09-arrow-functions/
│   └── arrow-functions.js
├── 10-scope/
│   └── scope.js
├── 11-hoisting/
│   └── hoisting.js
├── 12-truthy-falsy/
│   └── truthy-falsy.js
│
├── interview/
│   ├── rapid-fire.md
│   └── output-prediction.js
├── problems/
│   ├── beginner/
│   ├── intermediate/
│   └── challenging/
├── exercises/
│   └── ex01.js ... ex28.js
└── mini-project/
    └── report-card.js
```

---

## 📚 Official Learning Resources

| Resource | Link |
|---|---|
| 📖 MDN JavaScript Guide | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide> |
| 📖 MDN JavaScript Reference | <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference> |
| 📜 ECMAScript Specification | <https://tc39.es/ecma262/> |
| 🟢 Node.js Documentation | <https://nodejs.org/en/docs> |
| 📘 javascript.info | <https://javascript.info/> |
| 🧪 JavaScript Visualizer (see code run) | <https://www.jsv9000.app/> |

---

<div align="center">

### 🌟 If this repository helped you, give it a ⭐ and share it with your friends!

**Happy Coding! 💻🔥**

*"Fundamentals strong-ah irundha, endha framework-um easy dhaan."*

</div>
