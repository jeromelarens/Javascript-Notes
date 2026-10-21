/**
 * Exercise 3: typeof 10 Different Values
 * Prompt: Print the typeof of 10 different values, including null, [], and NaN.
 */

const testValues = [
  "Hello",               // string
  42,                    // number
  NaN,                   // number
  100n,                  // bigint
  true,                  // boolean
  undefined,             // undefined
  null,                  // object (historical bug)
  Symbol("id"),          // symbol
  [],                    // object (Array)
  { a: 1 }               // object
];

testValues.forEach((val, idx) => {
  console.log(`${idx + 1}. typeof ${String(val)} ->`, typeof val);
});
