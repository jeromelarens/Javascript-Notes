/**
 * Problem 4: Leap Year Check
 * 
 * Logic:
 * Divisible by 4 AND NOT divisible by 100, OR divisible by 400.
 */

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test Cases
console.log("2024 is leap year?", isLeapYear(2024)); // true
console.log("1900 is leap year?", isLeapYear(1900)); // false (century year not div by 400)
console.log("2000 is leap year?", isLeapYear(2000)); // true (century year div by 400)
console.log("2023 is leap year?", isLeapYear(2023)); // false
