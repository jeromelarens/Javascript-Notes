# JavaScript Array Methods – 40 Interview Coding Problems

**Mastering `map()`, `filter()`, and `reduce()` from Beginner to Advanced**

*Complete Interview Preparation with Built-in Methods, Custom Implementations, Internal Execution, English Answers, and Thunglish Explanations.*

---

## Project Description

This repository is a self-contained interview preparation program for **freshers** targeting MERN Stack, JavaScript, Node.js, Full Stack, and Junior Software Developer roles. It contains **40 graded problems** on `map()`, `filter()`, and `reduce()`, followed by core-concept questions, tricky output questions, custom implementations, real-world MERN applications, and a full mock interview.

Every problem follows the same **7-step approach**, and every step is explained twice:

- **English** – interview-ready, professional, simple.
- **Thunglish** (Tamil + English) – conversational explanation, like a mentor sitting next to you in a classroom.

> [!NOTE]
> All code runs on plain Node.js (v18 or later). No external libraries are used. Every **Output** block in this README was produced by actually running the code above it.

## Learning Objectives

After finishing this repository you will be able to:

1. Choose correctly between `map()`, `filter()`, `reduce()`, and their combinations.
2. Solve each problem with the built-in method **and** with plain `for` loops.
3. Trace the execution iteration by iteration (element, index, accumulator, condition).
4. Explain your solution in a clear 30-second and 90-second interview answer.
5. State accurate time and space complexity, not just "O(n) for everything".
6. Write your own `myMap`, `myFilter`, `myReduce` and explain what a simplified version misses.
7. Apply these methods in real React, Node.js, and MongoDB-result scenarios.

## Technologies Used

| Technology | Purpose |
|---|---|
| JavaScript (ES6+) | Language used for every solution |
| Node.js (v18+) | Running and verifying all code |
| Markdown | This README |
| React / Express / MongoDB (concepts) | Real-world sections |

## Prerequisites

- Variables (`let`, `const`), data types, operators.
- Arrays and objects, basic `for` loops, `if` conditions.
- Writing and calling functions; arrow functions `(x) => x * 2`.
- Node.js installed. Run any snippet with `node file.js`.

## Repository Learning Roadmap

| Stage | What you do | Problems / Sections |
|---|---|---|
| 1 | Learn `map()` and `filter()` basics, and `reduce()` with a single number | Problems 1–10 |
| 2 | Work with arrays of objects, combine methods | Problems 11–20 |
| 3 | Build objects/arrays with `reduce()`, handle edge cases | Problems 21–30 |
| 4 | Solve real-world MERN style data problems | Problems 31–40 |
| 5 | Strengthen fundamentals | Section A |
| 6 | Practice output prediction | Section B |
| 7 | Understand internals by building your own methods | Section C |
| 8 | Apply to real projects | Section D |
| 9 | Simulate the interview | Section E |

> [!TIP]
> **How to study each problem:** (1) Read Step 1 and try solving on your own first. (2) Compare with Step 3. (3) Write Step 4 without looking. (4) Trace Step 5 on paper. (5) Speak Step 6 aloud. (6) Tick the checkbox.

## Table of Contents

- [Project Description](#project-description)
- [Learning Objectives](#learning-objectives)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Repository Learning Roadmap](#repository-learning-roadmap)
- [Progress Tracker](#progress-tracker)
- [Quick Reference: The Three Methods](#quick-reference-the-three-methods)
- [Level 1: Basic (Problems 1-10)](#level-1-basic-problems-1-10)
  - [Problem 1: Double Every Number in an Array](#problem-1-double-every-number-in-an-array)
  - [Problem 2: Convert All Strings into Uppercase](#problem-2-convert-all-strings-into-uppercase)
  - [Problem 3: Extract Names from an Array of Objects](#problem-3-extract-names-from-an-array-of-objects)
  - [Problem 4: Find All Even Numbers](#problem-4-find-all-even-numbers)
  - [Problem 5: Find Numbers Greater Than 50](#problem-5-find-numbers-greater-than-50)
  - [Problem 6: Filter Students Who Scored Above 60](#problem-6-filter-students-who-scored-above-60)
  - [Problem 7: Calculate the Sum of All Numbers](#problem-7-calculate-the-sum-of-all-numbers)
  - [Problem 8: Find the Maximum Number in an Array](#problem-8-find-the-maximum-number-in-an-array)
  - [Problem 9: Find the Minimum Number in an Array](#problem-9-find-the-minimum-number-in-an-array)
  - [Problem 10: Calculate the Average of Array Elements](#problem-10-calculate-the-average-of-array-elements)
- [Level 2: Intermediate (Problems 11-20)](#level-2-intermediate-problems-11-20)
  - [Problem 11: Extract Employee Names and Salaries](#problem-11-extract-employee-names-and-salaries)
  - [Problem 12: Get Employees Whose Salary Is Greater Than ₹25,000](#problem-12-get-employees-whose-salary-is-greater-than-25000)
  - [Problem 13: Find Students Who Passed the Examination](#problem-13-find-students-who-passed-the-examination)
  - [Problem 14: Calculate the Total Price of Shopping Cart Items](#problem-14-calculate-the-total-price-of-shopping-cart-items)
  - [Problem 15: Remove Duplicate Numbers from an Array](#problem-15-remove-duplicate-numbers-from-an-array)
  - [Problem 16: Count the Number of Even and Odd Numbers](#problem-16-count-the-number-of-even-and-odd-numbers)
  - [Problem 17: Find the Total Marks of Passed Students](#problem-17-find-the-total-marks-of-passed-students)
  - [Problem 18: Convert an Array of Objects into an Array of IDs](#problem-18-convert-an-array-of-objects-into-an-array-of-ids)
  - [Problem 19: Find Products Whose Price Is Between ₹500 and ₹2,000](#problem-19-find-products-whose-price-is-between-500-and-2000)
  - [Problem 20: Calculate the Total Salary of All Employees](#problem-20-calculate-the-total-salary-of-all-employees)
- [Level 3: Advanced (Problems 21-30)](#level-3-advanced-problems-21-30)
  - [Problem 21: Count the Frequency of Each Element](#problem-21-count-the-frequency-of-each-element)
  - [Problem 22: Group Employees by Department](#problem-22-group-employees-by-department)
  - [Problem 23: Find the Second-Largest Number](#problem-23-find-the-second-largest-number)
  - [Problem 24: Find the Most Frequently Occurring Element](#problem-24-find-the-most-frequently-occurring-element)
  - [Problem 25: Convert an Array of Objects into a Lookup Object](#problem-25-convert-an-array-of-objects-into-a-lookup-object)
  - [Problem 26: Find Common Elements Between Two Arrays](#problem-26-find-common-elements-between-two-arrays)
  - [Problem 27: Flatten a Nested Array by One Level](#problem-27-flatten-a-nested-array-by-one-level)
  - [Problem 28: Find Products That Are Out of Stock](#problem-28-find-products-that-are-out-of-stock)
  - [Problem 29: Calculate Total Revenue from Completed Orders](#problem-29-calculate-total-revenue-from-completed-orders)
  - [Problem 30: Extract Unique Employee Departments](#problem-30-extract-unique-employee-departments)
- [Level 4: Real-World MERN Stack Interview (Problems 31-40)](#level-4-real-world-mern-stack-interview-problems-31-40)
  - [Problem 31: Filter Active Users and Extract Their Emails](#problem-31-filter-active-users-and-extract-their-emails)
  - [Problem 32: Calculate Total Revenue from an E-commerce Order List](#problem-32-calculate-total-revenue-from-an-e-commerce-order-list)
  - [Problem 33: Group Products by Category](#problem-33-group-products-by-category)
  - [Problem 34: Find the Highest-Selling Product](#problem-34-find-the-highest-selling-product)
  - [Problem 35: Calculate the Average Rating of Products](#problem-35-calculate-the-average-rating-of-products)
  - [Problem 36: Filter Completed Tasks and Extract Their Titles](#problem-36-filter-completed-tasks-and-extract-their-titles)
  - [Problem 37: Calculate Department-Wise Employee Salary Totals](#problem-37-calculate-department-wise-employee-salary-totals)
  - [Problem 38: Find Users Who Have More Than Three Orders](#problem-38-find-users-who-have-more-than-three-orders)
  - [Problem 39: Calculate Total Cart Amount After Applying Discounts](#problem-39-calculate-total-cart-amount-after-applying-discounts)
  - [Problem 40: Generate a Dashboard Summary](#problem-40-generate-a-dashboard-summary)

## Progress Tracker

- [ ] Level 1 – Basic (1–10)
- [ ] Level 2 – Intermediate (11–20)
- [ ] Level 3 – Advanced (21–30)
- [ ] Level 4 – Real-world MERN (31–40)
- [ ] Core JavaScript Concepts
- [ ] Tricky Output Questions
- [ ] Custom Implementations
- [ ] Real-world Applications
- [ ] Mock Interview

## Quick Reference: The Three Methods

| Method | Returns | Callback returns | Output length | Use it when |
|---|---|---|---|---|
| `map(cb)` | New array | The **new value** for each element | Same as input | You want to **transform** every element |
| `filter(cb)` | New array | **Truthy/falsy** decision | Same or smaller | You want to **select** some elements |
| `reduce(cb, init)` | **Any single value** (number, object, array…) | The **new accumulator** | Anything | You want to **combine** everything into one result |

Thunglish: **map** = ovvoru item-aiyum maathi puthu array kudukkum. **filter** = condition pass aana item-ai mattum vechukkum. **reduce** = ellathayum onna kalandhu oru final result kudukkum.

---

## Level 1: Basic (Problems 1-10)

---

### Problem 1: Double Every Number in an Array

- [ ] Completed  |  **Level:** Basic  |  **Method:** `map()`

#### Step 1 – Understand the Problem

**English**
- The question: create a new array where every number is multiplied by 2.
- Input: `[2, 4, 6, 8, 10]` → Expected output: `[4, 8, 12, 16, 20]`.
- The output has the **same length** as the input; only the values change.
- Edge cases: an empty array should return `[]`; the original array should not be modified.
- The interviewer is testing whether you know `map()` is for **one-to-one transformation** and that it returns a **new array**.

**Thunglish**
- Namma kitta oru number array irukku. Ovvoru number-aiyum 2 la multiply panni puthu array create pannanum.
- Input `[2,4,6,8,10]`, output `[4,8,12,16,20]`.
- Original array maaraama irukkanum. Empty array kudutha empty array thaan return aaganum.
- Interviewer paakka virumbuvadhu: "ovvoru element-aiyum transform panna map() use pannuvaana?" nu.

#### Step 2 – Identify the Correct Method

**English**
- **`map()`** is correct: one input element produces exactly one output element.
- `filter()` only keeps or removes elements; it cannot change values.
- `reduce()` could do it but is unnecessarily complex for a simple transformation.
- Callback logic: take `num`, return `num * 2`.
- Concepts: callback function, arrow function, immutability, return value.

**Thunglish**
- Indha method (`map`) ean? Ovvoru element-kum oru puthu value venum, count maaradhu. Adhukku `map` perfect.
- `filter` value-ai maatha mudiyaadhu, select mattum pannum. `reduce` use pannalaam, aana simple velaikku overkill.
- Callback: `map` ovvoru element-aiyum callback-ku anuppum; callback return panra value puthu array-la poyidum.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [2, 4, 6, 8, 10];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
console.log(numbers); // original is unchanged
```

**Output:**

```text
[ 4, 8, 12, 16, 20 ]
[ 2, 4, 6, 8, 10 ]
```

| Line | English | Thunglish |
|---|---|---|
| `const numbers = [...]` | Declares the input array. | Input array-ai declare panrom. |
| `numbers.map((num) => num * 2)` | Calls `map`; the callback receives each element as `num` and returns `num * 2`. | `map` ovvoru element-aiyum `num` ah callback-ku kudukkum; callback `num * 2` return pannum. |
| `const doubled = ...` | `map` returns a new array, stored in `doubled`. | Puthu array `doubled` la store aagum. |
| `console.log(numbers)` | Proves the original is not mutated. | Original array maaralaye nu prove pannudhu. |

**Best practices:** use clear names (`num`), use `const`, keep the callback pure. **Common mistake:** writing `{ num * 2 }` with curly braces and no `return` → every element becomes `undefined`.

#### Step 4 – Solve Without the Built-in Method

```js
function doubleNumbers(arr) {
  const result = [];                       // empty output array
  for (let i = 0; i < arr.length; i++) {   // visit every index
    result.push(arr[i] * 2);               // transform and store
  }
  return result;
}

console.log(doubleNumbers([2, 4, 6, 8, 10]));
console.log(doubleNumbers([]));
```

**Output:**

```text
[ 4, 8, 12, 16, 20 ]
[]
```

**English:** We create an empty `result`, loop through every index, multiply the current element by 2, and push it. This is exactly what `map` does internally. An empty input never enters the loop, so `[]` is returned.

**Thunglish:** Mudhalla empty `result` array create panrom. `for` loop la 0 la irundhu last index varai poi, `arr[i] * 2` ah `push` panrom. Empty array na loop run aagaadhu, so `[]` return aagum.

#### Step 5 – Understand Internal Execution

| Iteration | Current Element | Index | Transformation | Returned Value | Output Array |
|---|---|---|---|---|---|
| 1 | 2 | 0 | 2 × 2 | 4 | [4] |
| 2 | 4 | 1 | 4 × 2 | 8 | [4, 8] |
| 3 | 6 | 2 | 6 × 2 | 12 | [4, 8, 12] |
| 4 | 8 | 3 | 8 × 2 | 16 | [4, 8, 12, 16] |
| 5 | 10 | 4 | 10 × 2 | 20 | [4, 8, 12, 16, 20] |

**English:** In each iteration `map` calls the callback with `(element, index, array)`, takes the returned value, and places it at the same index of the new array. After 5 iterations the new array is returned.

**Thunglish:** Ovvoru round-um `map` callback-ai `(element, index, array)` oda call pannum. Callback return panna value puthu array-la adhe index la pogum. 5 round mudinjadhum puthu array return aagum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` because every number must be transformed into exactly one new number. The callback returns `num * 2`, and `map` gives back a new array without changing the original."

**Detailed answer (60–90 seconds):** "The task is a one-to-one transformation, so `map()` is the right tool. `filter` would only select elements and `reduce` would be unnecessarily complex. The callback receives each element and returns its double; `map` collects the returned values into a new array of the same length. The original array is not mutated, which keeps the code predictable. Without `map`, I create an empty array, loop with a `for` loop, push `arr[i] * 2`, and return it. Both versions run in O(n) time and use O(n) space for the output."

**Thunglish:** "Ovvoru number-kum oru puthu number venum, so `map` use pannen. Callback `num * 2` return pannum, `map` adhai puthu array la serkum. Original array maaradhu. `map` illama `for` loop + `push` use pannalaam. Rendume O(n) time."

#### Step 7 – Time and Space Complexity

| Measure | Built-in `map` | Custom loop |
|---|---|---|
| Time | O(n) | O(n) |
| Auxiliary space | O(1) | O(1) |
| Output space | O(n) | O(n) |

**English:** Each element is visited exactly once, so best, average, and worst cases are all O(n). Only a few variables are used beyond the output (O(1) auxiliary). The new array holds n elements (O(n) output space). Built-in and custom versions have the same complexity.

**Thunglish:** Ovvoru element-aiyum oru dhadava thaan paakkurom, so best/average/worst ellame O(n). Extra variables konjam thaan (O(1)). Puthu array n elements, adhu output space O(n).

---

### Problem 2: Convert All Strings into Uppercase

- [ ] Completed  |  **Level:** Basic  |  **Method:** `map()`

#### Step 1 – Understand the Problem

**English**
- Convert every string in an array to uppercase.
- Input: `["arun", "bala", "kumar", "ravi"]` → Output: `["ARUN", "BALA", "KUMAR", "RAVI"]`.
- Edge cases: empty array; strings already uppercase; non-string elements (would throw on `.toUpperCase()`).
- The interviewer tests `map()` with a **string method** inside the callback.

**Thunglish**
- Array la irukkura ovvoru name-aiyum capital letters ku maathanum.
- Input `["arun","bala","kumar","ravi"]`, output `["ARUN","BALA","KUMAR","RAVI"]`.
- Number mathiri illama, ingaye string method `toUpperCase()` use pannanum.
- Edge: empty array, already uppercase string, string illatha value (error varum).

#### Step 2 – Identify the Correct Method

**English**
- `map()`: one string in, one uppercase string out.
- `filter()` cannot change values; `reduce()` is overkill.
- Callback: `(name) => name.toUpperCase()`.
- Concepts: string methods, immutability of strings (`toUpperCase` returns a new string).

**Thunglish**
- Ovvoru name-um maaranum, count same → `map`.
- `filter` change pannaadhu. `reduce` thevai illa.
- Strings immutable; `toUpperCase()` puthu string return pannum, original string maaradhu.

#### Step 3 – Solve Using the Built-in Method

```js
const names = ["arun", "bala", "kumar", "ravi"];

const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);
console.log(names);
```

**Output:**

```text
[ 'ARUN', 'BALA', 'KUMAR', 'RAVI' ]
[ 'arun', 'bala', 'kumar', 'ravi' ]
```

| Line | English | Thunglish |
|---|---|---|
| `names.map(...)` | Iterates over every name. | Ovvoru name-aiyum iterate pannum. |
| `name.toUpperCase()` | Returns a new uppercase string. | Capital letter string return pannum. |
| `console.log(names)` | Shows the original is unchanged. | Original maaralaye nu kaattum. |

**Best practice:** if the data may be dirty, guard it: `String(name).toUpperCase()`. **Common mistake:** using `forEach` and expecting a returned array (it returns `undefined`).

#### Step 4 – Solve Without the Built-in Method

```js
function toUpperList(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}

console.log(toUpperList(["arun", "bala", "kumar", "ravi"]));
```

**Output:**

```text
[ 'ARUN', 'BALA', 'KUMAR', 'RAVI' ]
```

**English:** Same pattern as `map`: create an output array, loop by index, transform each element with `toUpperCase()`, push, return. We avoid `map` but still use the string method because the problem is about arrays, not about reimplementing strings.

**Thunglish:** Pattern same: empty array, loop, `toUpperCase()` apply panni `push`, last la return. `map` use pannala, aana string method use pannirukkom.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Transformation | Returned Value | Output Array |
|---|---|---|---|---|
| 1 | "arun" (index 0) | `"arun".toUpperCase()` | "ARUN" | ["ARUN"] |
| 2 | "bala" (index 1) | `"bala".toUpperCase()` | "BALA" | ["ARUN", "BALA"] |
| 3 | "kumar" (index 2) | `"kumar".toUpperCase()` | "KUMAR" | ["ARUN", "BALA", "KUMAR"] |
| 4 | "ravi" (index 3) | `"ravi".toUpperCase()` | "RAVI" | ["ARUN", "BALA", "KUMAR", "RAVI"] |

**English:** Each call returns a new string; `map` stores it at the same index. Original strings are untouched.

**Thunglish:** Ovvoru round-layum `toUpperCase()` puthu string kudukkum, `map` adhai same index la vaikkum. Original strings appadiye irukkum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` with `toUpperCase()` in the callback, because each string needs to be converted to exactly one uppercase string, and `map` returns a new array."

**Detailed answer (60–90 seconds):** "This is a one-to-one transformation, so `map()` fits. The callback receives each name and returns `name.toUpperCase()`. Strings are immutable in JavaScript, so the original strings and the original array stay unchanged. If I cannot use `map`, I loop with a `for` loop, push the uppercase value into a result array, and return it. If the array might contain non-strings, I would validate or convert first, because calling `toUpperCase()` on a number or `undefined` throws a TypeError."

**Thunglish:** "Ovvoru name-kum oru uppercase name venum, so `map`. Original array, strings maaradhu. `map` illaina `for` loop + `push`. Array la string illatha value irundha `toUpperCase()` error throw pannum, adhai handle pannanum."

#### Step 7 – Time and Space Complexity

**English:** Time is O(n) for n names, but each `toUpperCase()` costs O(k) for a string of length k, so the precise cost is O(total characters). Auxiliary space is O(1); output space is O(n) references plus the new strings. Built-in and custom are the same.

**Thunglish:** n names na loop n dhadava odum, aana ovvoru `toUpperCase()` string length k ku O(k). So exact-aa sonna total characters ku proportional. Extra space O(1), output O(n). Rendu approach-lum same.

---

### Problem 3: Extract Names from an Array of Objects

- [ ] Completed  |  **Level:** Basic  |  **Method:** `map()`

#### Step 1 – Understand the Problem

**English**
- Given an array of user objects, return an array containing only the `name` property of each user.
- Input: `[{ id: 1, name: "Arun", city: "Chennai" }, { id: 2, name: "Bala", city: "Madurai" }, { id: 3, name: "Kumar", city: "Salem" }]`
- Expected output: `["Arun", "Bala", "Kumar"]`.
- Edge cases: empty array; objects missing `name` (would give `undefined`).
- Tests: reading properties from objects inside `map()` – the most common real-world use (API responses).

**Thunglish**
- User object array la irundhu name mattum eduthu puthu array create pannanum.
- Output `["Arun","Bala","Kumar"]`.
- `name` illatha object irundha `undefined` varum.
- Interview la API data la irundhu oru field mattum extract panra question romba common.

#### Step 2 – Identify the Correct Method

**English**
- `map()`: each object → one name (object-to-value transformation).
- `filter()` would return whole objects, not names.
- Callback: `(user) => user.name`; could also destructure: `({ name }) => name`.
- Concepts: objects, dot notation, destructuring.

**Thunglish**
- Ovvoru object-kum oru name → `map`.
- `filter` full object-ai thaan return pannum, name mattum kudukkaadhu.
- Callback `(user) => user.name`. Destructuring `({ name }) => name` nu kuda ezhudhalaam.

#### Step 3 – Solve Using the Built-in Method

```js
const users = [
  { id: 1, name: "Arun", city: "Chennai" },
  { id: 2, name: "Bala", city: "Madurai" },
  { id: 3, name: "Kumar", city: "Salem" },
];

const names = users.map((user) => user.name);

console.log(names);
```

**Output:**

```text
[ 'Arun', 'Bala', 'Kumar' ]
```

| Line | English | Thunglish |
|---|---|---|
| `const users = [...]` | Input array of objects. | Object-gal irukkura input array. |
| `users.map((user) => user.name)` | For each object, return its `name`. | Ovvoru object-lirundhum `name` return panrom. |
| `console.log(names)` | Prints array of strings. | String array print aagum. |

**Best practice:** destructure when you need one or two fields: `users.map(({ name }) => name)`. **Common mistake:** `users.map((user) => { user.name })` – braces without `return` gives `[undefined, undefined, undefined]`.

#### Step 4 – Solve Without the Built-in Method

```js
function getNames(users) {
  const names = [];
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
  return names;
}

const users = [
  { id: 1, name: "Arun", city: "Chennai" },
  { id: 2, name: "Bala", city: "Madurai" },
  { id: 3, name: "Kumar", city: "Salem" },
];

console.log(getNames(users));
console.log(getNames([]));
```

**Output:**

```text
[ 'Arun', 'Bala', 'Kumar' ]
[]
```

**English:** Loop over indices, read `users[i].name`, push into `names`. An empty array returns `[]`.

**Thunglish:** Index vaaripoi `users[i].name` ah eduthu `names` la `push` panrom. Empty array na `[]`.

#### Step 5 – Understand Internal Execution

| Iteration | Element (user) | Index | Transformation | Returned Value | Output Array |
|---|---|---|---|---|---|
| 1 | `{id:1, name:"Arun", ...}` | 0 | `user.name` | "Arun" | ["Arun"] |
| 2 | `{id:2, name:"Bala", ...}` | 1 | `user.name` | "Bala" | ["Arun", "Bala"] |
| 3 | `{id:3, name:"Kumar", ...}` | 2 | `user.name` | "Kumar" | ["Arun", "Bala", "Kumar"] |

**English:** The callback receives a reference to each object, reads one property, and returns it. The objects are not copied or changed.

**Thunglish:** Callback-ku object reference varum, adhula irundhu `name` edukkum, return pannum. Objects copy-um aagaadhu, maaravum maattaadhu.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` to transform each user object into its name. The callback returns `user.name`, and `map` produces a new array of names."

**Detailed answer (60–90 seconds):** "We need one value from every object, which is a one-to-one transformation, so `map()` is the natural choice. `filter` returns whole objects, so it is not suitable. The callback returns `user.name`, or I can destructure `({ name }) => name`. The original users array is not mutated. Without `map`, I loop, push `users[i].name` into a result array, and return it. It runs in O(n) time with O(n) output space. If some objects might lack `name`, I would filter or provide a default."

**Thunglish:** "Object-la irundhu oru field venum, ovvoru object-kum oru value → `map`. `filter` full object kudukkum, so sari illa. Callback `user.name` return pannum. `map` illaina loop + `push`. O(n) time. `name` missing-aa irundha `undefined` varum, adhai handle pannanum."

#### Step 7 – Time and Space Complexity

**English:** Time O(n): one property read per object (O(1) each). Auxiliary space O(1). Output space O(n) – the new array of name references. Same for built-in and custom.

**Thunglish:** Ovvoru object-kum oru property read (O(1)), n objects → O(n). Extra space O(1), output O(n). Rendu method-um same.

---

### Problem 4: Find All Even Numbers

- [ ] Completed  |  **Level:** Basic  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return a new array containing only the even numbers.
- Input: `[11, 22, 33, 44, 55, 66, 77, 88]` → Output: `[22, 44, 66, 88]`.
- The output can be shorter than the input (or empty if no even numbers exist).
- Edge cases: empty array; all odd numbers; negative numbers (`-4 % 2 === 0` is true, but `-3 % 2` is `-1`, so always compare with `=== 0`, never `=== 1`).
- The interviewer tests the `%` operator and the idea that `filter` **selects**, not transforms.

**Thunglish**
- Array la irundhu even numbers mattum thaniya edukkanum.
- Input `[11,22,33,44,55,66,77,88]`, output `[22,44,66,88]`.
- Output chinna array-aa irukkalaam, illa empty-aa kuda irukkalaam.
- Trick: negative number la `-3 % 2` = `-1`. So `=== 1` check panna thappu; `=== 0` check pannanum.

#### Step 2 – Identify the Correct Method

**English**
- `filter()`: keeps elements for which the callback returns a truthy value.
- `map()` would return `true/false` for every element, not select values.
- `reduce()` can do it but needlessly.
- Callback logic: `(num) => num % 2 === 0`.

**Thunglish**
- Condition pass aana element-ai mattum vechukkanum → `filter`.
- `map` use panna `true/false` array thaan kidaikkum, values illa.
- Callback `num % 2 === 0` true na element keep aagum, false na veliya poidum.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [11, 22, 33, 44, 55, 66, 77, 88];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
```

**Output:**

```text
[ 22, 44, 66, 88 ]
```

| Line | English | Thunglish |
|---|---|---|
| `numbers.filter(...)` | Tests every element with the callback. | Ovvoru element-aiyum callback la test pannum. |
| `num % 2 === 0` | Remainder zero means even; returns a boolean. | Remainder 0 na even; true/false return aagum. |
| `const evenNumbers` | Holds only elements that returned `true`. | `true` vandha elements mattum store aagum. |

**Best practice:** return a boolean expression directly. **Common mistake:** `num % 2` as the condition returns `1` (truthy) for **odd** numbers, so you would get odds.

#### Step 4 – Solve Without the Built-in Method

```js
function getEvenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(getEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88]));
console.log(getEvenNumbers([1, 3, 5]));
```

**Output:**

```text
[ 22, 44, 66, 88 ]
[]
```

**English:** Loop; if the condition is true, push the element unchanged. If nothing matches, `result` stays `[]`.

**Thunglish:** Loop la ovvoru element-kum `if` condition check; true na `push`. Edhuvume match aagala na `[]` thaan.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (`num % 2 === 0`) | True/False | Output Array |
|---|---|---|---|---|
| 1 | 11 | 11 % 2 = 1 → 1 === 0 | False | [] |
| 2 | 22 | 22 % 2 = 0 → 0 === 0 | True | [22] |
| 3 | 33 | 33 % 2 = 1 | False | [22] |
| 4 | 44 | 44 % 2 = 0 | True | [22, 44] |
| 5 | 55 | 55 % 2 = 1 | False | [22, 44] |
| 6 | 66 | 66 % 2 = 0 | True | [22, 44, 66] |
| 7 | 77 | 77 % 2 = 1 | False | [22, 44, 66] |
| 8 | 88 | 88 % 2 = 0 | True | [22, 44, 66, 88] |

**English:** `filter` evaluates the callback for each element. Only elements whose result is truthy are copied to the output; the rest are skipped.

**Thunglish:** `filter` ovvoru element-kum callback run pannum. `true` vandha element output la serum, `false` vandha skip aagum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with the condition `num % 2 === 0`. It keeps only the numbers whose remainder when divided by 2 is zero and returns them as a new array."

**Detailed answer (60–90 seconds):** "Because we need to select a subset without changing the values, `filter()` is the right method. `map` would transform every element, and `reduce` is unnecessary. The callback returns a boolean; `filter` keeps the element when it is truthy. I compare with `=== 0` rather than `=== 1` so negative odd numbers are handled correctly. Without `filter`, I loop, check the condition with `if`, and push matches into a result array. Time is O(n); output space is O(k) where k is the number of evens."

**Thunglish:** "Subset mattum venum, values maaradhu → `filter`. Callback boolean return pannum. `=== 0` check pannanum, `=== 1` thappu, negative number la fail aagum. `filter` illaina loop + `if` + `push`. O(n) time."

#### Step 7 – Time and Space Complexity

**English:** Time is O(n) in best, average, and worst cases because every element must be tested. Auxiliary space O(1). Output space is O(k), where k ≤ n is the number of matches (worst case O(n) if all are even, best case O(1)/empty). Built-in and custom are equivalent.

**Thunglish:** Ellaa element-aiyum check pannanum, so best/average/worst ellame O(n) time. Extra space O(1). Output space matched elements count k – ellame even na O(n), edhuvum illa na empty.

---

### Problem 5: Find Numbers Greater Than 50

- [ ] Completed  |  **Level:** Basic  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return all numbers strictly greater than 50.
- Input: `[12, 55, 48, 90, 67, 50, 101, 33]` → Output: `[55, 90, 67, 101]`.
- Boundary: `50` is **not** greater than 50, so it is excluded.
- Edge cases: empty array; no value above 50; strings such as `"60"` (coerced by `>`, but better to validate).
- Tests: comparison operators and boundary thinking.

**Thunglish**
- 50 ku mela irukkura numbers mattum venum.
- Input `[12,55,48,90,67,50,101,33]`, output `[55,90,67,101]`.
- 50 kooda sernthu irukku, aana "greater than" na 50 include aagaadhu. Idhu thaan boundary trap.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` with `(num) => num > 50`.
- `map()` would produce booleans; `reduce()` is unnecessary.
- Concepts: comparison operators, strict boundary (`>` vs `>=`).

**Thunglish**
- Select panra velai → `filter`. Callback `num > 50`.
- `>` vs `>=` kavanam. Question la "greater than" na `>`, "at least" na `>=`.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [12, 55, 48, 90, 67, 50, 101, 33];

const greaterThan50 = numbers.filter((num) => num > 50);

console.log(greaterThan50);
```

**Output:**

```text
[ 55, 90, 67, 101 ]
```

| Line | English | Thunglish |
|---|---|---|
| `numbers.filter(...)` | Selects elements that satisfy the callback. | Condition pass aana elements-ai select pannum. |
| `num > 50` | Strict comparison; 50 returns false. | Strict comparison; 50 `false`. |

**Best practice:** put the threshold in a named constant (`const LIMIT = 50;`) for readability. **Common mistake:** using `>=` and accidentally including 50.

#### Step 4 – Solve Without the Built-in Method

```js
function greaterThan(arr, limit) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(greaterThan([12, 55, 48, 90, 67, 50, 101, 33], 50));
```

**Output:**

```text
[ 55, 90, 67, 101 ]
```

**English:** The limit is a parameter, which makes the function reusable. Only elements strictly above the limit are pushed.

**Thunglish:** `limit` parameter-aa kudukkarathunaala function-ai ethana value kum reuse pannalaam.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (`> 50`) | True/False | Output Array |
|---|---|---|---|---|
| 1 | 12 | 12 > 50 | False | [] |
| 2 | 55 | 55 > 50 | True | [55] |
| 3 | 48 | 48 > 50 | False | [55] |
| 4 | 90 | 90 > 50 | True | [55, 90] |
| 5 | 67 | 67 > 50 | True | [55, 90, 67] |
| 6 | 50 | 50 > 50 | False | [55, 90, 67] |
| 7 | 101 | 101 > 50 | True | [55, 90, 67, 101] |
| 8 | 33 | 33 > 50 | False | [55, 90, 67, 101] |

**English:** Order of the original array is preserved. Iteration 6 (value 50) shows the boundary case.

**Thunglish:** Original order maaradhu. 6-vadhu round la 50 `false` aagudhu, idhu thaan boundary case.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with `num > 50`, which keeps only the numbers strictly greater than 50 and returns a new array."

**Detailed answer (60–90 seconds):** "Selecting a subset based on a condition is exactly what `filter()` does. The callback `num > 50` returns true or false; `filter` keeps the elements for which it is true and preserves their order. Note that 50 itself is excluded because the requirement is strictly greater. The custom version uses a `for` loop with an `if` and `push`. Time is O(n) and output space is O(k)."

**Thunglish:** "Condition base panni select panna `filter`. `num > 50`, 50 include aagaadhu (strictly greater). Order maaradhu. `filter` illaina loop + `if` + `push`. O(n) time."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in all cases (each element tested once). Auxiliary space O(1). Output space O(k), 0 ≤ k ≤ n. Built-in and custom are identical.

**Thunglish:** Ellaa element-um check → O(n). Extra space O(1). Output space matched count k. Rendu approach-um same.

---

### Problem 6: Filter Students Who Scored Above 60

- [ ] Completed  |  **Level:** Basic  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- From an array of student objects, return the students whose `marks` are **above 60**.
- Input: Arun 72, Bala 55, Kumar 88, Ravi 60, Divya 91, Meena 45.
- Expected output: Arun (72), Kumar (88), Divya (91). Ravi scored exactly 60, so he is excluded.
- Edge cases: empty array; nobody above 60; missing `marks` property.
- Tests: `filter()` on **objects** with a property comparison.

**Thunglish**
- Student object array la 60 ku mela mark vaangina students mattum venum.
- Arun 72, Kumar 88, Divya 91 → select. Ravi 60 → "above 60" illa, so veliya.
- Output la full student objects varum (name + marks).
- Interviewer paakka virumbuvadhu: object property use panni filter panna theriyuma nu.

#### Step 2 – Identify the Correct Method

**English**
- `filter()`; callback `(student) => student.marks > 60`.
- `map()` would transform, not select. `reduce()` is unnecessary.
- Concepts: objects, property access, strict comparison.

**Thunglish**
- Select panra velai → `filter`. Callback `student.marks > 60`.
- `map` maathum, select pannaadhu; `reduce` thevai illa.

#### Step 3 – Solve Using the Built-in Method

```js
const students = [
  { name: "Arun", marks: 72 },
  { name: "Bala", marks: 55 },
  { name: "Kumar", marks: 88 },
  { name: "Ravi", marks: 60 },
  { name: "Divya", marks: 91 },
  { name: "Meena", marks: 45 },
];

const topStudents = students.filter((student) => student.marks > 60);

console.log(topStudents);
```

**Output:**

```text
[
  { name: 'Arun', marks: 72 },
  { name: 'Kumar', marks: 88 },
  { name: 'Divya', marks: 91 }
]
```

| Line | English | Thunglish |
|---|---|---|
| `students.filter(...)` | Tests each student object. | Ovvoru student object-aiyum test pannum. |
| `student.marks > 60` | True only when marks exceed 60. | Marks 60 ku mela na `true`. |
| `topStudents` | Contains the **same object references**, not copies. | Same objects thaan, copy illa. |

**Best practice:** name the threshold (`PASS_MARK`). **Common mistake:** expecting only names; `filter` returns whole objects (chain `.map(s => s.name)` if names are needed).

#### Step 4 – Solve Without the Built-in Method

```js
function getStudentsAbove(students, limit) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > limit) {
      result.push(students[i]);
    }
  }
  return result;
}

const students = [
  { name: "Arun", marks: 72 },
  { name: "Bala", marks: 55 },
  { name: "Kumar", marks: 88 },
  { name: "Ravi", marks: 60 },
  { name: "Divya", marks: 91 },
  { name: "Meena", marks: 45 },
];

console.log(getStudentsAbove(students, 60));
```

**Output:**

```text
[
  { name: 'Arun', marks: 72 },
  { name: 'Kumar', marks: 88 },
  { name: 'Divya', marks: 91 }
]
```

**English:** Same pattern as `filter`: loop, test `marks`, push the whole object when it passes.

**Thunglish:** Loop, `marks` check, pass aana full object-ai `push`.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (`marks > 60`) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Arun (72) | 72 > 60 | True | [Arun] |
| 2 | Bala (55) | 55 > 60 | False | [Arun] |
| 3 | Kumar (88) | 88 > 60 | True | [Arun, Kumar] |
| 4 | Ravi (60) | 60 > 60 | False | [Arun, Kumar] |
| 5 | Divya (91) | 91 > 60 | True | [Arun, Kumar, Divya] |
| 6 | Meena (45) | 45 > 60 | False | [Arun, Kumar, Divya] |

**English:** Iteration 4 shows the boundary: 60 is not above 60.

**Thunglish:** 4-vadhu round la Ravi 60 → `false`. Boundary case.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with `student.marks > 60` to keep only students who scored above 60."

**Detailed answer (60–90 seconds):** "We need a subset of objects, so `filter()` is ideal. The callback reads the `marks` property and returns a boolean. The result contains the same object references, not copies, and the original array is untouched. Ravi with exactly 60 is excluded because the requirement says above 60. Without `filter`, I loop and push matching objects into a result array. Complexity is O(n) time, O(k) output space."

**Thunglish:** "Subset venum → `filter`. `marks > 60` boolean. Same object references thaan, copy illa. Ravi 60 → exclude. `filter` illaina loop + `if` + `push`. O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary space O(1); output space O(k) object references (not duplicated objects). Same for custom code.

**Thunglish:** n students check → O(n). Extra space O(1). Output k references. Custom-um same.

---

### Problem 7: Calculate the Sum of All Numbers

- [ ] Completed  |  **Level:** Basic  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Add all numbers of an array into a single number.
- Input: `[10, 20, 30, 40, 50]` → Output: `150`.
- Edge cases: empty array should return `0` (not an error); decimals can cause floating-point issues (`0.1 + 0.2`).
- Tests: your first understanding of the **accumulator**.

**Thunglish**
- Array la irukkura ellaa numbers-aiyum kootti oru total number kudukkanum.
- Input `[10,20,30,40,50]`, output `150`.
- Empty array na `0` return aaganum.
- Idhu thaan reduce-oda "accumulator" concept purinjukka first question.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()`: many values → one value.
- `map` and `filter` always return arrays; the sum is a number.
- Callback: `(total, num) => total + num`, initial value `0`.
- Concepts: accumulator, initial value.

**Thunglish**
- Pala values → oru value. Adhukku `reduce`.
- `map`/`filter` array thaan return pannum, namakku number venum.
- Callback `(total, num) => total + num`, initial value `0`.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
console.log([].reduce((total, num) => total + num, 0)); // empty array is safe
```

**Output:**

```text
150
0
```

| Line | English | Thunglish |
|---|---|---|
| `numbers.reduce(` | Starts folding the array into one value. | Array-ai oru value ah kudukka aarambikkum. |
| `(total, num) => total + num` | `total` is the accumulator, `num` the current element; returns the new accumulator. | `total` = ippo varai kootina value; `num` = current element; puthu total return. |
| `, 0` | Initial accumulator value. | Starting value 0. |

**Best practice:** always provide the initial value. **Common mistake:** forgetting `return` inside a `{ }` callback, so `total` becomes `undefined` on the next iteration.

#### Step 4 – Solve Without the Built-in Method

```js
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

console.log(sumArray([10, 20, 30, 40, 50]));
console.log(sumArray([]));
```

**Output:**

```text
150
0
```

**English:** `total` plays the role of the accumulator. Each loop updates it with the current element. Empty array → loop never runs → `0`.

**Thunglish:** `total` thaan accumulator. Ovvoru round-um `total` update aagum. Empty array la loop odaadhu, `0` return aagum.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (total) | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 (initial) | 10 | 0 + 10 = 10 |
| 2 | 10 | 20 | 30 |
| 3 | 30 | 30 | 60 |
| 4 | 60 | 40 | 100 |
| 5 | 100 | 50 | 150 |

**English:** The value returned by the callback in one iteration becomes the accumulator in the next iteration. After the last element, the final accumulator (150) is returned.

**Thunglish:** Oru round la callback return panra value, adutha round la accumulator aa varum. Last element-ku apuram final accumulator (150) return aagum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an accumulator starting at 0. For each number I add it to the accumulator, and at the end `reduce` returns the total."

**Detailed answer (60–90 seconds):** "Combining many values into one is the job of `reduce()`. The callback gets the accumulator and the current element, and returns the new accumulator. I pass `0` as the initial value so an empty array safely returns 0. Without `reduce`, I keep a `total` variable and update it in a `for` loop. Both are O(n) time and O(1) auxiliary space, and the result is a single number."

**Thunglish:** "Pala numbers → oru number → `reduce`. Accumulator `total` 0 la start. Ovvoru number-aiyum add. Initial value kudutha empty array kuda `0` return pannum. `reduce` illaina `let total` + `for`. O(n) time, O(1) space."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in every case; auxiliary space O(1); output space O(1) because the result is a single number. Built-in and custom are the same.

**Thunglish:** n numbers → O(n). Extra space O(1). Output oru number-aa irukkarathunaala O(1).

---

### Problem 8: Find the Maximum Number in an Array

- [ ] Completed  |  **Level:** Basic  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Return the largest number in the array without using `Math.max(...arr)`.
- Input: `[45, 12, 89, 34, 67]` → Output: `89`.
- Edge cases: empty array (no maximum exists); negative numbers; all equal values.
- Tests: using `reduce()` to carry a **"best so far"** value.

**Thunglish**
- Array la romba perusa irukkura number-ai kandupidikkanum.
- Input `[45,12,89,34,67]`, output `89`.
- Negative numbers irundha `0` la start pannaadheenga; adhu thappu answer kudukkum.
- Edge: empty array.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()`: the accumulator holds the maximum found so far.
- `filter` cannot compare elements with each other; `map` returns an array.
- Callback: `(max, num) => (num > max ? num : max)`.
- Initial value `-Infinity` makes every real number larger, including negatives.

**Thunglish**
- Accumulator la "ippo varai perusu" vaichukkalaam → `reduce`.
- Initial value `-Infinity`: yedhu number vandhalum adhai vida perusa irukkum. `0` kuduthaa negatives fail aagum.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [45, 12, 89, 34, 67];

const max = numbers.reduce((best, num) => (num > best ? num : best), -Infinity);

console.log(max);
console.log([-5, -2, -9].reduce((best, num) => (num > best ? num : best), -Infinity));
```

**Output:**

```text
89
-2
```

| Line | English | Thunglish |
|---|---|---|
| `best` | Accumulator: the largest value seen so far. | Ippo varai paartha perusu. |
| `num > best ? num : best` | Keep the larger of the two. | Rendula perusa vechukko. |
| `-Infinity` | Starting point smaller than any number. | Edhaiyum vida chinna starting value. |

**Best practice:** handle an empty array explicitly if `-Infinity` is not acceptable. **Common mistake:** starting from `0`, which breaks for all-negative arrays.

#### Step 4 – Solve Without the Built-in Method

```js
function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([45, 12, 89, 34, 67]));
console.log(findMax([]));
```

**Output:**

```text
89
-Infinity
```

**English:** `max` is the accumulator. Each element is compared and replaces `max` only if larger. For an empty array it returns `-Infinity`; production code should check `arr.length === 0` and return `undefined` or throw.

**Thunglish:** `max` variable accumulator maathiri. Perusa irundha mattum replace aagum. Empty array na `-Infinity` varum; real project la `arr.length === 0` check pannanum.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (best) | Current Value | Comparison | New Accumulator |
|---|---|---|---|---|
| 1 | -Infinity | 45 | 45 > -Infinity → true | 45 |
| 2 | 45 | 12 | 12 > 45 → false | 45 |
| 3 | 45 | 89 | 89 > 45 → true | 89 |
| 4 | 89 | 34 | 34 > 89 → false | 89 |
| 5 | 89 | 67 | 67 > 89 → false | 89 |

**English:** The accumulator changes only when a larger value appears (iterations 1 and 3).

**Thunglish:** Perusa oru value vandhaa mattum accumulator maarum (round 1 and 3).

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` where the accumulator stores the largest value seen so far, starting from `-Infinity`. At each step I keep the larger of the accumulator and the current number."

**Detailed answer (60–90 seconds):** "Finding a maximum means compressing the array into one value, so `reduce()` fits. The accumulator holds the best value so far; the callback returns `num` if it is greater, otherwise the old accumulator. I start with `-Infinity` so that negative numbers also work; starting with `0` would be a bug. Without `reduce`, I keep a `max` variable and update it in a loop. It is O(n) time, O(1) space. For an empty array I would decide on a policy such as returning `undefined`."

**Thunglish:** "Perusa number → `reduce`. Accumulator la best value. `-Infinity` la start, `0` la start panna negatives fail. `reduce` illaina `let max` + loop. O(n) time, O(1) space. Empty array handle pannanum."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in all cases (the maximum could be anywhere, so every element must be examined). Auxiliary space O(1); output O(1). Same for both implementations. Note: `Math.max(...arr)` is also O(n) but can throw a `RangeError` for very large arrays because of the argument limit.

**Thunglish:** Maximum edhula vena irukkalaam, so ellaa element-aiyum paakkanum → O(n). Space O(1). `Math.max(...arr)` romba periya array la error kudukkalaam.

---

### Problem 9: Find the Minimum Number in an Array

- [ ] Completed  |  **Level:** Basic  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Return the smallest number in the array.
- Input: `[45, 12, 89, 34, 67]` → Output: `12`.
- Edge cases: empty array; negative numbers; duplicates of the minimum.
- Tests: same accumulator pattern as Problem 8 with the comparison reversed.

**Thunglish**
- Array la romba chinna number-ai kandupidikkanum.
- Input `[45,12,89,34,67]`, output `12`.
- Maximum mathiri thaan, comparison mattum opposite.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with accumulator = smallest so far; initial value `Infinity`.
- Callback: `(min, num) => (num < min ? num : min)`.
- Other methods cannot compare elements against each other.

**Thunglish**
- `reduce`, accumulator la ippo varai chinna value. Initial `Infinity` (edhaiyum vida perusu).
- Callback `num < min ? num : min`.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [45, 12, 89, 34, 67];

const min = numbers.reduce((smallest, num) => (num < smallest ? num : smallest), Infinity);

console.log(min);
```

**Output:**

```text
12
```

| Line | English | Thunglish |
|---|---|---|
| `smallest` | Accumulator: smallest so far. | Ippo varai chinna value. |
| `num < smallest ? num : smallest` | Keep the smaller one. | Chinnadhai vechukko. |
| `Infinity` | Larger than any number, so the first element always wins. | Edhaiyum vida perusu, so first element win aagum. |

**Best practice:** `Infinity` for min, `-Infinity` for max. **Common mistake:** starting with `0` – wrong for all-positive arrays (0 would always win).

#### Step 4 – Solve Without the Built-in Method

```js
function findMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([45, 12, 89, 34, 67]));
console.log(findMin([7, 7, 7]));
```

**Output:**

```text
12
7
```

**English:** `min` starts at `Infinity` and is replaced whenever a smaller value appears. Equal values do not replace it (strict `<`), which is fine.

**Thunglish:** `min` `Infinity` la start; chinna value vandha replace. Equal value-ku replace aagaadhu, adhu problem illa.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (smallest) | Current Value | Comparison | New Accumulator |
|---|---|---|---|---|
| 1 | Infinity | 45 | 45 < Infinity → true | 45 |
| 2 | 45 | 12 | 12 < 45 → true | 12 |
| 3 | 12 | 89 | 89 < 12 → false | 12 |
| 4 | 12 | 34 | 34 < 12 → false | 12 |
| 5 | 12 | 67 | 67 < 12 → false | 12 |

**English:** The accumulator updates at iterations 1 and 2 and then stays at 12.

**Thunglish:** Round 1, 2 la update aagi, apuram 12 la nikkum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` where the accumulator keeps the smallest value so far, starting at `Infinity`."

**Detailed answer (60–90 seconds):** "It is the mirror of finding the maximum. The accumulator stores the smallest number seen so far. The callback returns the current number if it is smaller, otherwise the accumulator. I begin with `Infinity` so the first real element replaces it. A loop with a `min` variable gives the same result. Both are O(n) time and O(1) space."

**Thunglish:** "Maximum-oda opposite. Accumulator la chinna value. `Infinity` la start. `reduce` illaina `let min` + loop. O(n) time, O(1) space."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in best, average, and worst cases (every element must be inspected). Auxiliary space O(1); output O(1). Built-in and custom are equal.

**Thunglish:** Ellaa element-aiyum paakkanum → O(n). Space O(1). Rendu approach-um same.

---

### Problem 10: Calculate the Average of Array Elements

- [ ] Completed  |  **Level:** Basic  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Compute the arithmetic mean: sum of elements divided by the count.
- Input: `[70, 80, 90, 60, 100]` → Output: `80` (sum 400 ÷ 5).
- Edge cases: **empty array** (division by zero gives `NaN`); decimals.
- Tests: `reduce()` for the sum, then a post-processing step, plus edge-case awareness.

**Thunglish**
- Total-ai count la divide pannanum.
- Input `[70,80,90,60,100]`, total 400, count 5, average `80`.
- Empty array na `0/0 = NaN` varum, adhai handle pannanum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` to calculate the sum, then divide by `arr.length`.
- `map`/`filter` return arrays and cannot sum.
- Concepts: accumulator, guard clause for empty input.

**Thunglish**
- `reduce` la sum, apuram `arr.length` la divide.
- Empty array guard (`if (arr.length === 0) return 0`) kandippa venum.

#### Step 3 – Solve Using the Built-in Method

```js
const scores = [70, 80, 90, 60, 100];

function average(arr) {
  if (arr.length === 0) return 0; // guard for empty array
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

console.log(average(scores));
console.log(average([]));
```

**Output:**

```text
80
0
```

| Line | English | Thunglish |
|---|---|---|
| `if (arr.length === 0) return 0` | Avoids `0 / 0 = NaN`. | `NaN` varaama thadukkum. |
| `arr.reduce(... , 0)` | Calculates the sum. | Sum kandupidikkum. |
| `sum / arr.length` | Mean value. | Average. |

**Best practice:** decide what an empty array should return (0, `null`, or throw) and document it. **Common mistake:** dividing inside the callback, which gives wrong results.

#### Step 4 – Solve Without the Built-in Method

```js
function averageLoop(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(averageLoop([70, 80, 90, 60, 100]));
console.log(averageLoop([1, 2]));
```

**Output:**

```text
80
1.5
```

**English:** `sum` accumulates all elements and the division happens once after the loop.

**Thunglish:** Loop la `sum` kootturom, loop mudinja apuram oru dhadava divide panrom.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (sum) | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 | 70 | 70 |
| 2 | 70 | 80 | 150 |
| 3 | 150 | 90 | 240 |
| 4 | 240 | 60 | 300 |
| 5 | 300 | 100 | 400 |

**English:** After `reduce` returns 400, the average is 400 ÷ 5 = 80.

**Thunglish:** `reduce` 400 return pannum; apuram 400 ÷ 5 = 80.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` to calculate the sum and divided it by the array length. I also return 0 for an empty array to avoid `NaN`."

**Detailed answer (60–90 seconds):** "An average is a single value derived from all elements, so `reduce()` is appropriate for the sum. After that I divide by `arr.length`. The important edge case is an empty array, where `0 / 0` produces `NaN`, so I add a guard clause. The alternative is a loop with a `sum` variable. Time is O(n), auxiliary space O(1)."

**Thunglish:** "Sum-ku `reduce`, apuram `length` la divide. Empty array la `NaN` varum, so guard clause podanum. `reduce` illaina loop. O(n) time, O(1) space."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) (one pass for the sum; `arr.length` is O(1)). Auxiliary space O(1); output O(1). Built-in and custom are the same.

**Thunglish:** Oru pass la sum → O(n). `length` O(1). Space O(1).

---

> [!IMPORTANT]
> **Checkpoint – Level 1 complete.** You now know the three patterns: **map = transform**, **filter = select**, **reduce = combine into one value**. Tick the Level 1 box in the Progress Tracker before moving on.

---

## Level 2: Intermediate (Problems 11-20)

> [!NOTE]
> From here on, we work mostly with **arrays of objects**, the shape of almost every API response in MERN projects.

---

### Problem 11: Extract Employee Names and Salaries

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `map()`

#### Step 1 – Understand the Problem

**English**
- From an array of employee objects, create a new array of smaller objects containing only `name` and `salary`.
- Input: employees with `id`, `name`, `department`, `salary`.
- Expected output: `[{ name: "Arun", salary: 30000 }, { name: "Bala", salary: 22000 }, { name: "Kavya", salary: 45000 }]`.
- Edge cases: empty array; missing fields; the original objects must not be changed.
- Tests: `map()` returning a **new object** (object-to-object transformation); note the parentheses needed when returning an object literal from an arrow function.

**Thunglish**
- Employee object la irundhu `name`, `salary` mattum eduthu puthu object-gal array create pannanum.
- `id`, `department` veliya poidum.
- Arrow function la object return panna `({ ... })` nu bracket podanum, illaina JS adhai function body nu nenaichukkum.

#### Step 2 – Identify the Correct Method

**English**
- `map()`: one employee in, one reduced object out.
- `filter()` cannot reshape objects; `reduce()` would be unnecessarily verbose.
- Callback: `(emp) => ({ name: emp.name, salary: emp.salary })`.
- Concepts: object literals, implicit return, destructuring.

**Thunglish**
- Ovvoru employee-kum oru puthu object → `map`.
- `filter` object shape-ai maathaadhu.
- Implicit return la object-ai `( {} )` kulla vaikkanum.

#### Step 3 – Solve Using the Built-in Method

```js
const employees = [
  { id: 1, name: "Arun", department: "IT", salary: 30000 },
  { id: 2, name: "Bala", department: "HR", salary: 22000 },
  { id: 3, name: "Kavya", department: "IT", salary: 45000 },
];

const summary = employees.map(({ name, salary }) => ({ name, salary }));

console.log(summary);
```

**Output:**

```text
[
  { name: 'Arun', salary: 30000 },
  { name: 'Bala', salary: 22000 },
  { name: 'Kavya', salary: 45000 }
]
```

| Line | English | Thunglish |
|---|---|---|
| `({ name, salary })` (parameter) | Destructures the two fields from each employee. | Employee la irundhu rendu field-ai edukkum. |
| `=> ({ name, salary })` | Parentheses make `{}` an object literal, not a function body. | `()` irundha thaan `{}` object-aa treat aagum. |
| `summary` | New array of new objects. | Puthu object-gal array. |

**Best practice:** this "pick fields" pattern is used to avoid sending sensitive fields to the client. **Common mistake:** `=> { name, salary }` returns `undefined` for every item.

#### Step 4 – Solve Without the Built-in Method

```js
function pickNameAndSalary(employees) {
  const result = [];
  for (let i = 0; i < employees.length; i++) {
    result.push({ name: employees[i].name, salary: employees[i].salary });
  }
  return result;
}

const employees = [
  { id: 1, name: "Arun", department: "IT", salary: 30000 },
  { id: 2, name: "Bala", department: "HR", salary: 22000 },
  { id: 3, name: "Kavya", department: "IT", salary: 45000 },
];

console.log(pickNameAndSalary(employees));
```

**Output:**

```text
[
  { name: 'Arun', salary: 30000 },
  { name: 'Bala', salary: 22000 },
  { name: 'Kavya', salary: 45000 }
]
```

**English:** Loop by index, build a new object with two fields each time, and push it.

**Thunglish:** Ovvoru employee-kum puthu object (`name`, `salary`) create panni `push` panrom.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Index | Transformation | Returned Value | Output Array |
|---|---|---|---|---|---|
| 1 | Arun, IT, 30000 | 0 | pick name, salary | `{name:"Arun", salary:30000}` | [Arun-obj] |
| 2 | Bala, HR, 22000 | 1 | pick name, salary | `{name:"Bala", salary:22000}` | [Arun-obj, Bala-obj] |
| 3 | Kavya, IT, 45000 | 2 | pick name, salary | `{name:"Kavya", salary:45000}` | [Arun-obj, Bala-obj, Kavya-obj] |

**English:** Each returned object is brand new, so editing it later will not change the original employee.

**Thunglish:** Return aagura object puthu object; adhai maathinaalum original employee maaradhu.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` to convert each employee into a smaller object with only `name` and `salary`."

**Detailed answer (60–90 seconds):** "This is an object-to-object transformation, so `map()` is the right method. I destructure `name` and `salary` in the callback parameter and return a new object; the parentheses around the object literal are required for an implicit return. The original array is not mutated. Picking only needed fields is also a good practice before sending data to a client. The loop version builds the same objects and pushes them. Time is O(n), output space O(n)."

**Thunglish:** "Employee → chinna object, `map`. Destructure panni `({ name, salary })` return. Object return panna `()` mukkiyam. Original maaradhu. Loop version la `push`. O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary space O(1); output space O(n) because n new objects are created (each with a constant number of fields). Same for both versions.

**Thunglish:** n employees → O(n). N puthu objects create aagarathunaala output space O(n).

---

### Problem 12: Get Employees Whose Salary Is Greater Than ₹25,000

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return the employees whose `salary` is greater than 25000.
- Input: Arun 30000, Bala 22000, Kavya 45000, Dinesh 25000, Esha 28000.
- Expected output: Arun, Kavya, Esha. Dinesh (exactly 25000) is excluded.
- Edge cases: empty array; salary stored as a string; nobody qualifies.
- Tests: `filter()` on objects with a numeric threshold.

**Thunglish**
- 25,000 ku mela salary irukkura employees mattum venum.
- Dinesh-kku exactly 25000 → "greater than" illa → exclude.
- Salary string-aa ("30000") irundha comparison-ai kavanamaa paarkkanum.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` with `(emp) => emp.salary > 25000`.
- Whole objects are needed, so no `map`. No aggregation needed, so no `reduce`.

**Thunglish**
- Select pannanum, full employee object venum → `filter`.

#### Step 3 – Solve Using the Built-in Method

```js
const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 22000 },
  { name: "Kavya", salary: 45000 },
  { name: "Dinesh", salary: 25000 },
  { name: "Esha", salary: 28000 },
];

const highEarners = employees.filter((emp) => emp.salary > 25000);

console.log(highEarners);
```

**Output:**

```text
[
  { name: 'Arun', salary: 30000 },
  { name: 'Kavya', salary: 45000 },
  { name: 'Esha', salary: 28000 }
]
```

| Line | English | Thunglish |
|---|---|---|
| `employees.filter(...)` | Tests each employee. | Ovvoru employee-aiyum test pannum. |
| `emp.salary > 25000` | Strictly greater than 25000. | 25000 ku mela mattum. |

**Best practice:** use a constant `const MIN_SALARY = 25000;`. **Common mistake:** `>=` includes Dinesh.

#### Step 4 – Solve Without the Built-in Method

```js
function employeesAbove(employees, minSalary) {
  const result = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > minSalary) {
      result.push(employees[i]);
    }
  }
  return result;
}

const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 22000 },
  { name: "Kavya", salary: 45000 },
  { name: "Dinesh", salary: 25000 },
  { name: "Esha", salary: 28000 },
];

console.log(employeesAbove(employees, 25000));
```

**Output:**

```text
[
  { name: 'Arun', salary: 30000 },
  { name: 'Kavya', salary: 45000 },
  { name: 'Esha', salary: 28000 }
]
```

**English:** Loop, compare salary with the threshold, push the full object when true.

**Thunglish:** Loop, salary compare, true na full object `push`.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (`salary > 25000`) | True/False | Output Array |
|---|---|---|---|---|
| 1 | Arun (30000) | 30000 > 25000 | True | [Arun] |
| 2 | Bala (22000) | 22000 > 25000 | False | [Arun] |
| 3 | Kavya (45000) | 45000 > 25000 | True | [Arun, Kavya] |
| 4 | Dinesh (25000) | 25000 > 25000 | False | [Arun, Kavya] |
| 5 | Esha (28000) | 28000 > 25000 | True | [Arun, Kavya, Esha] |

**English:** Iteration 4 is the boundary case.

**Thunglish:** 4-vadhu round boundary case; 25000 → `false`.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with `emp.salary > 25000` to return only the employees above the threshold."

**Detailed answer (60–90 seconds):** "We need a subset of employee objects, so `filter()` is the right tool. The callback compares the salary with 25000 and returns a boolean. The result keeps the original order and the same object references. Dinesh with exactly 25000 is excluded because the condition is strictly greater. The loop version does the same with `if` and `push`. It is O(n) time and O(k) output space."

**Thunglish:** "Subset → `filter`. `salary > 25000` boolean. Order maaradhu. Dinesh 25000 exclude. Loop version la `if` + `push`. O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary space O(1); output space O(k) references. Identical for both implementations.

**Thunglish:** Time O(n); extra space O(1); output k references.

---

### Problem 13: Find Students Who Passed the Examination

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- A student **passes** when scoring in **every subject** at least 35 (pass mark). Return the students who passed.
- Input: each student has `name` and `marks: { maths, science, english }`.
- Expected output: students whose three marks are all ≥ 35.
- Edge cases: exactly 35 passes; one failed subject fails the student; missing subjects.
- Tests: multi-condition logic inside `filter()`.

**Thunglish**
- Ella subject layum 35 or adhukku mela vaangina student thaan pass.
- Oru subject la 35 ku kammi na fail.
- Exactly 35 → pass.
- Interviewer test: `filter` kulla complex condition (`&&`) ezhudha theriyuma.

#### Step 2 – Identify the Correct Method

**English**
- `filter()`; callback combines three conditions with `&&`.
- Alternative inside the callback: `Object.values(marks).every((m) => m >= 35)` – cleaner when subjects vary.

**Thunglish**
- Select panra velai → `filter`. Condition la `&&` use pannalaam.
- Subjects ethanaiyo irundha `Object.values(...).every(...)` better.

#### Step 3 – Solve Using the Built-in Method

```js
const students = [
  { name: "Arun", marks: { maths: 72, science: 65, english: 58 } },
  { name: "Bala", marks: { maths: 30, science: 80, english: 70 } },
  { name: "Kumar", marks: { maths: 35, science: 35, english: 35 } },
  { name: "Divya", marks: { maths: 91, science: 88, english: 94 } },
  { name: "Meena", marks: { maths: 60, science: 34, english: 72 } },
];

const PASS_MARK = 35;

const passedStudents = students.filter(({ marks }) =>
  Object.values(marks).every((mark) => mark >= PASS_MARK)
);

console.log(passedStudents.map((s) => s.name));
```

**Output:**

```text
[ 'Arun', 'Kumar', 'Divya' ]
```

| Line | English | Thunglish |
|---|---|---|
| `({ marks })` | Destructures the `marks` object. | `marks` object-ai edukkum. |
| `Object.values(marks)` | Array of the subject marks. | Subject marks array. |
| `.every(mark => mark >= PASS_MARK)` | True only if all subjects pass. | Ellaa subject-um pass na `true`. |
| `passedStudents.map(...)` | Only to print names for easy reading. | Names mattum print panna. |

**Best practice:** keep the pass mark in a constant. **Common mistake:** using `>` instead of `>=` (excludes Kumar).

#### Step 4 – Solve Without the Built-in Method

```js
function getPassedStudents(students, passMark) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    const m = students[i].marks;
    if (m.maths >= passMark && m.science >= passMark && m.english >= passMark) {
      result.push(students[i]);
    }
  }
  return result;
}

const students = [
  { name: "Arun", marks: { maths: 72, science: 65, english: 58 } },
  { name: "Bala", marks: { maths: 30, science: 80, english: 70 } },
  { name: "Kumar", marks: { maths: 35, science: 35, english: 35 } },
  { name: "Divya", marks: { maths: 91, science: 88, english: 94 } },
  { name: "Meena", marks: { maths: 60, science: 34, english: 72 } },
];

const passed = getPassedStudents(students, 35);
const names = [];
for (let i = 0; i < passed.length; i++) names.push(passed[i].name);
console.log(names);
```

**Output:**

```text
[ 'Arun', 'Kumar', 'Divya' ]
```

**English:** The three subject conditions are combined with `&&`; the student is pushed only if all are true. Names are collected with a loop (no `map`).

**Thunglish:** Moonu condition-um `&&` la serthu check. Ellaam true na dhaan `push`. Names-ai kuda loop la eduthirukkom.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (all marks ≥ 35) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Arun (72, 65, 58) | all ≥ 35 | True | [Arun] |
| 2 | Bala (30, 80, 70) | maths 30 < 35 | False | [Arun] |
| 3 | Kumar (35, 35, 35) | all ≥ 35 | True | [Arun, Kumar] |
| 4 | Divya (91, 88, 94) | all ≥ 35 | True | [Arun, Kumar, Divya] |
| 5 | Meena (60, 34, 72) | science 34 < 35 | False | [Arun, Kumar, Divya] |

**English:** `every()` stops at the first failing subject (short-circuit), so Bala and Meena are rejected early.

**Thunglish:** `every()` first fail aana subject la nirutthidum; so Bala, Meena udane reject aagirvanga.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with a condition that checks every subject mark is at least the pass mark. Only students satisfying all subjects remain."

**Detailed answer (60–90 seconds):** "Selecting students based on a rule is a `filter()` problem. The rule is that every subject must be at least 35, so inside the callback I use `Object.values(marks).every(...)`, or chain `&&` conditions when subjects are fixed. Exactly 35 passes, so I use `>=`. Without `filter`, I loop and push the student when all conditions hold. Time is O(n × s), where s is the number of subjects, which is O(n) when s is a small constant."

**Thunglish:** "Rule base panni select → `filter`. Ella subject-um ≥ 35 → `every()` or `&&`. 35 pass, so `>=`. `filter` illaina loop + `if`. Time O(n × s); s constant na O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n × s) where s = subjects per student; with a fixed number of subjects this is O(n). `every()` can stop early, so the best case per student is O(1) and the worst case O(s). Auxiliary space: O(s) for `Object.values` per student (O(1) for the `&&` version). Output space O(k).

**Thunglish:** n students × s subjects → O(n × s). `every()` early stop pannum. `Object.values` temporary array create pannum (O(s)); `&&` version la O(1).

---

### Problem 14: Calculate the Total Price of Shopping Cart Items

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Each cart item has `name`, `price`, and `quantity`. Compute the grand total: sum of `price × quantity`.
- Input: Keyboard ₹1500 × 1, Mouse ₹600 × 2, Pen Drive ₹450 × 3.
- Expected output: `1500 + 1200 + 1350 = 4050`.
- Edge cases: empty cart → 0; quantity 0; decimal prices.
- Tests: `reduce()` over objects, using more than one property.

**Thunglish**
- Ovvoru item-kum `price × quantity` kandupidichu ellathayum kootanum.
- Keyboard 1500, Mouse 1200, Pen Drive 1350 → total 4050.
- Empty cart na 0.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()`: many objects → one number. Callback: `(total, item) => total + item.price * item.quantity`, initial `0`.
- `map` + `reduce` is possible but needs two passes.

**Thunglish**
- Pala objects → oru number → `reduce`. Initial `0`.
- Oru pass la `price * quantity` yum add pannidalaam.

#### Step 3 – Solve Using the Built-in Method

```js
const cart = [
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Mouse", price: 600, quantity: 2 },
  { name: "Pen Drive", price: 450, quantity: 3 },
];

const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

console.log(totalPrice);
console.log([].reduce((total, item) => total + item.price * item.quantity, 0));
```

**Output:**

```text
4050
0
```

| Line | English | Thunglish |
|---|---|---|
| `total` | Running grand total. | Ippo varai total. |
| `item.price * item.quantity` | Line total for one item. | Oru item-oda line total. |
| `, 0` | Initial value; makes an empty cart return 0. | Empty cart la 0 return aagum. |

**Best practice:** for money, store prices in the smallest unit (paise) or round with care to avoid floating-point errors. **Common mistake:** forgetting the initial value, which makes the first object the accumulator and produces a string like `"[object Object]600"`-style garbage.

#### Step 4 – Solve Without the Built-in Method

```js
function cartTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

const cart = [
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Mouse", price: 600, quantity: 2 },
  { name: "Pen Drive", price: 450, quantity: 3 },
];

console.log(cartTotal(cart));
```

**Output:**

```text
4050
```

**English:** `total` is the accumulator; each loop adds one line total.

**Thunglish:** `total` accumulator; ovvoru loop-um oru line total add pannum.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Value (item) | New Accumulator |
|---|---|---|---|
| 1 | 0 | Keyboard: 1500 × 1 = 1500 | 1500 |
| 2 | 1500 | Mouse: 600 × 2 = 1200 | 2700 |
| 3 | 2700 | Pen Drive: 450 × 3 = 1350 | 4050 |

**English:** The final accumulator 4050 is returned.

**Thunglish:** Last accumulator 4050 return aagum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an initial value of 0, adding `price × quantity` of each item to the accumulator."

**Detailed answer (60–90 seconds):** "A cart total collapses many item objects into a single number, which is what `reduce()` does. The callback multiplies the item's price by its quantity and adds it to the running total; the initial value 0 handles an empty cart. In real applications, I would calculate money in paise or use a decimal strategy to avoid floating-point errors, and the server should recompute the total instead of trusting the client. The loop version uses a `total` variable. Both are O(n) time and O(1) space."

**Thunglish:** "Pala items → oru total → `reduce`. `price * quantity` add panrom. Initial 0 → empty cart safe. Real project la server la total recalculate pannanum. Loop version: `let total`. O(n) time."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary space O(1); output space O(1). Same for built-in and custom.

**Thunglish:** O(n) time, O(1) space.

---

### Problem 15: Remove Duplicate Numbers from an Array

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return an array with duplicates removed, keeping the **first occurrence** and the original order.
- Input: `[1, 2, 2, 3, 4, 4, 5, 1]` → Output: `[1, 2, 3, 4, 5]`.
- Edge cases: empty array; all same values; no duplicates.
- Tests: using the **index argument** of `filter()` together with `indexOf`.

**Thunglish**
- Duplicate values-ai neekki, first-aa vandha value-ai mattum vechukkanum.
- `[1,2,2,3,4,4,5,1]` → `[1,2,3,4,5]`.
- Interviewer paakka virumbuvadhu: `filter` callback ku `(element, index)` kidaikkum nu theriyuma nu.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` with `(num, index, arr) => arr.indexOf(num) === index`.
- `indexOf` returns the **first** index of a value. If the current index equals it, this is the first occurrence → keep; otherwise it is a duplicate → drop.
- `[...new Set(arr)]` is shorter and faster, but the question asks for `filter()`.

**Thunglish**
- `indexOf` first position-ai kudukkum. Current index = first position na keep, illa na duplicate → remove.
- `Set` use pannalaam, aana ingae `filter` venum.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

const unique = numbers.filter((num, index, arr) => arr.indexOf(num) === index);

console.log(unique);
console.log([...new Set(numbers)]); // alternative, for comparison
```

**Output:**

```text
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
```

| Line | English | Thunglish |
|---|---|---|
| `(num, index, arr)` | The callback receives element, its index, and the whole array. | Callback ku element, index, array moonum kidaikkum. |
| `arr.indexOf(num)` | First position of `num` in the array. | `num` mudhal mudhala vandha index. |
| `=== index` | True only for the first occurrence. | First occurrence ku mattum `true`. |

**Best practice:** for large arrays use `Set` (O(n)). **Common mistake:** using `lastIndexOf` (keeps the last occurrence and changes the order).

#### Step 4 – Solve Without the Built-in Method

```js
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1]));
console.log(removeDuplicates([]));
```

**Output:**

```text
[ 1, 2, 3, 4, 5 ]
[]
```

**English:** For each element we scan `result` manually. If it is not found, we push it. This keeps first occurrences and avoids `filter` and `indexOf`.

**Thunglish:** Ovvoru element-kum `result` la already irukka nu inner loop la check. Illa na `push`. First occurrence maathiri order-um maaradhu.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Index | `indexOf(element)` | `=== index`? | True/False | Output Array |
|---|---|---|---|---|---|---|
| 1 | 1 | 0 | 0 | 0 === 0 | True | [1] |
| 2 | 2 | 1 | 1 | 1 === 1 | True | [1, 2] |
| 3 | 2 | 2 | 1 | 1 === 2 | False | [1, 2] |
| 4 | 3 | 3 | 3 | 3 === 3 | True | [1, 2, 3] |
| 5 | 4 | 4 | 4 | 4 === 4 | True | [1, 2, 3, 4] |
| 6 | 4 | 5 | 4 | 4 === 5 | False | [1, 2, 3, 4] |
| 7 | 5 | 6 | 6 | 6 === 6 | True | [1, 2, 3, 4, 5] |
| 8 | 1 | 7 | 0 | 0 === 7 | False | [1, 2, 3, 4, 5] |

**English:** Duplicates (iterations 3, 6, 8) fail because their first position is earlier than their current index.

**Thunglish:** Duplicate-kku `indexOf` munnadi irukkura index-ai kudukkum, current index vera → `false`.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` and kept an element only when `arr.indexOf(num) === index`, meaning it is the first occurrence."

**Detailed answer (60–90 seconds):** "`filter()` passes the element, its index, and the array to the callback. `indexOf` gives the first index of a value, so comparing it with the current index tells me whether this is the first time I see it. This preserves order. The cost is that `indexOf` itself scans the array, so the overall time is O(n²). For big arrays, I would use a `Set`, which is O(n). The custom version uses nested loops, again O(n²)."

**Thunglish:** "`indexOf` first index kudukkum; current index same na first occurrence → keep. Order maaradhu. `indexOf` kulla loop irukku, so O(n²). Periya array na `Set` use pannanum (O(n)). Custom version la nested loop → O(n²)."

#### Step 7 – Time and Space Complexity

| Version | Time | Auxiliary space | Output space |
|---|---|---|---|
| `filter` + `indexOf` | O(n²) worst case | O(1) | O(u), u = unique count |
| Custom nested loops | O(n × u) ≤ O(n²) | O(1) | O(u) |
| `Set` alternative | O(n) average | O(u) | O(u) |

**English:** For each of n elements, `indexOf` may scan up to n positions. Best case (all elements the same): `indexOf` stops at position 0 each time, so about O(n). Worst case (all unique): O(n²).

**Thunglish:** n elements × `indexOf` scan (n varai) → O(n²). Ellaam same value na `indexOf` udane nirkkum → O(n). Ellaam unique na O(n²).

---

### Problem 16: Count the Number of Even and Odd Numbers

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Count how many even and how many odd numbers exist, and return both counts in one object.
- Input: `[12, 7, 8, 21, 34, 15, 6]` → Output: `{ even: 4, odd: 3 }`.
- Edge cases: empty array → `{ even: 0, odd: 0 }`; negative numbers (`-3 % 2` is `-1`, so test evenness with `=== 0`).
- Tests: `reduce()` with an **object accumulator**.

**Thunglish**
- Even evlo, odd evlo nu rendu count-um oru object la kudukkanum.
- Evens: 12, 8, 34, 6 = 4. Odds: 7, 21, 15 = 3.
- Accumulator number-aa mattum illa, object-aa kuda irukkalaam nu therinjukkanum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` because the result is a single object summarizing the array.
- Two `filter()` calls would also work but walk the array twice.
- Initial value: `{ even: 0, odd: 0 }`.

**Thunglish**
- Result oru object → `reduce`. Rendu `filter` use panna array-ai rendu dhadava paakkanum.
- Initial value `{ even: 0, odd: 0 }`.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [12, 7, 8, 21, 34, 15, 6];

const counts = numbers.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.even++;
    } else {
      acc.odd++;
    }
    return acc;
  },
  { even: 0, odd: 0 }
);

console.log(counts);
```

**Output:**

```text
{ even: 4, odd: 3 }
```

| Line | English | Thunglish |
|---|---|---|
| `{ even: 0, odd: 0 }` | Initial accumulator object. | Starting object. |
| `acc.even++` | Increments the matching counter. | Sariyaana counter-ai ethum. |
| `return acc;` | The updated object becomes the next accumulator. | Update panna object adutha round accumulator. |

**Best practice:** the initial object is created fresh for each `reduce` call, so mutating `acc` is safe here. **Common mistake:** forgetting `return acc;` – the next iteration gets `undefined` and throws.

#### Step 4 – Solve Without the Built-in Method

```js
function countEvenOdd(arr) {
  const counts = { even: 0, odd: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counts.even++;
    } else {
      counts.odd++;
    }
  }
  return counts;
}

console.log(countEvenOdd([12, 7, 8, 21, 34, 15, 6]));
console.log(countEvenOdd([]));
```

**Output:**

```text
{ even: 4, odd: 3 }
{ even: 0, odd: 0 }
```

**English:** One loop updates two counters stored in an object.

**Thunglish:** Oru loop la rendu counter update aagum.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Value | Even? | New Accumulator |
|---|---|---|---|---|
| 1 | {even:0, odd:0} | 12 | Yes | {even:1, odd:0} |
| 2 | {even:1, odd:0} | 7 | No | {even:1, odd:1} |
| 3 | {even:1, odd:1} | 8 | Yes | {even:2, odd:1} |
| 4 | {even:2, odd:1} | 21 | No | {even:2, odd:2} |
| 5 | {even:2, odd:2} | 34 | Yes | {even:3, odd:2} |
| 6 | {even:3, odd:2} | 15 | No | {even:3, odd:3} |
| 7 | {even:3, odd:3} | 6 | Yes | {even:4, odd:3} |

**English:** The same object is carried through all iterations and updated.

**Thunglish:** Same object thaan ellaa round-layum poi update aagum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an object accumulator `{ even: 0, odd: 0 }` and incremented the matching counter for each number."

**Detailed answer (60–90 seconds):** "The result is one object summarizing the array, so `reduce()` is appropriate. I start with an object containing two counters. For each number I check `num % 2 === 0` and increment either `even` or `odd`, then return the accumulator. This needs only one pass, whereas two `filter` calls would need two passes. It is O(n) time and O(1) space, because the result object has a fixed size."

**Thunglish:** "Result object → `reduce`. Accumulator `{even:0, odd:0}`. `%2 === 0` check panni counter ethanum. `return acc` marakka koodaadhu. One pass; two `filter` na two pass. O(n) time, O(1) space."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in all cases; auxiliary space O(1); output space O(1) (two numbers). Same for the custom loop.

**Thunglish:** O(n) time; space O(1) because object size fixed.

---

### Problem 17: Find the Total Marks of Passed Students

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `filter()` + `reduce()`

#### Step 1 – Understand the Problem

**English**
- First select students who passed (marks ≥ 40), then add up only their marks.
- Input: Arun 72, Bala 35, Kumar 88, Ravi 40, Meena 28.
- Passed: Arun, Kumar, Ravi → 72 + 88 + 40 = **200**.
- Edge cases: nobody passes → 0; exactly 40 passes.
- Tests: **chaining** `filter()` and `reduce()`.

**Thunglish**
- Mudhalla pass aana students-ai select pannanum, apuram avanga marks-ai kootanum.
- Arun 72, Kumar 88, Ravi 40 → total 200. Bala 35, Meena 28 fail.
- Idhu method chaining question.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` selects the passed students; `reduce()` sums their marks.
- Chaining works because `filter()` returns an array, on which `reduce()` can be called.
- A single `reduce()` with an `if` is also possible, but chaining is more readable.

**Thunglish**
- `filter` la select, `reduce` la sum. `filter` array return pannarathunaala adhula `.reduce` chain pannalaam.

#### Step 3 – Solve Using the Built-in Method

```js
const students = [
  { name: "Arun", marks: 72 },
  { name: "Bala", marks: 35 },
  { name: "Kumar", marks: 88 },
  { name: "Ravi", marks: 40 },
  { name: "Meena", marks: 28 },
];

const PASS_MARK = 40;

const totalOfPassed = students
  .filter((student) => student.marks >= PASS_MARK)
  .reduce((total, student) => total + student.marks, 0);

console.log(totalOfPassed);
```

**Output:**

```text
200
```

| Line | English | Thunglish |
|---|---|---|
| `.filter(student => student.marks >= PASS_MARK)` | Returns only passed students. | Pass aana students mattum. |
| `.reduce((total, student) => total + student.marks, 0)` | Sums the marks of those students. | Avanga marks-ai kootum. |
| `0` | Ensures an empty filtered array gives 0. | Yaarum pass aagala na 0. |

**Best practice:** keep each step in a separate line for readability. **Common mistake:** omitting the initial value; when nobody passes, `reduce` on an empty array throws a `TypeError`.

#### Step 4 – Solve Without the Built-in Methods

```js
function totalOfPassedStudents(students, passMark) {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= passMark) {
      total += students[i].marks;
    }
  }
  return total;
}

const students = [
  { name: "Arun", marks: 72 },
  { name: "Bala", marks: 35 },
  { name: "Kumar", marks: 88 },
  { name: "Ravi", marks: 40 },
  { name: "Meena", marks: 28 },
];

console.log(totalOfPassedStudents(students, 40));
```

**Output:**

```text
200
```

**English:** The filter and reduce logic merge into one loop: the `if` is the filter, `total +=` is the reduce.

**Thunglish:** `if` = filter, `total +=` = reduce. Rendayum oru loop la panniduvom.

#### Step 5 – Understand Internal Execution

**Phase 1 – `filter()`**

| Iteration | Element | Condition (`marks >= 40`) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Arun (72) | 72 ≥ 40 | True | [Arun] |
| 2 | Bala (35) | 35 ≥ 40 | False | [Arun] |
| 3 | Kumar (88) | 88 ≥ 40 | True | [Arun, Kumar] |
| 4 | Ravi (40) | 40 ≥ 40 | True | [Arun, Kumar, Ravi] |
| 5 | Meena (28) | 28 ≥ 40 | False | [Arun, Kumar, Ravi] |

**Phase 2 – `reduce()` on [Arun, Kumar, Ravi]**

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 | 72 | 72 |
| 2 | 72 | 88 | 160 |
| 3 | 160 | 40 | 200 |

**English:** The array produced by `filter` is the input of `reduce`; the final result is 200.

**Thunglish:** `filter` output thaan `reduce` input. Final 200.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I chained `filter()` to keep only passed students and `reduce()` to sum their marks, starting from 0."

**Detailed answer (60–90 seconds):** "There are two logical steps: selection and aggregation. `filter()` returns an array of passed students, and since it returns an array I can call `reduce()` on it to add the marks. I pass 0 as the initial value so the result is 0 even if nobody passes. The chain creates one intermediate array; a single `reduce` with an `if` would avoid that, at the cost of readability. Time is O(n); the intermediate array makes the space O(k)."

**Thunglish:** "Select + sum → `filter().reduce()`. Initial 0 → yaarum pass aagalana kuda safe. Chain panna temporary array create aagum (O(k) space). Single `reduce` la `if` podalaam, aana readability kammi. O(n) time."

#### Step 7 – Time and Space Complexity

**English:** `filter` is O(n) and `reduce` over k passed students is O(k), so the total is O(n + k) = O(n). Auxiliary space is O(k) for the intermediate array in the built-in chain; the custom single loop uses O(1). Output space O(1).

**Thunglish:** `filter` O(n) + `reduce` O(k) = O(n). Chain la temporary array O(k) space; custom loop la O(1).

---

### Problem 18: Convert an Array of Objects into an Array of IDs

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `map()`

#### Step 1 – Understand the Problem

**English**
- Given product objects, return an array containing only their `id` values.
- Input: ids 101, 102, 103, 104 with names and prices.
- Expected output: `[101, 102, 103, 104]`.
- Edge cases: empty array; objects missing `id`; MongoDB documents use `_id` (an ObjectId).
- Tests: extracting one field; typical when you need ids for a follow-up API call or a `$in` query.

**Thunglish**
- Object array la irundhu `id` mattum eduthu array create pannanum.
- Output `[101,102,103,104]`.
- MongoDB la field name `_id`, adhai `String(doc._id)` nu maathalaam.

#### Step 2 – Identify the Correct Method

**English**
- `map()`: each object → its id (same length output).
- Callback: `(product) => product.id`.

**Thunglish**
- Ovvoru object-kum oru id → `map`.

#### Step 3 – Solve Using the Built-in Method

```js
const products = [
  { id: 101, name: "Keyboard", price: 1500 },
  { id: 102, name: "Mouse", price: 600 },
  { id: 103, name: "Monitor", price: 8500 },
  { id: 104, name: "Pen Drive", price: 450 },
];

const ids = products.map((product) => product.id);

console.log(ids);
```

**Output:**

```text
[ 101, 102, 103, 104 ]
```

| Line | English | Thunglish |
|---|---|---|
| `products.map(...)` | Visits every product. | Ovvoru product-aiyum paakkum. |
| `product.id` | Returns the id. | `id` return. |

**Best practice:** name the result plural (`ids`). **Common mistake:** `filter` instead of `map`, which returns whole objects.

#### Step 4 – Solve Without the Built-in Method

```js
function getIds(items) {
  const ids = [];
  for (let i = 0; i < items.length; i++) {
    ids.push(items[i].id);
  }
  return ids;
}

const products = [
  { id: 101, name: "Keyboard", price: 1500 },
  { id: 102, name: "Mouse", price: 600 },
  { id: 103, name: "Monitor", price: 8500 },
  { id: 104, name: "Pen Drive", price: 450 },
];

console.log(getIds(products));
```

**Output:**

```text
[ 101, 102, 103, 104 ]
```

**English:** Loop and push each `id`.

**Thunglish:** Loop la ovvoru `id`-um `push`.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Index | Transformation | Returned Value | Output Array |
|---|---|---|---|---|---|
| 1 | Keyboard | 0 | `.id` | 101 | [101] |
| 2 | Mouse | 1 | `.id` | 102 | [101, 102] |
| 3 | Monitor | 2 | `.id` | 103 | [101, 102, 103] |
| 4 | Pen Drive | 3 | `.id` | 104 | [101, 102, 103, 104] |

**English:** Each object is reduced to one number.

**Thunglish:** Ovvoru object-um oru number-ah maarudhu.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` to transform every object into its `id`, which returns a new array of ids."

**Detailed answer (60–90 seconds):** "This is a one-to-one transformation from object to value, so `map()` is appropriate. The callback returns `product.id`. The original array stays unchanged. This is common when I need ids for a bulk delete or a database query using `$in`. The loop version pushes `items[i].id` into a result array. Time O(n), output space O(n)."

**Thunglish:** "Object → id, one-to-one → `map`. Original maaradhu. Bulk delete / `$in` query ku useful. Loop version la `push`. O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary space O(1); output O(n). Identical for both.

**Thunglish:** O(n) time, output O(n), extra O(1).

---

### Problem 19: Find Products Whose Price Is Between ₹500 and ₹2,000

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return products whose price is in the range 500 to 2000, **inclusive** of both ends.
- Input: Laptop Bag 1200, Pen 20, Headphones 2000, Keyboard 500, Monitor 8500, Mouse 499, Bottle 750.
- Expected output: Laptop Bag (1200), Headphones (2000), Keyboard (500), Bottle (750).
- Edge cases: boundary prices 500 and 2000 are included; 499 is excluded.
- Tests: **range conditions** with `&&`.

**Thunglish**
- 500 la irundhu 2000 varai (rendum include) price irukkura products venum.
- 500 → include, 2000 → include, 499 → exclude.
- `price >= 500 && price <= 2000`.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` with a compound condition: `(p) => p.price >= 500 && p.price <= 2000`.

**Thunglish**
- Select panra velai → `filter`. Rendu condition-ai `&&` la serkkanum.

#### Step 3 – Solve Using the Built-in Method

```js
const products = [
  { name: "Laptop Bag", price: 1200 },
  { name: "Pen", price: 20 },
  { name: "Headphones", price: 2000 },
  { name: "Keyboard", price: 500 },
  { name: "Monitor", price: 8500 },
  { name: "Mouse", price: 499 },
  { name: "Bottle", price: 750 },
];

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const inRange = products.filter(
  (product) => product.price >= MIN_PRICE && product.price <= MAX_PRICE
);

console.log(inRange);
```

**Output:**

```text
[
  { name: 'Laptop Bag', price: 1200 },
  { name: 'Headphones', price: 2000 },
  { name: 'Keyboard', price: 500 },
  { name: 'Bottle', price: 750 }
]
```

| Line | English | Thunglish |
|---|---|---|
| `product.price >= MIN_PRICE` | Lower bound, inclusive. | Keezha limit, include. |
| `&&` | Both conditions must be true. | Rendum true irukkanum. |
| `product.price <= MAX_PRICE` | Upper bound, inclusive. | Mela limit, include. |

**Best practice:** constants for the bounds. **Common mistake:** `||` instead of `&&` (everything passes).

#### Step 4 – Solve Without the Built-in Method

```js
function productsInRange(products, min, max) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const price = products[i].price;
    if (price >= min && price <= max) {
      result.push(products[i]);
    }
  }
  return result;
}

const products = [
  { name: "Laptop Bag", price: 1200 },
  { name: "Pen", price: 20 },
  { name: "Headphones", price: 2000 },
  { name: "Keyboard", price: 500 },
  { name: "Monitor", price: 8500 },
  { name: "Mouse", price: 499 },
  { name: "Bottle", price: 750 },
];

console.log(productsInRange(products, 500, 2000));
```

**Output:**

```text
[
  { name: 'Laptop Bag', price: 1200 },
  { name: 'Headphones', price: 2000 },
  { name: 'Keyboard', price: 500 },
  { name: 'Bottle', price: 750 }
]
```

**English:** `min` and `max` are parameters, so the function is reusable.

**Thunglish:** `min`, `max` parameter-aa kudutha ethana range kum use pannalaam.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (`>= 500 && <= 2000`) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Laptop Bag (1200) | true && true | True | [Laptop Bag] |
| 2 | Pen (20) | false | False | [Laptop Bag] |
| 3 | Headphones (2000) | true && true | True | [Laptop Bag, Headphones] |
| 4 | Keyboard (500) | true && true | True | [Laptop Bag, Headphones, Keyboard] |
| 5 | Monitor (8500) | true && false | False | [Laptop Bag, Headphones, Keyboard] |
| 6 | Mouse (499) | false | False | [Laptop Bag, Headphones, Keyboard] |
| 7 | Bottle (750) | true && true | True | [Laptop Bag, Headphones, Keyboard, Bottle] |

**English:** `&&` short-circuits: for Pen and Mouse the first condition is already false, so the second is not evaluated.

**Thunglish:** `&&` la first false na second check aagaadhu (short-circuit).

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with a range condition: price at least 500 and at most 2000."

**Detailed answer (60–90 seconds):** "A range check selects a subset, so `filter()` is the right method. The callback returns `price >= 500 && price <= 2000`; both boundaries are inclusive as required. The original order and objects are preserved. The loop version does the same with `if` and `push`. Time is O(n) and output space O(k)."

**Thunglish:** "Range select → `filter`. `>=` and `<=` `&&` la. Boundary include. Loop version la `if` + `push`. O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n), auxiliary space O(1), output space O(k). Same for built-in and custom.

**Thunglish:** O(n) time, extra O(1), output k.

---

### Problem 20: Calculate the Total Salary of All Employees

- [ ] Completed  |  **Level:** Intermediate  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Sum the `salary` of every employee.
- Input: Arun 30000, Bala 22000, Kavya 45000, Dinesh 25000, Esha 28000.
- Expected output: **150000**.
- Edge cases: empty array → 0; salary missing → `NaN` unless handled.
- Tests: `reduce()` over objects (the payroll total).

**Thunglish**
- Ellaa employees-oda salary-ai kootti total kudukkanum: 30000+22000+45000+25000+28000 = 150000.
- Salary illatha employee irundha `NaN` varum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()`: array of objects → one number. Callback: `(sum, emp) => sum + emp.salary`, initial `0`.

**Thunglish**
- Pala objects → oru number → `reduce`.

#### Step 3 – Solve Using the Built-in Method

```js
const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 22000 },
  { name: "Kavya", salary: 45000 },
  { name: "Dinesh", salary: 25000 },
  { name: "Esha", salary: 28000 },
];

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log(totalSalary);
```

**Output:**

```text
150000
```

| Line | English | Thunglish |
|---|---|---|
| `sum` | Running payroll total. | Ippo varai total. |
| `emp.salary` | Current employee's salary. | Current employee salary. |
| `0` | Initial total. | Starting value. |

**Best practice:** use `emp.salary ?? 0` if the field might be missing. **Common mistake:** `sum + emp` (adds the whole object, giving a string).

#### Step 4 – Solve Without the Built-in Method

```js
function totalSalary(employees) {
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum += employees[i].salary;
  }
  return sum;
}

const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 22000 },
  { name: "Kavya", salary: 45000 },
  { name: "Dinesh", salary: 25000 },
  { name: "Esha", salary: 28000 },
];

console.log(totalSalary(employees));
console.log(totalSalary([]));
```

**Output:**

```text
150000
0
```

**English:** `sum` is the accumulator, updated on each iteration.

**Thunglish:** `sum` accumulator; ovvoru round-um update.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 | 30000 (Arun) | 30000 |
| 2 | 30000 | 22000 (Bala) | 52000 |
| 3 | 52000 | 45000 (Kavya) | 97000 |
| 4 | 97000 | 25000 (Dinesh) | 122000 |
| 5 | 122000 | 28000 (Esha) | 150000 |

**English:** Final accumulator is 150000.

**Thunglish:** Final accumulator 150000.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an initial value of 0 and added each employee's salary to the accumulator."

**Detailed answer (60–90 seconds):** "Aggregating many records into one number is a classic `reduce()` use case. The accumulator `sum` starts at 0; each iteration adds `emp.salary` and returns it. The initial value ensures an empty list returns 0 instead of throwing. In production, I might compute payroll totals in the database with an aggregation pipeline for large data, but for in-memory arrays `reduce` is perfect. Time is O(n) and space O(1)."

**Thunglish:** "Records → total, `reduce`. Initial 0. Periya data na MongoDB `$sum` use pannalaam, chinna in-memory array na `reduce`. O(n), O(1)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary O(1); output O(1). Same for custom.

**Thunglish:** O(n) time, O(1) space.

---

> [!IMPORTANT]
> **Checkpoint – Level 2 complete.** You can now combine `filter()` and `reduce()`, build object accumulators, and use the `index` and `array` callback arguments.

---

## Level 3: Advanced (Problems 21-30)

> [!NOTE]
> Here `reduce()` stops being "just a sum". The accumulator becomes an **object** or **array**, which is the real power of `reduce()` and a favourite interview topic.

---

### Problem 21: Count the Frequency of Each Element

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Count how many times each value appears and return an object of counts.
- Input: `["apple", "banana", "apple", "orange", "banana", "apple"]`.
- Expected output: `{ apple: 3, banana: 2, orange: 1 }`.
- Edge cases: empty array → `{}`; keys such as `"constructor"` or `"__proto__"` can clash with built-in object properties (use `Object.create(null)` or a `Map` for untrusted data).
- Tests: object accumulator and the `(acc[key] || 0) + 1` pattern.

**Thunglish**
- Ovvoru item ethana dhadava vandhudhu nu count pannanum.
- Output `{ apple: 3, banana: 2, orange: 1 }`.
- Idhu interview la romba kekkura question: "frequency counter".

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with an initial value `{}`; the accumulator is the counts object.
- `map`/`filter` cannot carry state across elements.
- Callback: if the key exists, add 1; otherwise start at 1.

**Thunglish**
- State (counts) carry panna accumulator venum → `reduce`.
- Initial `{}`. Item already irundha +1, illa na 1.

#### Step 3 – Solve Using the Built-in Method

```js
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = fruits.reduce((counts, fruit) => {
  counts[fruit] = (counts[fruit] || 0) + 1;
  return counts;
}, {});

console.log(frequency);
```

**Output:**

```text
{ apple: 3, banana: 2, orange: 1 }
```

| Line | English | Thunglish |
|---|---|---|
| `counts` | Accumulator object holding counts so far. | Ippo varai count-gal object. |
| `counts[fruit] \|\| 0` | Current count, or 0 if the fruit is new (`undefined \|\| 0`). | Already irundha andha count, illa na 0. |
| `+ 1` | Increment. | Oru count ethanum. |
| `return counts` | Pass the object to the next iteration. | Adutha round ku anuppum. |
| `{}` | Initial empty object. | Starting empty object. |

**Best practice:** use `Map` when keys can be arbitrary. **Common mistake:** forgetting `return counts`.

#### Step 4 – Solve Without the Built-in Method

```js
function countFrequency(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item] = counts[item] + 1;
    }
  }
  return counts;
}

console.log(countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]));
console.log(countFrequency([]));
```

**Output:**

```text
{ apple: 3, banana: 2, orange: 1 }
{}
```

**English:** The `if/else` makes the "new key vs existing key" decision explicit.

**Thunglish:** Pudhu key na 1, already irundha +1 nu `if/else` la clear-aa ezhudhirukkom.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | {} | apple | {apple:1} |
| 2 | {apple:1} | banana | {apple:1, banana:1} |
| 3 | {apple:1, banana:1} | apple | {apple:2, banana:1} |
| 4 | {apple:2, banana:1} | orange | {apple:2, banana:1, orange:1} |
| 5 | {apple:2, banana:1, orange:1} | banana | {apple:2, banana:2, orange:1} |
| 6 | {apple:2, banana:2, orange:1} | apple | {apple:3, banana:2, orange:1} |

**English:** The same object is updated and returned each time; its final state is the answer.

**Thunglish:** Same object update aagi, last state thaan answer.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an object as accumulator. For each item I increment its count, starting from 1 if it has not appeared before."

**Detailed answer (60–90 seconds):** "The result is a summary object, so `reduce()` with `{}` as the initial value works. For each element I read the existing count with `counts[item] || 0`, add 1, store it, and return the accumulator. One pass gives all frequencies. For arbitrary keys I would prefer a `Map` to avoid prototype key collisions. Time is O(n) average (hash lookups) and space is O(u), where u is the number of distinct items."

**Thunglish:** "Summary object venum → `reduce`, initial `{}`. `counts[item] || 0` + 1. One pass. Arbitrary keys na `Map` better. O(n) time, O(u) space."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) average (object property access is O(1) on average). Auxiliary space O(1) besides the output; output space O(u) for u distinct values (best case O(1) if all are equal; worst case O(n) if all are distinct).

**Thunglish:** O(n) time. Output space distinct items count u; ellaam same na O(1), ellaam vera vera na O(n).

---

### Problem 22: Group Employees by Department

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Convert a flat array of employees into an object whose keys are departments and whose values are arrays of employees.
- Input: Arun (IT), Bala (HR), Kavya (IT), Dinesh (Finance), Esha (HR).
- Expected output: `{ IT: [Arun, Kavya], HR: [Bala, Esha], Finance: [Dinesh] }`.
- Edge cases: empty array → `{}`; missing department; preserving the original order inside each group.
- Tests: the **group-by** pattern, the most common advanced `reduce()` question.

**Thunglish**
- Flat array-ai department wise group pannanum.
- IT: Arun, Kavya. HR: Bala, Esha. Finance: Dinesh.
- Idhu thaan "groupBy" pattern; interview la romba commonaa varum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with `{}`: key = department, value = array of employees.
- Logic: if the key does not exist, create an empty array; then push the employee.
- (`Object.groupBy` exists in modern runtimes, but interviewers want the `reduce` approach.)

**Thunglish**
- `reduce`, accumulator `{}`. Department key illa na empty array create, apuram `push`.

#### Step 3 – Solve Using the Built-in Method

```js
const employees = [
  { name: "Arun", department: "IT" },
  { name: "Bala", department: "HR" },
  { name: "Kavya", department: "IT" },
  { name: "Dinesh", department: "Finance" },
  { name: "Esha", department: "HR" },
];

const byDepartment = employees.reduce((groups, emp) => {
  if (!groups[emp.department]) {
    groups[emp.department] = [];
  }
  groups[emp.department].push(emp);
  return groups;
}, {});

console.log(byDepartment);
```

**Output:**

```text
{
  IT: [
    { name: 'Arun', department: 'IT' },
    { name: 'Kavya', department: 'IT' }
  ],
  HR: [
    { name: 'Bala', department: 'HR' },
    { name: 'Esha', department: 'HR' }
  ],
  Finance: [ { name: 'Dinesh', department: 'Finance' } ]
}
```

| Line | English | Thunglish |
|---|---|---|
| `groups` | Accumulator: department → employees. | Department-wise group object. |
| `if (!groups[emp.department])` | Creates the group on first sight. | Mudhal dhadava na group create. |
| `groups[emp.department].push(emp)` | Adds the employee to its group. | Group la employee-ai serkkum. |
| `return groups` | Mandatory return. | Kandippa return. |

**Best practice:** shorthand `(groups[key] ||= []).push(emp)` (modern JS). **Common mistake:** writing `groups[key] = emp` which keeps only the last employee.

#### Step 4 – Solve Without the Built-in Method

```js
function groupByDepartment(employees) {
  const groups = {};
  for (let i = 0; i < employees.length; i++) {
    const dept = employees[i].department;
    if (groups[dept] === undefined) {
      groups[dept] = [];
    }
    groups[dept].push(employees[i]);
  }
  return groups;
}

const employees = [
  { name: "Arun", department: "IT" },
  { name: "Bala", department: "HR" },
  { name: "Kavya", department: "IT" },
  { name: "Dinesh", department: "Finance" },
  { name: "Esha", department: "HR" },
];

console.log(groupByDepartment(employees));
```

**Output:**

```text
{
  IT: [
    { name: 'Arun', department: 'IT' },
    { name: 'Kavya', department: 'IT' }
  ],
  HR: [
    { name: 'Bala', department: 'HR' },
    { name: 'Esha', department: 'HR' }
  ],
  Finance: [ { name: 'Dinesh', department: 'Finance' } ]
}
```

**English:** Same logic using a `for` loop and a plain `groups` object.

**Thunglish:** Same logic, `for` loop + `groups` object.

#### Step 5 – Understand Internal Execution

| Iteration | Current Employee | Group Exists? | Action | Accumulator (names only) |
|---|---|---|---|---|
| 1 | Arun (IT) | No | create IT, push | {IT:[Arun]} |
| 2 | Bala (HR) | No | create HR, push | {IT:[Arun], HR:[Bala]} |
| 3 | Kavya (IT) | Yes | push | {IT:[Arun, Kavya], HR:[Bala]} |
| 4 | Dinesh (Finance) | No | create Finance, push | {IT:[Arun, Kavya], HR:[Bala], Finance:[Dinesh]} |
| 5 | Esha (HR) | Yes | push | {IT:[Arun, Kavya], HR:[Bala, Esha], Finance:[Dinesh]} |

**English:** Groups are created lazily, and employees keep their original relative order.

**Thunglish:** Group-gal thevai paduradhu vandha apuram thaan create aagum; order maaradhu.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an object accumulator. For each employee I create the department's array if needed and push the employee into it."

**Detailed answer (60–90 seconds):** "Grouping converts a flat list into a keyed structure, so `reduce()` with an empty object is the standard solution. In each iteration I check whether the department key exists, create an empty array if not, push the employee, and return the accumulator. Everything is done in a single pass. The loop version has identical logic. Time is O(n) average, and space is O(n) because every employee reference is stored once in the output."

**Thunglish:** "Flat → grouped, `reduce` + `{}`. Key illa na `[]` create, `push`, `return`. One pass. O(n) time, O(n) space."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) average. Auxiliary space O(1) beyond the output. Output space O(n + d): n employee references plus d group arrays/keys (d ≤ n). Same for custom.

**Thunglish:** O(n) time. Output n references + d groups.

---

### Problem 23: Find the Second-Largest Number

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Return the second-largest **distinct** value.
- Input: `[10, 45, 23, 89, 67, 89]` → Output: `67` (the largest 89 appears twice, but it counts once).
- Edge cases: fewer than two distinct values → return `null`; duplicates of the maximum; negative numbers.
- Tests: tracking **two values** in the accumulator in a single pass (instead of sorting, which is O(n log n)).

**Thunglish**
- Rendavadhu perusa irukkura number kandupidikkanum.
- `[10,45,23,89,67,89]` → 89 rendu dhadava irukku, aana distinct paarthaal rendavadhu 67.
- Sort panni edukkalaam, aana O(n log n). Reduce la oru pass la panna O(n).

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with accumulator `{ first, second }` initialised to `-Infinity`.
- Rules for each `num`: if `num > first`, shift (`second = first`, `first = num`); else if `num < first && num > second`, set `second = num`; otherwise ignore.

**Thunglish**
- Accumulator la `first`, `second` rendu values.
- `num > first` na shift. `first` ku kammi aana `second` ku mela na `second` update. Equal na ignore.

#### Step 3 – Solve Using the Built-in Method

```js
const numbers = [10, 45, 23, 89, 67, 89];

const { second } = numbers.reduce(
  (acc, num) => {
    if (num > acc.first) {
      return { first: num, second: acc.first };
    }
    if (num < acc.first && num > acc.second) {
      return { first: acc.first, second: num };
    }
    return acc;
  },
  { first: -Infinity, second: -Infinity }
);

console.log(second === -Infinity ? null : second);
```

**Output:**

```text
67
```

| Line | English | Thunglish |
|---|---|---|
| `{ first: -Infinity, second: -Infinity }` | Both start below every number. | Rendum romba chinna value. |
| `num > acc.first` | New largest: old largest becomes second. | Pudhu perusu: pazhaya perusu second aagum. |
| `num < acc.first && num > acc.second` | New second-largest, ignoring duplicates of first. | First-ku kammi, second-ku mela. |
| `return acc` | Nothing changes. | Maatram illa. |
| `second === -Infinity ? null : second` | Handles "no second value". | Second illa na `null`. |

**Best practice:** returning new objects keeps the callback free of mutation. **Common mistake:** using `>=` for the first check, which makes the second equal to the first when duplicates exist.

#### Step 4 – Solve Without the Built-in Method

```js
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > first) {
      second = first;
      first = num;
    } else if (num < first && num > second) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 45, 23, 89, 67, 89]));
console.log(secondLargest([5, 5, 5]));
console.log(secondLargest([]));
```

**Output:**

```text
67
null
null
```

**English:** Two variables replace the accumulator object. The `else if` ensures a value equal to `first` is ignored.

**Thunglish:** Accumulator object-ku badhila `first`, `second` variables. Equal value `first` ku vandha ignore aagum.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (first, second) | Current Value | Decision | New Accumulator |
|---|---|---|---|---|
| 1 | (-Inf, -Inf) | 10 | 10 > -Inf: shift | (10, -Inf) |
| 2 | (10, -Inf) | 45 | 45 > 10: shift | (45, 10) |
| 3 | (45, 10) | 23 | 23 < 45 and 23 > 10: new second | (45, 23) |
| 4 | (45, 23) | 89 | 89 > 45: shift | (89, 45) |
| 5 | (89, 45) | 67 | 67 < 89 and 67 > 45: new second | (89, 67) |
| 6 | (89, 67) | 89 | not > 89, not < 89: ignore | (89, 67) |

**English:** The second 89 (iteration 6) is ignored, so the answer is 67, not 89.

**Thunglish:** 6-vadhu round la 89 ignore aagudhu, so answer 67.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an accumulator that tracks the largest and second-largest values in one pass, ignoring duplicates of the largest."

**Detailed answer (60–90 seconds):** "Sorting would work but costs O(n log n). With `reduce()` I keep `first` and `second`, both starting at `-Infinity`. If the number is greater than `first`, the old first becomes second; if it is between second and first, it becomes the new second; equal values are ignored so duplicates of the maximum do not become the second. If no second distinct value exists I return `null`. Time O(n), space O(1)."

**Thunglish:** "Sort O(n log n); `reduce` O(n). `first`, `second` track. Perusa vandha shift; naduvula vandha second update; equal ignore. Second illa na `null`. O(n), O(1)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in all cases (a single pass). Auxiliary space O(1) for the custom version; the `reduce` version allocates a small object per update, which is still O(1) live memory because older objects are garbage-collected. Output O(1). Compare with sorting: O(n log n) time.

**Thunglish:** One pass → O(n). Space O(1). Sort panna O(n log n).

---

### Problem 24: Find the Most Frequently Occurring Element

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Return the element that appears most often (and how many times).
- Input: `["a", "b", "a", "c", "b", "a"]` → Output: `{ item: "a", count: 3 }`.
- Edge cases: ties (this solution returns the one that appears first in the counts object); empty array → `{ item: null, count: 0 }`.
- Tests: using **two reductions**: first to count, then to pick the maximum.

**Thunglish**
- Adhikama vara element yedhu nu kandupidikkanum.
- `a` 3 dhadava → answer `a`.
- Step 1: frequency count (Problem 21). Step 2: andha counts la irundhu max edukkanum.

#### Step 2 – Identify the Correct Method

**English**
- First `reduce()` builds the frequency object; second `reduce()` over `Object.entries(counts)` keeps the entry with the largest count.
- A single-pass alternative needs the counts object anyway.

**Thunglish**
- Mudhal `reduce` frequency; rendavadhu `reduce` max entry.

#### Step 3 – Solve Using the Built-in Method

```js
const items = ["a", "b", "a", "c", "b", "a"];

// Pass 1: count frequencies
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

// Pass 2: pick the entry with the highest count
const mostFrequent = Object.entries(counts).reduce(
  (best, [item, count]) => (count > best.count ? { item, count } : best),
  { item: null, count: 0 }
);

console.log(counts);
console.log(mostFrequent);
```

**Output:**

```text
{ a: 3, b: 2, c: 1 }
{ item: 'a', count: 3 }
```

| Line | English | Thunglish |
|---|---|---|
| `Object.entries(counts)` | Converts the object to `[key, value]` pairs. | Object-ai `[key, value]` pairs array-aa maathum. |
| `[item, count]` | Destructures each pair. | Pair-ai pirikkum. |
| `count > best.count ? { item, count } : best` | Keep the larger count. | Perusa count-ai vechukko. |

**Best practice:** a strict `>` keeps the first item on ties; use `>=` to keep the last. **Common mistake:** `Object.entries` turns numeric keys into strings, so `item` would be `"1"` not `1`; use a `Map` to preserve types.

#### Step 4 – Solve Without the Built-in Methods

```js
function mostFrequent(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
  }

  let bestItem = null;
  let bestCount = 0;
  for (const key in counts) {
    if (counts[key] > bestCount) {
      bestItem = key;
      bestCount = counts[key];
    }
  }
  return { item: bestItem, count: bestCount };
}

console.log(mostFrequent(["a", "b", "a", "c", "b", "a"]));
console.log(mostFrequent([]));
```

**Output:**

```text
{ item: 'a', count: 3 }
{ item: null, count: 0 }
```

**English:** The first loop counts; the second loop (over object keys with `for...in`) finds the maximum.

**Thunglish:** Mudhal loop count; rendavadhu loop (`for...in`) max kandupidikkum.

#### Step 5 – Understand Internal Execution

**Pass 1 – counting**

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | {} | a | {a:1} |
| 2 | {a:1} | b | {a:1, b:1} |
| 3 | {a:1, b:1} | a | {a:2, b:1} |
| 4 | {a:2, b:1} | c | {a:2, b:1, c:1} |
| 5 | {a:2, b:1, c:1} | b | {a:2, b:2, c:1} |
| 6 | {a:2, b:2, c:1} | a | {a:3, b:2, c:1} |

**Pass 2 – picking the maximum**

| Iteration | Accumulator (best) | Current Entry | Comparison | New Accumulator |
|---|---|---|---|---|
| 1 | {item:null, count:0} | [a, 3] | 3 > 0 | {item:a, count:3} |
| 2 | {item:a, count:3} | [b, 2] | 2 > 3 false | {item:a, count:3} |
| 3 | {item:a, count:3} | [c, 1] | 1 > 3 false | {item:a, count:3} |

**English:** Pass 1 produces `{a:3, b:2, c:1}`; pass 2 keeps `a` because nothing beats 3.

**Thunglish:** Pass 1 `{a:3,b:2,c:1}`; pass 2 la `a` thaan max.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I first counted frequencies with `reduce()`, then used a second `reduce()` over the entries to keep the item with the highest count."

**Detailed answer (60–90 seconds):** "Finding the mode requires knowing every count, so I build a frequency object in one pass. Then I reduce over `Object.entries` keeping the best `{ item, count }`. Both passes are O(n) and O(u), so the total is O(n). Ties return the first item reached, which I would clarify with the interviewer. Also, object keys are strings, so I would use a `Map` if the original types matter."

**Thunglish:** "Mudhal count, apuram max. Rendu pass: O(n) + O(u). Tie na first element. Object key string-aa maarum, type vendumna `Map`."

#### Step 7 – Time and Space Complexity

**English:** Time O(n + u) = O(n), where u is the number of distinct elements. Auxiliary space O(u) for the counts object. Output O(1). Best case u = 1; worst case u = n, giving O(n) space.

**Thunglish:** O(n + u) = O(n). Counts object O(u) space; ellaam distinct na O(n).

---

### Problem 25: Convert an Array of Objects into a Lookup Object

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Turn an array of users into an object keyed by `id` so that a user can be found in O(1) by id.
- Input: ids 1, 2, 3 with names Arun, Bala, Kumar.
- Expected output: `{ 1: { id: 1, name: "Arun" }, 2: { id: 2, name: "Bala" }, 3: { id: 3, name: "Kumar" } }`.
- Edge cases: duplicate ids (the later one overwrites); empty array → `{}`.
- Tests: converting array → dictionary (normalisation), common in React/Redux state.

**Thunglish**
- Array-ai `id` base panni object-aa maathanum, id vechi udane user-ai edukka.
- `lookup[2]` → Bala object.
- Duplicate id irundha last one win aagum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with `{}`; the callback sets `acc[user.id] = user`.
- `map` returns arrays, not keyed objects (`Object.fromEntries(users.map(...))` is an alternative).

**Thunglish**
- Array → object → `reduce`. `acc[user.id] = user`.

#### Step 3 – Solve Using the Built-in Method

```js
const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Kumar" },
];

const usersById = users.reduce((lookup, user) => {
  lookup[user.id] = user;
  return lookup;
}, {});

console.log(usersById);
console.log(usersById[2].name);
```

**Output:**

```text
{
  '1': { id: 1, name: 'Arun' },
  '2': { id: 2, name: 'Bala' },
  '3': { id: 3, name: 'Kumar' }
}
Bala
```

| Line | English | Thunglish |
|---|---|---|
| `lookup[user.id] = user` | Uses the id as the key and the user as the value. | `id` key, `user` value. |
| `return lookup` | Pass the object on. | Adutha round ku anuppu. |
| `usersById[2].name` | O(1) lookup by id. | Id vechi udane user. |

**Best practice:** `new Map(users.map(u => [u.id, u]))` is a cleaner alternative. **Common mistake:** forgetting that object keys become strings (`2` becomes `"2"`).

#### Step 4 – Solve Without the Built-in Method

```js
function toLookup(users) {
  const lookup = {};
  for (let i = 0; i < users.length; i++) {
    lookup[users[i].id] = users[i];
  }
  return lookup;
}

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Kumar" },
];

console.log(toLookup(users)[3]);
```

**Output:**

```text
{ id: 3, name: 'Kumar' }
```

**English:** One assignment per element builds the dictionary.

**Thunglish:** Ovvoru user-kum oru assignment; dictionary ready.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | {} | {id:1, name:Arun} | {1: Arun} |
| 2 | {1: Arun} | {id:2, name:Bala} | {1: Arun, 2: Bala} |
| 3 | {1: Arun, 2: Bala} | {id:3, name:Kumar} | {1: Arun, 2: Bala, 3: Kumar} |

**English:** The objects stored are the same references as in the input array (not copies).

**Thunglish:** Store aagura objects original-oda same reference.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` to build an object keyed by `id`, so any user can be accessed in constant time."

**Detailed answer (60–90 seconds):** "Converting a list into a dictionary is an aggregation into one object, so `reduce()` is suitable. For each user I assign `lookup[user.id] = user` and return the object. This turns repeated `find()` calls, which are O(n) each, into O(1) lookups. If ids repeat, the last one wins. A `Map` is a good alternative because it preserves key types. Time O(n), space O(n)."

**Thunglish:** "List → dictionary, `reduce`. `lookup[user.id] = user`. `find()` O(n); lookup O(1). Duplicate id na last win. `Map` alternative. O(n) time, O(n) space."

#### Step 7 – Time and Space Complexity

**English:** Building: O(n) time, O(n) output space (n references). Auxiliary O(1). Later lookups are O(1) average, compared with O(n) per `find()` on the array.

**Thunglish:** Build O(n); lookup O(1) vs `find` O(n).

---

### Problem 26: Find Common Elements Between Two Arrays

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return the elements that appear in **both** arrays.
- Input: `a = [1, 2, 3, 4, 5, 6]`, `b = [4, 5, 6, 7, 8]` → Output: `[4, 5, 6]`.
- Edge cases: no common elements → `[]`; duplicates in `a` (they would repeat in the output unless removed); empty arrays.
- Tests: using one array inside the `filter()` callback of another, and awareness of `includes()` cost.

**Thunglish**
- Rendu array-layum common-aa irukkura values venum.
- `[1..6]` and `[4..8]` → `[4,5,6]`.
- `a` la duplicate irundha output la kuda duplicate varum; adhai handle pannalaam.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` over `a`, keeping `x` when `b.includes(x)`.
- `map` would return booleans; `reduce` is unnecessary.
- For large arrays, convert `b` to a `Set` for O(1) lookups.

**Thunglish**
- `a` ai `filter` pannu; `b` la irundha mattum keep.
- Periya array na `b` ai `Set` aa maathu (fast lookup).

#### Step 3 – Solve Using the Built-in Method

```js
const a = [1, 2, 3, 4, 5, 6];
const b = [4, 5, 6, 7, 8];

const common = a.filter((x) => b.includes(x));

console.log(common);

// Scalable version using a Set
const setB = new Set(b);
console.log(a.filter((x) => setB.has(x)));
```

**Output:**

```text
[ 4, 5, 6 ]
[ 4, 5, 6 ]
```

| Line | English | Thunglish |
|---|---|---|
| `a.filter(...)` | Iterates over the first array. | Mudhal array-ai iterate. |
| `b.includes(x)` | True if `x` is present in `b`. | `x` `b` la irundha `true`. |
| `new Set(b)` / `setB.has(x)` | O(1) membership test. | Fast check. |

**Best practice:** deduplicate if needed: `[...new Set(common)]`. **Common mistake:** `includes` uses `===`-like comparison, so object elements are compared by reference, not content.

#### Step 4 – Solve Without the Built-in Method

```js
function commonElements(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }
    if (found) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(commonElements([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]));
console.log(commonElements([1, 2], [3, 4]));
```

**Output:**

```text
[ 4, 5, 6 ]
[]
```

**English:** The outer loop walks `a`; the inner loop searches `b`. If found, the element is pushed.

**Thunglish:** Outer loop `a`, inner loop `b` la thedum. Kedaichaa `push`.

#### Step 5 – Understand Internal Execution

| Iteration | Element (from a) | Condition (`b.includes`) | True/False | Output Array |
|---|---|---|---|---|
| 1 | 1 | 1 in [4,5,6,7,8] | False | [] |
| 2 | 2 | 2 in b | False | [] |
| 3 | 3 | 3 in b | False | [] |
| 4 | 4 | 4 in b | True | [4] |
| 5 | 5 | 5 in b | True | [4, 5] |
| 6 | 6 | 6 in b | True | [4, 5, 6] |

**English:** Each iteration also performs an inner search of `b`, which is where the extra cost comes from.

**Thunglish:** Ovvoru round-layum `b` la search nadakkum, adhu thaan extra cost.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` on the first array and kept only the elements that `includes()` finds in the second array."

**Detailed answer (60–90 seconds):** "Selecting items from one array based on membership in another is a `filter()` problem. The callback checks `b.includes(x)`. This is O(n × m) because `includes` scans `b`. For big inputs I convert `b` to a `Set` so each check is O(1) on average, giving O(n + m). If `a` has duplicates I would remove them from the result with a `Set`."

**Thunglish:** "`a` ai filter, `b.includes(x)` check. `includes` kulla loop → O(n × m). `Set` use panna O(n + m). Duplicate irundha `Set` la remove."

#### Step 7 – Time and Space Complexity

| Version | Time | Auxiliary space | Output space |
|---|---|---|---|
| `filter` + `includes` | O(n × m) worst case | O(1) | O(k) |
| Custom nested loops | O(n × m) worst case | O(1) | O(k) |
| `filter` + `Set` | O(n + m) average | O(m) | O(k) |

**English:** Best case for the nested version: every element of `a` matches the first element of `b` → about O(n). Worst case: no match, so every inner scan covers all of `b` → O(n × m).

**Thunglish:** Match first-la kidaichaa fast; match illa na `b` full scan → O(n × m).

---

### Problem 27: Flatten a Nested Array by One Level

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Flatten only **one level** of nesting.
- Input: `[[1, 2], [3, 4], [5, [6, 7]]]` → Output: `[1, 2, 3, 4, 5, [6, 7]]` (the deeper `[6, 7]` stays nested).
- Edge cases: empty array; empty inner arrays; elements that are not arrays.
- Tests: `reduce()` with an **array accumulator** and knowing how `concat` treats arrays.

**Thunglish**
- Oru level mattum flatten pannanum. Ullae irukkura `[6,7]` appadiye irukkum.
- `[[1,2],[3,4],[5,[6,7]]]` → `[1,2,3,4,5,[6,7]]`.
- Interviewer paakkura point: "one level" nu sonnaanga, full deep flatten illa.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with `[]` as initial value, using `acc.concat(inner)`.
- `concat` spreads an array argument **one level** into the result, which matches the requirement exactly.
- (`arr.flat()` does this natively, but the question tests `reduce`.)

**Thunglish**
- `reduce`, initial `[]`. `concat` array-ai oru level vara spread pannum.

#### Step 3 – Solve Using the Built-in Method

```js
const nested = [[1, 2], [3, 4], [5, [6, 7]]];

const flat = nested.reduce((acc, inner) => acc.concat(inner), []);

console.log(flat);
console.log(nested.flat()); // native one-level flatten, for comparison
```

**Output:**

```text
[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
```

| Line | English | Thunglish |
|---|---|---|
| `acc` | Flat array built so far. | Ippo varai flat array. |
| `acc.concat(inner)` | Returns a **new** array with the elements of `inner` appended. | `inner` elements-ai serthu puthu array. |
| `[]` | Initial empty accumulator. | Starting empty array. |

**Best practice:** for large inputs prefer `flat()` or `push(...inner)`, because `concat` creates a new array every iteration. **Common mistake:** `acc.push(inner)` (does not flatten) or expecting a deep flatten.

#### Step 4 – Solve Without the Built-in Method

```js
function flattenOneLevel(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenOneLevel([[1, 2], [3, 4], [5, [6, 7]]]));
console.log(flattenOneLevel([1, [2, 3]]));
```

**Output:**

```text
[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
[ 1, 2, 3 ]
```

**English:** If the element is an array, its items are pushed one by one; otherwise the element itself is pushed. Items inside are **not** inspected further, so only one level is flattened.

**Thunglish:** Array na ullae irukkurathai oru oru-aa `push`, illa na element-ai `push`. Ullae ullathu check pannaadhadhunaala one level thaan.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | [] | [1, 2] | [1, 2] |
| 2 | [1, 2] | [3, 4] | [1, 2, 3, 4] |
| 3 | [1, 2, 3, 4] | [5, [6, 7]] | [1, 2, 3, 4, 5, [6, 7]] |

**English:** In iteration 3, `concat` adds `5` and the array `[6, 7]` as two separate elements; it does not open `[6, 7]`.

**Thunglish:** 3-vadhu round la `5`, `[6,7]` rendum element-aa serum; `[6,7]` ai open pannaadhu.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an empty array accumulator and `concat`, which spreads each inner array one level into the accumulator."

**Detailed answer (60–90 seconds):** "Flattening one level means combining many arrays into one array, so `reduce()` with `[]` fits. `acc.concat(inner)` adds the inner elements to a new array, and deeper nesting is preserved. The cost is that `concat` copies the accumulator each time, so total time can reach O(n²) in elements for many small arrays; using `push` in a loop or the native `flat()` is O(n). For deep flattening I would use recursion or `flat(Infinity)`."

**Thunglish:** "Pala arrays → oru array, `reduce` + `concat`. Deep level appadiye irukkum. `concat` ovvoru dhadavum copy pannum, so periya data la slow (O(n²)). `push` / `flat()` O(n)."

#### Step 7 – Time and Space Complexity

| Version | Time | Auxiliary space | Output space |
|---|---|---|---|
| `reduce` + `concat` | Up to O(n²) for n total elements (repeated copying) | O(n) temporary copies | O(n) |
| Custom loops with `push` | O(n) | O(1) | O(n) |

**English:** Let n be the total number of elements. With `concat`, each iteration copies the whole accumulator, so for m inner arrays the work is roughly the sum of growing array sizes. The loop version touches each element once.

**Thunglish:** `concat` ovvoru round-layum accumulator full copy → slow. Loop + `push` ovvoru element-aiyum oru dhadava thaan.

---

### Problem 28: Find Products That Are Out of Stock

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `filter()`

#### Step 1 – Understand the Problem

**English**
- Return products whose `stock` is 0.
- Input: Keyboard 10, Mouse 0, Monitor 5, Pen Drive 0, Webcam 3.
- Expected output: Mouse and Pen Drive.
- Edge cases: negative stock from data errors (use `<= 0` if you want to treat that as out of stock); missing `stock`.
- Tests: inventory filtering, an everyday admin dashboard feature.

**Thunglish**
- Stock 0 irukkura products-ai list pannanum: Mouse, Pen Drive.
- Real project la inventory page la idhu thaan "Out of stock" tab.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` with `(p) => p.stock === 0`.

**Thunglish**
- Select → `filter`. Condition `stock === 0`.

#### Step 3 – Solve Using the Built-in Method

```js
const products = [
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Monitor", stock: 5 },
  { name: "Pen Drive", stock: 0 },
  { name: "Webcam", stock: 3 },
];

const outOfStock = products.filter((product) => product.stock === 0);

console.log(outOfStock);
```

**Output:**

```text
[ { name: 'Mouse', stock: 0 }, { name: 'Pen Drive', stock: 0 } ]
```

| Line | English | Thunglish |
|---|---|---|
| `product.stock === 0` | True only when stock is exactly zero. | Stock 0 na mattum `true`. |

**Best practice:** `!product.stock` also matches `0` but would match `undefined` too, so be explicit. **Common mistake:** `== false` or checking the string `"0"`.

#### Step 4 – Solve Without the Built-in Method

```js
function getOutOfStock(products) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
      result.push(products[i]);
    }
  }
  return result;
}

const products = [
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Monitor", stock: 5 },
  { name: "Pen Drive", stock: 0 },
  { name: "Webcam", stock: 3 },
];

console.log(getOutOfStock(products));
```

**Output:**

```text
[ { name: 'Mouse', stock: 0 }, { name: 'Pen Drive', stock: 0 } ]
```

**English:** Loop, test `stock === 0`, push the product.

**Thunglish:** Loop, `stock === 0` check, `push`.

#### Step 5 – Understand Internal Execution

| Iteration | Element | Condition (`stock === 0`) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Keyboard (10) | 10 === 0 | False | [] |
| 2 | Mouse (0) | 0 === 0 | True | [Mouse] |
| 3 | Monitor (5) | 5 === 0 | False | [Mouse] |
| 4 | Pen Drive (0) | 0 === 0 | True | [Mouse, Pen Drive] |
| 5 | Webcam (3) | 3 === 0 | False | [Mouse, Pen Drive] |

**English:** Only iterations 2 and 4 pass.

**Thunglish:** Round 2, 4 mattum pass.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` with `product.stock === 0` to get all out-of-stock products."

**Detailed answer (60–90 seconds):** "We need a subset of products matching a condition, so `filter()` is right. The callback returns true for products with zero stock. The result keeps the original product objects and order. I compare strictly with `=== 0` so missing or invalid values are not silently treated as zero. The loop version uses `if` and `push`. Time is O(n), output space O(k)."

**Thunglish:** "Subset → `filter`. `stock === 0`. Strict compare. Loop version `if` + `push`. O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary O(1); output O(k) references. Same for custom code.

**Thunglish:** O(n) time, O(1) extra, output k.

---

### Problem 29: Calculate Total Revenue from Completed Orders

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `filter()` + `reduce()`

#### Step 1 – Understand the Problem

**English**
- Add up `amount` only for orders whose `status` is `"completed"`.
- Input: #1 completed 2500, #2 pending 1800, #3 completed 4200, #4 cancelled 900, #5 completed 1300.
- Expected output: 2500 + 4200 + 1300 = **8000**.
- Edge cases: no completed orders → 0; inconsistent status text such as `"Completed"` (normalise case).
- Tests: filter-then-aggregate on business data.

**Thunglish**
- Completed orders-oda amount mattum kootanum: 2500 + 4200 + 1300 = 8000.
- Pending, cancelled count aagaadhu.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` for status, `reduce()` for the sum.

**Thunglish**
- `filter` la completed, `reduce` la sum.

#### Step 3 – Solve Using the Built-in Method

```js
const orders = [
  { id: 1, status: "completed", amount: 2500 },
  { id: 2, status: "pending", amount: 1800 },
  { id: 3, status: "completed", amount: 4200 },
  { id: 4, status: "cancelled", amount: 900 },
  { id: 5, status: "completed", amount: 1300 },
];

const revenue = orders
  .filter((order) => order.status === "completed")
  .reduce((sum, order) => sum + order.amount, 0);

console.log(revenue);
```

**Output:**

```text
8000
```

| Line | English | Thunglish |
|---|---|---|
| `.filter(order => order.status === "completed")` | Keeps completed orders. | Completed orders mattum. |
| `.reduce((sum, order) => sum + order.amount, 0)` | Sums their amounts. | Amount-ai kootum. |

**Best practice:** keep status values in constants/enums. **Common mistake:** summing all orders and forgetting the filter.

#### Step 4 – Solve Without the Built-in Methods

```js
function completedRevenue(orders) {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "completed") {
      sum += orders[i].amount;
    }
  }
  return sum;
}

const orders = [
  { id: 1, status: "completed", amount: 2500 },
  { id: 2, status: "pending", amount: 1800 },
  { id: 3, status: "completed", amount: 4200 },
  { id: 4, status: "cancelled", amount: 900 },
  { id: 5, status: "completed", amount: 1300 },
];

console.log(completedRevenue(orders));
```

**Output:**

```text
8000
```

**English:** The `if` replaces `filter`, and `sum +=` replaces `reduce`.

**Thunglish:** `if` = filter; `sum +=` = reduce.

#### Step 5 – Understand Internal Execution

**Phase 1 – `filter()`**

| Iteration | Element | Condition (`status === "completed"`) | True/False | Output Array (ids) |
|---|---|---|---|---|
| 1 | Order 1 (completed) | true | True | [1] |
| 2 | Order 2 (pending) | false | False | [1] |
| 3 | Order 3 (completed) | true | True | [1, 3] |
| 4 | Order 4 (cancelled) | false | False | [1, 3] |
| 5 | Order 5 (completed) | true | True | [1, 3, 5] |

**Phase 2 – `reduce()` on orders 1, 3, 5**

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 | 2500 | 2500 |
| 2 | 2500 | 4200 | 6700 |
| 3 | 6700 | 1300 | 8000 |

**English:** The final accumulator 8000 is the revenue.

**Thunglish:** Final accumulator 8000.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I filtered the orders with status `completed` and used `reduce()` to sum their amounts."

**Detailed answer (60–90 seconds):** "There are two stages: selecting valid orders and aggregating them. `filter()` returns the completed orders, and `reduce()` sums `amount` starting from 0, so an empty result gives 0. Pending and cancelled orders are excluded because they are not realised revenue. For big datasets I would do this in MongoDB with `$match` and `$group`. Time is O(n) and the intermediate array adds O(k) space."

**Thunglish:** "Select + sum → `filter` + `reduce`. Initial 0. Periya data na MongoDB `$match` + `$group`. O(n) time."

#### Step 7 – Time and Space Complexity

**English:** Time O(n + k) = O(n). Auxiliary space O(k) for the intermediate array (built-in chain) and O(1) for the custom loop. Output O(1).

**Thunglish:** O(n) time. Chain la temporary array O(k); custom la O(1).

---

### Problem 30: Extract Unique Employee Departments

- [ ] Completed  |  **Level:** Advanced  |  **Method:** `map()` + `filter()`

#### Step 1 – Understand the Problem

**English**
- Return the distinct list of departments from the employees.
- Input departments in order: IT, HR, IT, Finance, HR.
- Expected output: `["IT", "HR", "Finance"]`.
- Edge cases: empty array; missing department; case differences ("it" vs "IT").
- Tests: `map()` to extract, `filter()` to deduplicate.

**Thunglish**
- Employees la irundhu unique department names venum: IT, HR, Finance.
- Step 1: `map` la department-gal edukkanum. Step 2: `filter` la duplicate neekkanum.

#### Step 2 – Identify the Correct Method

**English**
- `map()` extracts all departments; `filter()` with `indexOf(value) === index` keeps first occurrences.

**Thunglish**
- `map` extract, `filter` duplicate remove.

#### Step 3 – Solve Using the Built-in Methods

```js
const employees = [
  { name: "Arun", department: "IT" },
  { name: "Bala", department: "HR" },
  { name: "Kavya", department: "IT" },
  { name: "Dinesh", department: "Finance" },
  { name: "Esha", department: "HR" },
];

const departments = employees
  .map((emp) => emp.department)
  .filter((dept, index, arr) => arr.indexOf(dept) === index);

console.log(departments);
```

**Output:**

```text
[ 'IT', 'HR', 'Finance' ]
```

| Line | English | Thunglish |
|---|---|---|
| `.map(emp => emp.department)` | Produces `["IT","HR","IT","Finance","HR"]`. | Ella department-um (duplicate-oda). |
| `.filter((dept, index, arr) => arr.indexOf(dept) === index)` | Keeps only first occurrences. | First occurrence mattum. |

**Best practice:** `[...new Set(employees.map(e => e.department))]` is shorter and O(n). **Common mistake:** doing `filter` before `map` (you would filter employees, not departments).

#### Step 4 – Solve Without the Built-in Methods

```js
function uniqueDepartments(employees) {
  const result = [];
  for (let i = 0; i < employees.length; i++) {
    const dept = employees[i].department;
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === dept) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(dept);
    }
  }
  return result;
}

const employees = [
  { name: "Arun", department: "IT" },
  { name: "Bala", department: "HR" },
  { name: "Kavya", department: "IT" },
  { name: "Dinesh", department: "Finance" },
  { name: "Esha", department: "HR" },
];

console.log(uniqueDepartments(employees));
```

**Output:**

```text
[ 'IT', 'HR', 'Finance' ]
```

**English:** Extraction and deduplication happen in one loop: read the department, check `result`, push if new.

**Thunglish:** Extract + dedupe rendayum oru loop la: department eduthu, `result` la illa na `push`.

#### Step 5 – Understand Internal Execution

**Phase 1 – `map()`**

| Iteration | Element | Transformation | Returned Value | Output Array |
|---|---|---|---|---|
| 1 | Arun | `.department` | IT | [IT] |
| 2 | Bala | `.department` | HR | [IT, HR] |
| 3 | Kavya | `.department` | IT | [IT, HR, IT] |
| 4 | Dinesh | `.department` | Finance | [IT, HR, IT, Finance] |
| 5 | Esha | `.department` | HR | [IT, HR, IT, Finance, HR] |

**Phase 2 – `filter()`**

| Iteration | Element | Index | `indexOf` | Condition | True/False | Output Array |
|---|---|---|---|---|---|---|
| 1 | IT | 0 | 0 | 0 === 0 | True | [IT] |
| 2 | HR | 1 | 1 | 1 === 1 | True | [IT, HR] |
| 3 | IT | 2 | 0 | 0 === 2 | False | [IT, HR] |
| 4 | Finance | 3 | 3 | 3 === 3 | True | [IT, HR, Finance] |
| 5 | HR | 4 | 1 | 1 === 4 | False | [IT, HR, Finance] |

**English:** `map` creates the full list, `filter` drops later copies.

**Thunglish:** `map` full list; `filter` pinnaadi vandha duplicate-gal-ai neekkum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` to extract the departments and `filter()` with `indexOf` to keep only the first occurrence of each."

**Detailed answer (60–90 seconds):** "Two steps are needed: extracting a field and removing duplicates. `map()` converts employees into department names; `filter()` keeps an element only when its first index equals the current index. This preserves the order. Because `indexOf` scans the array, the time is O(n²) in the worst case; a `Set` gives O(n). The loop version is similar to the nested-loop deduplication."

**Thunglish:** "Extract (`map`) + dedupe (`filter` + `indexOf`). Order maaradhu. `indexOf` loop → O(n²). `Set` na O(n)."

#### Step 7 – Time and Space Complexity

**English:** `map` is O(n). `filter` with `indexOf` is O(n × u) ≤ O(n²). Total worst case O(n²) (all distinct) and about O(n) when there are few distinct values. Auxiliary space O(n) for the intermediate department array. Output O(u). The custom version avoids the intermediate array (O(1) auxiliary) but keeps the same time.

**Thunglish:** `map` O(n) + `filter` O(n × u). Intermediate array O(n) space. Custom la extra array illa.

---

> [!IMPORTANT]
> **Checkpoint – Level 3 complete.** You can now use `reduce()` to produce objects (frequency, grouping, lookup) and track multiple values in an accumulator.

---

## Level 4: Real-World MERN Stack Interview (Problems 31-40)

> [!NOTE]
> These problems look like the data your React components and Express controllers handle every day: users, orders, products, carts, and dashboards.

---

### Problem 31: Filter Active Users and Extract Their Emails

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `filter()` + `map()`

#### Step 1 – Understand the Problem

**English**
- From a users list, return the email addresses of users where `isActive` is `true`.
- Input: Arun (active), Bala (inactive), Kavya (active), Dinesh (inactive), Esha (active).
- Expected output: `["arun@example.com", "kavya@example.com", "esha@example.com"]`.
- Edge cases: no active users → `[]`; missing email (`undefined` entries); string `"false"` values from forms.
- Tests: the classic **filter-then-map** chain, used for e-mail campaigns and notifications.

**Thunglish**
- Active users-oda email mattum venum.
- Step 1: `filter` la active users. Step 2: `map` la email.
- Order mukkiyam: mudhalla filter, apuram map.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` selects active users, then `map()` extracts emails.
- Doing `map` first would lose the `isActive` information, so the order matters.
- `reduce()` could do both in one pass but is less readable.

**Thunglish**
- `filter` → `map`. `map` mudhalla pannina `isActive` poidum, so filter thaan first.

#### Step 3 – Solve Using the Built-in Methods

```js
const users = [
  { id: 1, name: "Arun", email: "arun@example.com", isActive: true },
  { id: 2, name: "Bala", email: "bala@example.com", isActive: false },
  { id: 3, name: "Kavya", email: "kavya@example.com", isActive: true },
  { id: 4, name: "Dinesh", email: "dinesh@example.com", isActive: false },
  { id: 5, name: "Esha", email: "esha@example.com", isActive: true },
];

const activeEmails = users
  .filter((user) => user.isActive)
  .map((user) => user.email);

console.log(activeEmails);
```

**Output:**

```text
[ 'arun@example.com', 'kavya@example.com', 'esha@example.com' ]
```

| Line | English | Thunglish |
|---|---|---|
| `.filter((user) => user.isActive)` | Keeps active users; `isActive` is already a boolean. | Active users mattum. |
| `.map((user) => user.email)` | Extracts the email from each remaining user. | Email mattum extract. |

**Best practice:** `filter(Boolean)` after `map` can remove missing emails. **Common mistake:** `user.isActive === "true"` when the field is a real boolean.

#### Step 4 – Solve Without the Built-in Methods

```js
function getActiveEmails(users) {
  const emails = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
      emails.push(users[i].email);
    }
  }
  return emails;
}

const users = [
  { id: 1, name: "Arun", email: "arun@example.com", isActive: true },
  { id: 2, name: "Bala", email: "bala@example.com", isActive: false },
  { id: 3, name: "Kavya", email: "kavya@example.com", isActive: true },
  { id: 4, name: "Dinesh", email: "dinesh@example.com", isActive: false },
  { id: 5, name: "Esha", email: "esha@example.com", isActive: true },
];

console.log(getActiveEmails(users));
```

**Output:**

```text
[ 'arun@example.com', 'kavya@example.com', 'esha@example.com' ]
```

**English:** One loop performs both: the `if` filters and `push(email)` maps.

**Thunglish:** Oru loop la `if` = filter, `push(email)` = map.

#### Step 5 – Understand Internal Execution

**Phase 1 – `filter()`**

| Iteration | Element | Condition (`isActive`) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Arun | true | True | [Arun] |
| 2 | Bala | false | False | [Arun] |
| 3 | Kavya | true | True | [Arun, Kavya] |
| 4 | Dinesh | false | False | [Arun, Kavya] |
| 5 | Esha | true | True | [Arun, Kavya, Esha] |

**Phase 2 – `map()`**

| Iteration | Element | Transformation | Returned Value | Output Array |
|---|---|---|---|---|
| 1 | Arun | `.email` | arun@example.com | [arun@…] |
| 2 | Kavya | `.email` | kavya@example.com | [arun@…, kavya@…] |
| 3 | Esha | `.email` | esha@example.com | [arun@…, kavya@…, esha@…] |

**English:** `map` runs only over the three users that survived `filter`.

**Thunglish:** `map` filter-la pass aana moonu users mela mattum odum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I chained `filter()` to keep active users and `map()` to extract their emails."

**Detailed answer (60–90 seconds):** "First I need to select a subset, then transform it, so the chain is `filter` then `map`. Filtering first also means `map` processes fewer elements. Both methods return new arrays, so the original users array is untouched. The same result can be achieved with one `reduce` or one loop, but the chain is more readable. Time is O(n) and the intermediate array adds O(k) space."

**Thunglish:** "Select, apuram transform → `filter().map()`. Filter first na map kammi element-ku thaan odum. Original maaradhu. O(n) time."

#### Step 7 – Time and Space Complexity

**English:** Time O(n + k) = O(n). Auxiliary space O(k) for the intermediate filtered array in the chain; O(1) in the loop version. Output O(k).

**Thunglish:** O(n) time. Chain la temporary O(k); loop la O(1).

---

### Problem 32: Calculate Total Revenue from an E-commerce Order List

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Each order has an `items` array; each item has `price` and `qty`. Compute the revenue across **all** orders.
- Input: Order 1: Keyboard 1500 × 1 + Mouse 600 × 2 = 2700. Order 2: Monitor 8500 × 1 = 8500. Order 3: Pen Drive 450 × 3 + Pen 20 × 10 = 1550.
- Expected output: 2700 + 8500 + 1550 = **12750**.
- Edge cases: order with empty `items`; empty orders list; qty 0.
- Tests: **nested** `reduce()` (reduce inside reduce).

**Thunglish**
- Ovvoru order kulla items irukku. Ellaa orders-oda ellaa items-oda `price × qty` kootanum.
- 2700 + 8500 + 1550 = 12750.
- Idhu nested reduce question.

#### Step 2 – Identify the Correct Method

**English**
- Outer `reduce()` over orders; inner `reduce()` over each order's items to get the order total.
- Both return a number, so `reduce` fits at both levels.

**Thunglish**
- Outer `reduce` orders mela, inner `reduce` items mela. Rendum number return.

#### Step 3 – Solve Using the Built-in Method

```js
const orders = [
  {
    orderId: 1,
    items: [
      { name: "Keyboard", price: 1500, qty: 1 },
      { name: "Mouse", price: 600, qty: 2 },
    ],
  },
  {
    orderId: 2,
    items: [{ name: "Monitor", price: 8500, qty: 1 }],
  },
  {
    orderId: 3,
    items: [
      { name: "Pen Drive", price: 450, qty: 3 },
      { name: "Pen", price: 20, qty: 10 },
    ],
  },
];

const totalRevenue = orders.reduce((revenue, order) => {
  const orderTotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return revenue + orderTotal;
}, 0);

console.log(totalRevenue);
```

**Output:**

```text
12750
```

| Line | English | Thunglish |
|---|---|---|
| `orders.reduce((revenue, order) => ...` | Outer loop over orders. | Orders mela outer reduce. |
| `order.items.reduce(... , 0)` | Inner total of one order. | Oru order-oda total. |
| `return revenue + orderTotal` | Adds the order total to the running revenue. | Revenue-oda serkkum. |

**Best practice:** give the inner and outer accumulators different names (`revenue`, `sum`). **Common mistake:** missing the inner initial value 0, which breaks orders with no items.

#### Step 4 – Solve Without the Built-in Method

```js
function totalRevenue(orders) {
  let revenue = 0;
  for (let i = 0; i < orders.length; i++) {
    const items = orders[i].items;
    for (let j = 0; j < items.length; j++) {
      revenue += items[j].price * items[j].qty;
    }
  }
  return revenue;
}

const orders = [
  { orderId: 1, items: [{ name: "Keyboard", price: 1500, qty: 1 }, { name: "Mouse", price: 600, qty: 2 }] },
  { orderId: 2, items: [{ name: "Monitor", price: 8500, qty: 1 }] },
  { orderId: 3, items: [{ name: "Pen Drive", price: 450, qty: 3 }, { name: "Pen", price: 20, qty: 10 }] },
];

console.log(totalRevenue(orders));
console.log(totalRevenue([]));
```

**Output:**

```text
12750
0
```

**English:** Nested `for` loops replace nested `reduce` calls.

**Thunglish:** Nested `reduce` ku badhila nested `for` loop.

#### Step 5 – Understand Internal Execution

**Outer `reduce` (revenue accumulator)**

| Iteration | Accumulator | Current Order | Inner reduce result (orderTotal) | New Accumulator |
|---|---|---|---|---|
| 1 | 0 | Order 1 | 1500 + 1200 = 2700 | 2700 |
| 2 | 2700 | Order 2 | 8500 | 11200 |
| 3 | 11200 | Order 3 | 1350 + 200 = 1550 | 12750 |

**Inner `reduce` for Order 1 (example)**

| Iteration | Accumulator | Current Item | New Accumulator |
|---|---|---|---|
| 1 | 0 | Keyboard 1500 × 1 = 1500 | 1500 |
| 2 | 1500 | Mouse 600 × 2 = 1200 | 2700 |

**English:** For every order, a fresh inner `reduce` starts at 0 and returns that order's total to the outer `reduce`.

**Thunglish:** Ovvoru order-kum puthusaa inner reduce 0 la start aagi, order total-ai outer ku kudukkum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used a nested `reduce()`: the inner one totals each order's items, and the outer one adds those order totals."

**Detailed answer (60–90 seconds):** "Revenue is one number built from a nested structure. The outer `reduce` walks the orders; for each order, an inner `reduce` multiplies price by quantity and sums it. Both start at 0, so empty orders are safe. Time is O(N) where N is the total number of items across all orders, not O(n²), because each item is visited once. In production I would calculate totals on the server from trusted prices, not from client-supplied values."

**Thunglish:** "Nested structure → nested `reduce`. Inner order total, outer revenue. Time = total items count N. Server la trusted price vechi calculate pannanum."

#### Step 7 – Time and Space Complexity

**English:** Time O(N), N = total items in all orders (each visited once; nested loops do not automatically mean O(n²)). Auxiliary space O(1). Output O(1). Same for built-in and custom.

**Thunglish:** Total items N → O(N). Nested irundhaalum ellaa item-um oru dhadava thaan. Space O(1).

---

### Problem 33: Group Products by Category

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Group product **names** by their `category`.
- Input: Keyboard (Electronics), Pen (Stationery), Mouse (Electronics), Notebook (Stationery), Bottle (Home).
- Expected output: `{ Electronics: ["Keyboard", "Mouse"], Stationery: ["Pen", "Notebook"], Home: ["Bottle"] }`.
- Edge cases: empty list; missing category (group under `"Uncategorized"`).
- Tests: group-by with a **transformed value** (names instead of whole objects).

**Thunglish**
- Category wise product names-ai group pannanum.
- Problem 22 mathiri thaan; ingae full object illa, name mattum store panrom.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with `{}`; create the category array if missing; push `product.name`.

**Thunglish**
- `reduce`, category illa na `[]` create, `product.name` `push`.

#### Step 3 – Solve Using the Built-in Method

```js
const products = [
  { name: "Keyboard", category: "Electronics" },
  { name: "Pen", category: "Stationery" },
  { name: "Mouse", category: "Electronics" },
  { name: "Notebook", category: "Stationery" },
  { name: "Bottle", category: "Home" },
];

const byCategory = products.reduce((groups, product) => {
  const key = product.category ?? "Uncategorized";
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(product.name);
  return groups;
}, {});

console.log(byCategory);
```

**Output:**

```text
{
  Electronics: [ 'Keyboard', 'Mouse' ],
  Stationery: [ 'Pen', 'Notebook' ],
  Home: [ 'Bottle' ]
}
```

| Line | English | Thunglish |
|---|---|---|
| `product.category ?? "Uncategorized"` | Fallback when category is `null`/`undefined`. | Category illa na default. |
| `groups[key] = []` | Creates the group once. | Group-ai oru dhadava create. |
| `groups[key].push(product.name)` | Stores the name. | Name-ai serkkum. |

**Best practice:** handle missing keys. **Common mistake:** `groups[key] = product.name` overwrites earlier names.

#### Step 4 – Solve Without the Built-in Method

```js
function groupByCategory(products) {
  const groups = {};
  for (let i = 0; i < products.length; i++) {
    const key = products[i].category ?? "Uncategorized";
    if (groups[key] === undefined) {
      groups[key] = [];
    }
    groups[key].push(products[i].name);
  }
  return groups;
}

const products = [
  { name: "Keyboard", category: "Electronics" },
  { name: "Pen", category: "Stationery" },
  { name: "Mouse", category: "Electronics" },
  { name: "Notebook", category: "Stationery" },
  { name: "Bottle", category: "Home" },
];

console.log(groupByCategory(products));
console.log(groupByCategory([{ name: "Lamp" }]));
```

**Output:**

```text
{
  Electronics: [ 'Keyboard', 'Mouse' ],
  Stationery: [ 'Pen', 'Notebook' ],
  Home: [ 'Bottle' ]
}
{ Uncategorized: [ 'Lamp' ] }
```

**English:** The same logic in a `for` loop; the second call demonstrates the default group.

**Thunglish:** Same logic loop la; rendavadhu call la default group kaattudhu.

#### Step 5 – Understand Internal Execution

| Iteration | Current Product | Group Exists? | Action | Accumulator |
|---|---|---|---|---|
| 1 | Keyboard (Electronics) | No | create, push | {Electronics:[Keyboard]} |
| 2 | Pen (Stationery) | No | create, push | {Electronics:[Keyboard], Stationery:[Pen]} |
| 3 | Mouse (Electronics) | Yes | push | {Electronics:[Keyboard, Mouse], Stationery:[Pen]} |
| 4 | Notebook (Stationery) | Yes | push | {Electronics:[Keyboard, Mouse], Stationery:[Pen, Notebook]} |
| 5 | Bottle (Home) | No | create, push | {Electronics:[Keyboard, Mouse], Stationery:[Pen, Notebook], Home:[Bottle]} |

**English:** Group creation happens only the first time a category is seen.

**Thunglish:** Category mudhal dhadava paakkum bodhu mattum group create aagum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an object accumulator keyed by category, pushing each product name into its category array."

**Detailed answer (60–90 seconds):** "Grouping needs a keyed output, so `reduce()` with `{}` is the standard approach. For each product I find its category key, create an array if it does not exist, push the name, and return the accumulator. I use `??` to put products without a category under a default group. This runs in O(n) time and uses O(n) output space. In MongoDB, for large datasets I would use `$group` in an aggregation pipeline instead."

**Thunglish:** "Category key → `reduce` + `{}`. Illa na `[]` create, `push`. `??` default group. O(n). Periya data na MongoDB `$group`."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) average; auxiliary O(1); output O(n + c) where c is the number of categories. Same for custom.

**Thunglish:** O(n) time; output n names + c categories.

---

### Problem 34: Find the Highest-Selling Product

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Return the product with the greatest `unitsSold`.
- Input: Keyboard 120, Mouse 340, Monitor 85, Pen Drive 275.
- Expected output: `{ name: "Mouse", unitsSold: 340 }`.
- Edge cases: empty list → `null`; ties (this solution keeps the first); `unitsSold` missing.
- Tests: reduce to **one object** (like max, but returning the whole record, not just the number).

**Thunglish**
- Adhigama vitta product (full object) kandupidikkanum: Mouse (340).
- Problem 8 (max number) mathiri, aana number illa, full object return pannanum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with initial value `null`; keep the product with the higher `unitsSold`.
- `Math.max` returns a number, not the product.

**Thunglish**
- `reduce`, initial `null`. Adhigama irukkura product-ai accumulator la vechukkalaam.

#### Step 3 – Solve Using the Built-in Method

```js
const products = [
  { name: "Keyboard", unitsSold: 120 },
  { name: "Mouse", unitsSold: 340 },
  { name: "Monitor", unitsSold: 85 },
  { name: "Pen Drive", unitsSold: 275 },
];

const bestSeller = products.reduce(
  (best, product) => (best === null || product.unitsSold > best.unitsSold ? product : best),
  null
);

console.log(bestSeller);
console.log([].reduce((best, product) => (best === null || product.unitsSold > best.unitsSold ? product : best), null));
```

**Output:**

```text
{ name: 'Mouse', unitsSold: 340 }
null
```

| Line | English | Thunglish |
|---|---|---|
| `best === null` | First iteration: nothing to compare with yet. | Mudhal round la compare panna onnum illa. |
| `product.unitsSold > best.unitsSold` | Is the current product better? | Current product better-aa? |
| `? product : best` | Keep the better product. | Better product-ai vechukko. |
| `null` | Initial value; also the result for an empty array. | Empty array na `null`. |

**Best practice:** returning `null` for "no data" is explicit and safe. **Common mistake:** using `best.unitsSold` without the `null` check, which throws on the first iteration.

#### Step 4 – Solve Without the Built-in Method

```js
function highestSelling(products) {
  let best = null;
  for (let i = 0; i < products.length; i++) {
    if (best === null || products[i].unitsSold > best.unitsSold) {
      best = products[i];
    }
  }
  return best;
}

const products = [
  { name: "Keyboard", unitsSold: 120 },
  { name: "Mouse", unitsSold: 340 },
  { name: "Monitor", unitsSold: 85 },
  { name: "Pen Drive", unitsSold: 275 },
];

console.log(highestSelling(products));
console.log(highestSelling([]));
```

**Output:**

```text
{ name: 'Mouse', unitsSold: 340 }
null
```

**English:** `best` plays the accumulator role and stores the whole product.

**Thunglish:** `best` variable-la full product store aagum.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (best) | Current Value | Comparison | New Accumulator |
|---|---|---|---|---|
| 1 | null | Keyboard (120) | best is null → take it | Keyboard (120) |
| 2 | Keyboard (120) | Mouse (340) | 340 > 120 true | Mouse (340) |
| 3 | Mouse (340) | Monitor (85) | 85 > 340 false | Mouse (340) |
| 4 | Mouse (340) | Pen Drive (275) | 275 > 340 false | Mouse (340) |

**English:** The accumulator changes only in iterations 1 and 2.

**Thunglish:** Round 1, 2 la mattum accumulator maarum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` to carry the best-selling product so far, replacing it whenever a product has higher `unitsSold`."

**Detailed answer (60–90 seconds):** "It is the max-finding pattern but returning the whole record. The accumulator starts as `null`; if it is `null` or the current product sells more, I take the current product. This needs one pass, and for an empty array it safely returns `null`. Ties keep the first product because I use a strict `>`; I would confirm tie rules with the business. It is O(n) time and O(1) space."

**Thunglish:** "Max pattern, aana full object. Initial `null`. Adhigam na replace. Empty array → `null`. Tie na first product. O(n), O(1)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) in all cases; auxiliary O(1); output O(1) (one reference). Same for the custom version.

**Thunglish:** O(n) time, O(1) space.

---

### Problem 35: Calculate the Average Rating of Products

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Compute the average of the `rating` field across products, rounded to one decimal place.
- Input ratings: 4.5, 3.5, 4.0, 5.0, 4.0 → sum 21 → average 4.2.
- Expected output: `4.2`.
- Edge cases: empty array (avoid `NaN`); products without a rating (should be skipped, not counted as zero).
- Tests: average over **object fields** with an empty-array guard and rounding.

**Thunglish**
- Product ratings-oda average (oru decimal varai round).
- 4.5 + 3.5 + 4.0 + 5.0 + 4.0 = 21; 21 ÷ 5 = 4.2.
- Empty array na `NaN` varum, adhai thadukkanum.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` for the sum of ratings, then divide by the count, then `toFixed(1)`.

**Thunglish**
- `reduce` la sum; `length` la divide; `toFixed(1)` la round.

#### Step 3 – Solve Using the Built-in Method

```js
const products = [
  { name: "Keyboard", rating: 4.5 },
  { name: "Mouse", rating: 3.5 },
  { name: "Monitor", rating: 4.0 },
  { name: "Webcam", rating: 5.0 },
  { name: "Pen Drive", rating: 4.0 },
];

function averageRating(items) {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item.rating, 0);
  return Number((total / items.length).toFixed(1));
}

console.log(averageRating(products));
console.log(averageRating([]));
```

**Output:**

```text
4.2
0
```

| Line | English | Thunglish |
|---|---|---|
| `items.length === 0` | Guard against `0 / 0`. | `NaN` thadukka. |
| `items.reduce((sum, item) => sum + item.rating, 0)` | Sum of all ratings. | Ellaa ratings-oda sum. |
| `(total / items.length).toFixed(1)` | Average as a string with one decimal. | Average, oru decimal string. |
| `Number(...)` | Converts the string back to a number. | String-ai number-aa maathum. |

**Best practice:** round only at the end, not during accumulation. **Common mistake:** returning `toFixed()` output (a string) when the caller expects a number.

#### Step 4 – Solve Without the Built-in Method

```js
function averageRatingLoop(items) {
  if (items.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].rating;
  }
  return Number((total / items.length).toFixed(1));
}

console.log(averageRatingLoop([
  { name: "Keyboard", rating: 4.5 },
  { name: "Mouse", rating: 3.5 },
  { name: "Monitor", rating: 4.0 },
  { name: "Webcam", rating: 5.0 },
  { name: "Pen Drive", rating: 4.0 },
]));
```

**Output:**

```text
4.2
```

**English:** Same logic with a `total` variable.

**Thunglish:** `total` variable la same logic.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator (sum) | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 | 4.5 | 4.5 |
| 2 | 4.5 | 3.5 | 8 |
| 3 | 8 | 4.0 | 12 |
| 4 | 12 | 5.0 | 17 |
| 5 | 17 | 4.0 | 21 |

**English:** 21 ÷ 5 = 4.2, and `toFixed(1)` gives "4.2", converted back to the number 4.2.

**Thunglish:** 21 ÷ 5 = 4.2.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` to sum the ratings, divided by the number of products, and rounded to one decimal. I return 0 for an empty list."

**Detailed answer (60–90 seconds):** "An average needs the total and the count. `reduce()` gives the total in one pass, then I divide by `length`. I guard for an empty array to avoid `NaN` and round only at the end to reduce rounding errors. If some products have no rating yet, I would filter them out first so that they are not counted as zero. Time is O(n), space is O(1)."

**Thunglish:** "Total (`reduce`) ÷ count. Empty guard. End la mattum round. Rating illatha products-ai first filter pannanum. O(n), O(1)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n); auxiliary O(1); output O(1). Identical for both. If you add a `filter()` for missing ratings, there is an extra O(k) intermediate array.

**Thunglish:** O(n) time, O(1) space. Filter add panna extra O(k) array.

---

### Problem 36: Filter Completed Tasks and Extract Their Titles

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `filter()` + `map()`

#### Step 1 – Understand the Problem

**English**
- From a to-do list, return the titles of tasks where `completed` is `true`.
- Input: "Set up project" ✔, "Design schema" ✘, "Build API" ✔, "Write tests" ✘, "Deploy app" ✔.
- Expected output: `["Set up project", "Build API", "Deploy app"]`.
- Edge cases: no completed tasks → `[]`; missing `title`.
- Tests: another filter-then-map; the typical "completed tasks" view of a React to-do app.

**Thunglish**
- Mudinja tasks-oda title mattum venum.
- `completed: true` ullavai: Set up project, Build API, Deploy app.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` for `completed`, then `map()` for `title`.

**Thunglish**
- `filter` → `map`.

#### Step 3 – Solve Using the Built-in Methods

```js
const tasks = [
  { id: 1, title: "Set up project", completed: true },
  { id: 2, title: "Design schema", completed: false },
  { id: 3, title: "Build API", completed: true },
  { id: 4, title: "Write tests", completed: false },
  { id: 5, title: "Deploy app", completed: true },
];

const completedTitles = tasks
  .filter((task) => task.completed)
  .map((task) => task.title);

console.log(completedTitles);
```

**Output:**

```text
[ 'Set up project', 'Build API', 'Deploy app' ]
```

| Line | English | Thunglish |
|---|---|---|
| `.filter((task) => task.completed)` | Keeps tasks with `completed: true`. | Mudinja tasks mattum. |
| `.map((task) => task.title)` | Extracts the titles. | Title mattum. |

**Best practice:** use the boolean directly; avoid `=== true`. **Common mistake:** `.map(...).filter(...)` in the wrong order, which would lose the `completed` field.

#### Step 4 – Solve Without the Built-in Methods

```js
function completedTitles(tasks) {
  const titles = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      titles.push(tasks[i].title);
    }
  }
  return titles;
}

const tasks = [
  { id: 1, title: "Set up project", completed: true },
  { id: 2, title: "Design schema", completed: false },
  { id: 3, title: "Build API", completed: true },
  { id: 4, title: "Write tests", completed: false },
  { id: 5, title: "Deploy app", completed: true },
];

console.log(completedTitles(tasks));
```

**Output:**

```text
[ 'Set up project', 'Build API', 'Deploy app' ]
```

**English:** `if` acts as the filter and `push(title)` as the map.

**Thunglish:** `if` = filter, `push(title)` = map.

#### Step 5 – Understand Internal Execution

**Phase 1 – `filter()`**

| Iteration | Element | Condition (`completed`) | True/False | Output Array (ids) |
|---|---|---|---|---|
| 1 | Set up project | true | True | [1] |
| 2 | Design schema | false | False | [1] |
| 3 | Build API | true | True | [1, 3] |
| 4 | Write tests | false | False | [1, 3] |
| 5 | Deploy app | true | True | [1, 3, 5] |

**Phase 2 – `map()`**

| Iteration | Element | Transformation | Returned Value | Output Array |
|---|---|---|---|---|
| 1 | Task 1 | `.title` | "Set up project" | ["Set up project"] |
| 2 | Task 3 | `.title` | "Build API" | ["Set up project", "Build API"] |
| 3 | Task 5 | `.title` | "Deploy app" | ["Set up project", "Build API", "Deploy app"] |

**English:** `map` processes only the 3 tasks returned by `filter`.

**Thunglish:** `map` filter-la vandha 3 tasks mela mattum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` to keep completed tasks and `map()` to extract their titles."

**Detailed answer (60–90 seconds):** "First I select the tasks with `completed: true`, then I transform the remaining tasks into their titles. The chain `filter().map()` is declarative and easy to read. Both methods return new arrays and leave the original tasks alone, which fits React's immutability rules. Time is O(n); the intermediate array uses O(k) space."

**Thunglish:** "Select → transform, `filter().map()`. Original maaradhu (React immutability). O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n + k) = O(n). Auxiliary space O(k) in the chain, O(1) in the loop. Output O(k).

**Thunglish:** O(n) time; chain la temporary O(k).

---

### Problem 37: Calculate Department-Wise Employee Salary Totals

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `reduce()`

#### Step 1 – Understand the Problem

**English**
- Compute the total salary for each department.
- Input: Arun IT 30000, Bala HR 22000, Kavya IT 45000, Dinesh Finance 25000, Esha HR 28000.
- Expected output: `{ IT: 75000, HR: 50000, Finance: 25000 }`.
- Edge cases: empty array → `{}`; missing department.
- Tests: **group + aggregate** in one pass (an object of numbers, not arrays).

**Thunglish**
- Ovvoru department-oda salary total venum: IT 75000, HR 50000, Finance 25000.
- Group-by + sum rendum serndhu.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` with `{}`; `acc[dept] = (acc[dept] || 0) + salary`.

**Thunglish**
- `reduce`, `acc[dept] = (acc[dept] || 0) + salary`.

#### Step 3 – Solve Using the Built-in Method

```js
const employees = [
  { name: "Arun", department: "IT", salary: 30000 },
  { name: "Bala", department: "HR", salary: 22000 },
  { name: "Kavya", department: "IT", salary: 45000 },
  { name: "Dinesh", department: "Finance", salary: 25000 },
  { name: "Esha", department: "HR", salary: 28000 },
];

const salaryByDepartment = employees.reduce((totals, emp) => {
  totals[emp.department] = (totals[emp.department] || 0) + emp.salary;
  return totals;
}, {});

console.log(salaryByDepartment);
```

**Output:**

```text
{ IT: 75000, HR: 50000, Finance: 25000 }
```

| Line | English | Thunglish |
|---|---|---|
| `totals[emp.department] \|\| 0` | Current total, or 0 for a new department. | Already irundha total, illa na 0. |
| `+ emp.salary` | Adds this employee's salary. | Salary add. |
| `return totals` | Passes the object on. | Adutha round ku. |

**Best practice:** same pattern as frequency count, but adding a value instead of 1. **Common mistake:** `totals[dept] += salary` without initialising (gives `NaN`).

#### Step 4 – Solve Without the Built-in Method

```js
function salaryTotals(employees) {
  const totals = {};
  for (let i = 0; i < employees.length; i++) {
    const dept = employees[i].department;
    if (totals[dept] === undefined) {
      totals[dept] = 0;
    }
    totals[dept] += employees[i].salary;
  }
  return totals;
}

const employees = [
  { name: "Arun", department: "IT", salary: 30000 },
  { name: "Bala", department: "HR", salary: 22000 },
  { name: "Kavya", department: "IT", salary: 45000 },
  { name: "Dinesh", department: "Finance", salary: 25000 },
  { name: "Esha", department: "HR", salary: 28000 },
];

console.log(salaryTotals(employees));
```

**Output:**

```text
{ IT: 75000, HR: 50000, Finance: 25000 }
```

**English:** Initialise to 0 on first sight, then always add.

**Thunglish:** Mudhal dhadava 0 initialise, apuram add.

#### Step 5 – Understand Internal Execution

| Iteration | Accumulator | Current Employee | New Accumulator |
|---|---|---|---|
| 1 | {} | Arun, IT, 30000 | {IT:30000} |
| 2 | {IT:30000} | Bala, HR, 22000 | {IT:30000, HR:22000} |
| 3 | {IT:30000, HR:22000} | Kavya, IT, 45000 | {IT:75000, HR:22000} |
| 4 | {IT:75000, HR:22000} | Dinesh, Finance, 25000 | {IT:75000, HR:22000, Finance:25000} |
| 5 | {IT:75000, HR:22000, Finance:25000} | Esha, HR, 28000 | {IT:75000, HR:50000, Finance:25000} |

**English:** Iterations 3 and 5 add to existing departments.

**Thunglish:** Round 3, 5 la already irukkura department-kku add aagudhu.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `reduce()` with an object that maps each department to a running salary total."

**Detailed answer (60–90 seconds):** "This combines grouping and summing. The accumulator is an object where keys are departments and values are totals. For each employee I read the current total (default 0), add the salary, and return the object. One pass, O(n) time, and space proportional to the number of departments. For huge collections I would use a MongoDB aggregation with `$group` and `$sum`."

**Thunglish:** "Group + sum → `reduce` + object. `|| 0` default. One pass. Periya data na MongoDB `$group` + `$sum`."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) average; auxiliary O(1); output O(d) for d departments (best O(1), worst O(n) if each employee is in a distinct department).

**Thunglish:** O(n) time; output d departments.

---

### Problem 38: Find Users Who Have More Than Three Orders

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `reduce()` + `filter()`

#### Step 1 – Understand the Problem

**English**
- Given `users` and a flat list of `orders` (each with a `userId`), return the users with **more than three** orders.
- Input orders by user: user 1 has 4, user 2 has 5, user 3 has 2, user 4 has exactly 3.
- Expected output: Arun (id 1) and Bala (id 2). Dinesh (exactly 3) is excluded.
- Edge cases: users with zero orders (not present in the counts); orders for unknown users.
- Tests: **count with `reduce()`, then select with `filter()`**.

**Thunglish**
- Moonu ku mela orders irukkura users venum (exactly 3 include aagaadhu).
- User 1 → 4, user 2 → 5, user 3 → 2, user 4 → 3. Answer: Arun, Bala.
- Mudhalla `reduce` la count, apuram `filter` la select.

#### Step 2 – Identify the Correct Method

**English**
- `reduce()` builds `{ userId: orderCount }`; `filter()` keeps users whose count is greater than 3.
- Counting first avoids running `orders.filter(...)` once per user, which would be O(users × orders).

**Thunglish**
- `reduce` count object, `filter` condition `counts[user.id] > 3`.
- Ovvoru user-kum `orders` full scan pannaama, oru dhadava count pannidalaam.

#### Step 3 – Solve Using the Built-in Methods

```js
const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Kavya" },
  { id: 4, name: "Dinesh" },
];

const orders = [
  { orderId: 101, userId: 1 }, { orderId: 102, userId: 2 },
  { orderId: 103, userId: 1 }, { orderId: 104, userId: 2 },
  { orderId: 105, userId: 3 }, { orderId: 106, userId: 1 },
  { orderId: 107, userId: 2 }, { orderId: 108, userId: 4 },
  { orderId: 109, userId: 1 }, { orderId: 110, userId: 2 },
  { orderId: 111, userId: 4 }, { orderId: 112, userId: 3 },
  { orderId: 113, userId: 2 }, { orderId: 114, userId: 4 },
];

const orderCounts = orders.reduce((counts, order) => {
  counts[order.userId] = (counts[order.userId] || 0) + 1;
  return counts;
}, {});

const frequentBuyers = users.filter((user) => (orderCounts[user.id] || 0) > 3);

console.log(orderCounts);
console.log(frequentBuyers);
```

**Output:**

```text
{ '1': 4, '2': 5, '3': 2, '4': 3 }
[ { id: 1, name: 'Arun' }, { id: 2, name: 'Bala' } ]
```

| Line | English | Thunglish |
|---|---|---|
| `orders.reduce(...)` | Builds a `userId → count` object. | UserId wise count. |
| `(orderCounts[user.id] \|\| 0) > 3` | Users with no orders get 0 instead of `undefined`. | Order illatha user-kku 0. |
| `users.filter(...)` | Keeps users with more than three orders. | Moonu ku mela irukkavangala select. |

**Best practice:** compute counts once (O(n + m)) rather than filtering orders for each user. **Common mistake:** `>= 3` (includes Dinesh with exactly three).

#### Step 4 – Solve Without the Built-in Methods

```js
function usersWithMoreThanThreeOrders(users, orders) {
  const counts = {};
  for (let i = 0; i < orders.length; i++) {
    const id = orders[i].userId;
    counts[id] = (counts[id] || 0) + 1;
  }

  const result = [];
  for (let j = 0; j < users.length; j++) {
    if ((counts[users[j].id] || 0) > 3) {
      result.push(users[j]);
    }
  }
  return result;
}

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Kavya" },
  { id: 4, name: "Dinesh" },
];

const userIds = [1, 2, 1, 2, 3, 1, 2, 4, 1, 2, 4, 3, 2, 4];
const orders = [];
for (let i = 0; i < userIds.length; i++) {
  orders.push({ orderId: 101 + i, userId: userIds[i] });
}

console.log(usersWithMoreThanThreeOrders(users, orders));
```

**Output:**

```text
[ { id: 1, name: 'Arun' }, { id: 2, name: 'Bala' } ]
```

**English:** Loop 1 counts orders per user (the `reduce` part); loop 2 selects users above three (the `filter` part). The setup loop just rebuilds the same 14 orders compactly.

**Thunglish:** Loop 1 count (reduce), loop 2 select (filter). Setup loop same 14 orders-ai create pannum.

#### Step 5 – Understand Internal Execution

**Phase 1 – `reduce()` over the 14 orders (counts after each order)**

| Iteration | Order's userId | Accumulator after the step |
|---|---|---|
| 1 | 1 | {1:1} |
| 2 | 2 | {1:1, 2:1} |
| 3 | 1 | {1:2, 2:1} |
| 4 | 2 | {1:2, 2:2} |
| 5 | 3 | {1:2, 2:2, 3:1} |
| 6 | 1 | {1:3, 2:2, 3:1} |
| 7 | 2 | {1:3, 2:3, 3:1} |
| 8 | 4 | {1:3, 2:3, 3:1, 4:1} |
| 9 | 1 | {1:4, 2:3, 3:1, 4:1} |
| 10 | 2 | {1:4, 2:4, 3:1, 4:1} |
| 11 | 4 | {1:4, 2:4, 3:1, 4:2} |
| 12 | 3 | {1:4, 2:4, 3:2, 4:2} |
| 13 | 2 | {1:4, 2:5, 3:2, 4:2} |
| 14 | 4 | {1:4, 2:5, 3:2, 4:3} |

**Phase 2 – `filter()` over users**

| Iteration | Element | Count | Condition (`> 3`) | True/False | Output Array |
|---|---|---|---|---|---|
| 1 | Arun (1) | 4 | 4 > 3 | True | [Arun] |
| 2 | Bala (2) | 5 | 5 > 3 | True | [Arun, Bala] |
| 3 | Kavya (3) | 2 | 2 > 3 | False | [Arun, Bala] |
| 4 | Dinesh (4) | 3 | 3 > 3 | False | [Arun, Bala] |

**English:** Dinesh has exactly three orders, so he is excluded.

**Thunglish:** Dinesh-kku exactly 3, so exclude.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I counted orders per user with `reduce()` and then used `filter()` to keep users whose count is greater than three."

**Detailed answer (60–90 seconds):** "A naive approach filters the orders array for every user, which is O(users × orders). Instead I make one pass over the orders with `reduce()` to build a count object, then one pass over the users with `filter()` using O(1) lookups. Users with no orders default to 0. Total time is O(n + m). In a real database I would use an aggregation with `$group` on `userId` and `$match` on the count."

**Thunglish:** "Naive: ovvoru user-kum orders full scan → O(users × orders). Better: `reduce` la count, `filter` la lookup → O(n + m). MongoDB la `$group` + `$match`."

#### Step 7 – Time and Space Complexity

**English:** Let m = number of orders and n = number of users. Time O(m + n). Auxiliary space O(u) for the counts object, where u is the number of distinct users who ordered. Output O(k). The naive version (filtering orders per user) would be O(n × m).

**Thunglish:** O(m + n) time. Counts object O(u). Naive version O(n × m).

---

### Problem 39: Calculate Total Cart Amount After Applying Discounts

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `map()` + `reduce()`

#### Step 1 – Understand the Problem

**English**
- Each cart item has `price`, `qty`, and `discountPercent`. Compute each line's final amount after discount, then the total of all lines.
- Input: Keyboard 1500 × 1 (10% off), Mouse 600 × 2 (5% off), Headset 2500 × 1 (20% off).
- Line amounts: 1350, 1140, 2000. Expected total: **4490**.
- Edge cases: 0% discount; empty cart; discount above 100% (validate); floating-point rounding in real money values.
- Tests: **map for the per-item calculation, reduce for the total**.

**Thunglish**
- Ovvoru item-kum discount apply panni final amount kandupidikkanum (map), apuram ellathayum kootanum (reduce).
- 1350 + 1140 + 2000 = 4490.

#### Step 2 – Identify the Correct Method

**English**
- `map()` creates the final line amounts (one-to-one); `reduce()` sums them (many-to-one).
- Formula: `price × qty × (1 − discountPercent / 100)`.

**Thunglish**
- `map` per-item amount, `reduce` total.

#### Step 3 – Solve Using the Built-in Methods

```js
const cart = [
  { name: "Keyboard", price: 1500, qty: 1, discountPercent: 10 },
  { name: "Mouse", price: 600, qty: 2, discountPercent: 5 },
  { name: "Headset", price: 2500, qty: 1, discountPercent: 20 },
];

const lineAmounts = cart.map(
  (item) => item.price * item.qty * (1 - item.discountPercent / 100)
);

const grandTotal = lineAmounts.reduce((sum, amount) => sum + amount, 0);

console.log(lineAmounts);
console.log(grandTotal);
```

**Output:**

```text
[ 1350, 1140, 2000 ]
4490
```

| Line | English | Thunglish |
|---|---|---|
| `item.price * item.qty` | Amount before discount. | Discount-ku munnaadi amount. |
| `(1 - item.discountPercent / 100)` | Fraction remaining after discount. | Discount-ku apuram meedhi irukkura fraction. |
| `.map(...)` | One final amount per item. | Ovvoru item-kum final amount. |
| `.reduce((sum, amount) => sum + amount, 0)` | Adds all line amounts. | Ellathayum kootum. |

**Best practice:** for real money, compute in paise (integers) or round each line with a clear policy. **Common mistake:** subtracting the discount percent directly from the price (`price - 10`) instead of a percentage.

#### Step 4 – Solve Without the Built-in Methods

```js
function cartTotalWithDiscount(cart) {
  const lineAmounts = [];
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    lineAmounts.push(item.price * item.qty * (1 - item.discountPercent / 100));
  }

  let total = 0;
  for (let j = 0; j < lineAmounts.length; j++) {
    total += lineAmounts[j];
  }
  return { lineAmounts, total };
}

const cart = [
  { name: "Keyboard", price: 1500, qty: 1, discountPercent: 10 },
  { name: "Mouse", price: 600, qty: 2, discountPercent: 5 },
  { name: "Headset", price: 2500, qty: 1, discountPercent: 20 },
];

console.log(cartTotalWithDiscount(cart));
console.log(cartTotalWithDiscount([]));
```

**Output:**

```text
{ lineAmounts: [ 1350, 1140, 2000 ], total: 4490 }
{ lineAmounts: [], total: 0 }
```

**English:** Loop 1 replaces `map`; loop 2 replaces `reduce`. They could be merged into one loop, but two loops mirror the original structure.

**Thunglish:** Loop 1 = map, loop 2 = reduce. Onna merge pannalaam, aana structure purinjukka rendaa vechirukkom.

#### Step 5 – Understand Internal Execution

**Phase 1 – `map()`**

| Iteration | Element | Index | Transformation | Returned Value | Output Array |
|---|---|---|---|---|---|
| 1 | Keyboard | 0 | 1500 × 1 × 0.90 | 1350 | [1350] |
| 2 | Mouse | 1 | 600 × 2 × 0.95 | 1140 | [1350, 1140] |
| 3 | Headset | 2 | 2500 × 1 × 0.80 | 2000 | [1350, 1140, 2000] |

**Phase 2 – `reduce()`**

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---|---|---|
| 1 | 0 | 1350 | 1350 |
| 2 | 1350 | 1140 | 2490 |
| 3 | 2490 | 2000 | 4490 |

**English:** `map` produces the array `[1350, 1140, 2000]`; `reduce` turns it into 4490.

**Thunglish:** `map` `[1350,1140,2000]` kudukkum; `reduce` adhai 4490 aakkum.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `map()` to compute each item's discounted amount and `reduce()` to add them up."

**Detailed answer (60–90 seconds):** "There are two different jobs: transforming each item into a number, which is one-to-one, and combining the numbers into one total, which is many-to-one. So `map()` then `reduce()` is a natural pipeline. The discount formula is `price × qty × (1 − percent/100)`. I would validate the discount range, use integer paise for money, and recalculate on the server before charging. Time is O(n); the intermediate array adds O(n) space, which a single `reduce` could avoid."

**Thunglish:** "One-to-one (`map`) + many-to-one (`reduce`). Formula `price × qty × (1 − percent/100)`. Money na paise la calculate pannanum; server la recalculate. O(n), temporary array O(n)."

#### Step 7 – Time and Space Complexity

**English:** Time O(n) (map) + O(n) (reduce) = O(n). Auxiliary space O(n) for the intermediate `lineAmounts` array in this version (a single `reduce` would use O(1)). Output O(1) for the total (or O(n) if you also return line amounts).

**Thunglish:** O(n) time. Intermediate array O(n) space; single `reduce` na O(1).

---

### Problem 40: Generate a Dashboard Summary

- [ ] Completed  |  **Level:** Real-World  |  **Method:** `filter()` + `reduce()`

#### Step 1 – Understand the Problem

**English**
- Build an admin dashboard summary with: total users, active users, inactive users.
- Input: Arun ✔, Bala ✘, Kavya ✔, Dinesh ✘, Esha ✔, Farhan ✔.
- Expected output: `{ totalUsers: 6, activeUsers: 4, inactiveUsers: 2 }`.
- Edge cases: empty array → all zeros; invariant check: `active + inactive === total`.
- Tests: combining `filter()` and `reduce()` to produce a **summary object**.

**Thunglish**
- Admin dashboard ku total, active, inactive users count venum: 6, 4, 2.
- Rendum serndhu: `filter` la active users, `reduce` la summary object.

#### Step 2 – Identify the Correct Method

**English**
- `filter()` gives the active users (and their count); `reduce()` builds the summary object, counting total and inactive users in one pass.
- A single `reduce` could count all three; this version shows how the two methods cooperate.

**Thunglish**
- `filter` active list, `reduce` summary. Single `reduce` la kuda ellathayum panna mudiyum.

#### Step 3 – Solve Using the Built-in Methods

```js
const users = [
  { id: 1, name: "Arun", isActive: true },
  { id: 2, name: "Bala", isActive: false },
  { id: 3, name: "Kavya", isActive: true },
  { id: 4, name: "Dinesh", isActive: false },
  { id: 5, name: "Esha", isActive: true },
  { id: 6, name: "Farhan", isActive: true },
];

const activeUsers = users.filter((user) => user.isActive);

const dashboard = users.reduce(
  (summary, user) => {
    summary.totalUsers += 1;
    if (!user.isActive) {
      summary.inactiveUsers += 1;
    }
    return summary;
  },
  { totalUsers: 0, activeUsers: activeUsers.length, inactiveUsers: 0 }
);

console.log(dashboard);

// Single-pass alternative using only reduce
const singlePass = users.reduce(
  (s, u) => ({
    totalUsers: s.totalUsers + 1,
    activeUsers: s.activeUsers + (u.isActive ? 1 : 0),
    inactiveUsers: s.inactiveUsers + (u.isActive ? 0 : 1),
  }),
  { totalUsers: 0, activeUsers: 0, inactiveUsers: 0 }
);
console.log(singlePass);
```

**Output:**

```text
{ totalUsers: 6, activeUsers: 4, inactiveUsers: 2 }
{ totalUsers: 6, activeUsers: 4, inactiveUsers: 2 }
```

| Line | English | Thunglish |
|---|---|---|
| `users.filter((user) => user.isActive)` | The active users. | Active users. |
| `activeUsers.length` | Count placed in the initial summary. | Active count. |
| `summary.totalUsers += 1` | Counts every user. | Ellaa users-aiyum count. |
| `if (!user.isActive) summary.inactiveUsers += 1` | Counts only inactive users. | Inactive mattum. |
| `singlePass` | Same result in one traversal, returning a new object each time. | Oru pass la ellaamm. |

**Best practice:** if you only need counts, the single-pass `reduce` avoids the extra array from `filter`. **Common mistake:** counting active and inactive separately with two `filter` calls, which traverses the array twice and can disagree if data changes between calls.

#### Step 4 – Solve Without the Built-in Methods

```js
function dashboardSummary(users) {
  let totalUsers = 0;
  let activeUsers = 0;
  let inactiveUsers = 0;

  for (let i = 0; i < users.length; i++) {
    totalUsers++;
    if (users[i].isActive) {
      activeUsers++;
    } else {
      inactiveUsers++;
    }
  }
  return { totalUsers, activeUsers, inactiveUsers };
}

const users = [
  { id: 1, name: "Arun", isActive: true },
  { id: 2, name: "Bala", isActive: false },
  { id: 3, name: "Kavya", isActive: true },
  { id: 4, name: "Dinesh", isActive: false },
  { id: 5, name: "Esha", isActive: true },
  { id: 6, name: "Farhan", isActive: true },
];

console.log(dashboardSummary(users));
console.log(dashboardSummary([]));
```

**Output:**

```text
{ totalUsers: 6, activeUsers: 4, inactiveUsers: 2 }
{ totalUsers: 0, activeUsers: 0, inactiveUsers: 0 }
```

**English:** Three counters are updated in one loop, then returned as an object.

**Thunglish:** Moonu counter oru loop la update, last la object-aa return.

#### Step 5 – Understand Internal Execution

**Phase 1 – `filter()` (active users)**

| Iteration | Element | Condition (`isActive`) | True/False | Output Array (names) |
|---|---|---|---|---|
| 1 | Arun | true | True | [Arun] |
| 2 | Bala | false | False | [Arun] |
| 3 | Kavya | true | True | [Arun, Kavya] |
| 4 | Dinesh | false | False | [Arun, Kavya] |
| 5 | Esha | true | True | [Arun, Kavya, Esha] |
| 6 | Farhan | true | True | [Arun, Kavya, Esha, Farhan] |

**Phase 2 – `reduce()` (initial: total 0, active 4, inactive 0)**

| Iteration | Accumulator | Current User | New Accumulator |
|---|---|---|---|
| 1 | {total:0, active:4, inactive:0} | Arun (active) | {total:1, active:4, inactive:0} |
| 2 | {total:1, active:4, inactive:0} | Bala (inactive) | {total:2, active:4, inactive:1} |
| 3 | {total:2, active:4, inactive:1} | Kavya (active) | {total:3, active:4, inactive:1} |
| 4 | {total:3, active:4, inactive:1} | Dinesh (inactive) | {total:4, active:4, inactive:2} |
| 5 | {total:4, active:4, inactive:2} | Esha (active) | {total:5, active:4, inactive:2} |
| 6 | {total:5, active:4, inactive:2} | Farhan (active) | {total:6, active:4, inactive:2} |

**English:** Final summary: 6 total, 4 active, 2 inactive; 4 + 2 = 6, so the numbers are consistent.

**Thunglish:** 4 + 2 = 6; numbers sari.

#### Step 6 – Interview Answer

**Short answer (30 seconds):** "I used `filter()` to get the active users and `reduce()` to build a summary object with total, active, and inactive counts."

**Detailed answer (60–90 seconds):** "A dashboard summary is a single object computed from a list, so `reduce()` is the right tool for aggregation. `filter()` can supply the active users, but if I only need counts, one `reduce` is enough and avoids creating an intermediate array. I also check that active plus inactive equals total as a sanity test. For large collections, I would use MongoDB's `countDocuments` or an aggregation pipeline instead of loading all users into memory."

**Thunglish:** "Summary object → `reduce`. Counts mattum na single `reduce` podhum. Active + inactive = total check pannunga. Periya data na MongoDB `countDocuments` / aggregation."

#### Step 7 – Time and Space Complexity

**English:** Filter + reduce version: time O(n) + O(n) = O(n); auxiliary space O(k) for the active-users array. Single-pass `reduce` or loop: time O(n), auxiliary O(1) (the `reduce` version that returns a new object each step allocates temporary objects, but only O(1) is live at any time). Output O(1).

**Thunglish:** O(n) time. `filter` version la O(k) extra; single pass la O(1).

---

> [!IMPORTANT]
> **Checkpoint – All 40 problems complete.** Tick the Level 3 and Level 4 boxes in the Progress Tracker, then continue with the interview sections below.

---

