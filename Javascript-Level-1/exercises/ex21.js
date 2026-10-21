/**
 * Exercise 21: Converting 5 Regular Functions to Arrow Functions
 * Prompt: Convert 5 normal functions you wrote earlier into arrow functions.
 */

// 1. Greet
const greet = name => `Welcome, ${name}!`;

// 2. Square
const square = n => n * n;

// 3. Is Even
const isEven = n => n % 2 === 0;

// 4. Max of two
const maxOfTwo = (a, b) => (a > b ? a : b);

// 5. Celsius to Fahrenheit
const toFahrenheit = celsius => (celsius * 9) / 5 + 32;

console.log("1. greet('Dev'):       ", greet("Dev"));
console.log("2. square(7):          ", square(7));
console.log("3. isEven(14):         ", isEven(14));
console.log("4. maxOfTwo(25, 40):   ", maxOfTwo(25, 40));
console.log("5. toFahrenheit(100°C):", toFahrenheit(100));
