/**
 * Exercise 12: Leap Year using Only Logical Operators
 * Prompt: Leap year checker using only logical operators.
 */

const checkLeapYear = (year) => 
  ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

console.log("2024 is leap:", checkLeapYear(2024)); // true
console.log("1900 is leap:", checkLeapYear(1900)); // false
console.log("2000 is leap:", checkLeapYear(2000)); // true
console.log("2026 is leap:", checkLeapYear(2026)); // false
