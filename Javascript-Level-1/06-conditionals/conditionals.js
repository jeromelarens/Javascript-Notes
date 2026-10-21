/**
 * 🔀 Module 6: Conditional Statements
 * 
 * if, if...else, if...else if...else, switch (with break and fall-through), ternary
 */

console.log("--- 1. if...else if...else ---");
const mark = 85;

if (mark >= 90) {
  console.log("Grade: A+");
} else if (mark >= 80) {
  console.log("Grade: A");
} else if (mark >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: Needs Improvement");
}

console.log("\n--- 2. switch Statement ---");
// switch uses strict equality (===)
const dayNumber = 3;

switch (dayNumber) {
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
    console.log("Other day");
}

console.log("\n--- 3. Intentional switch Fall-Through ---");
const month = 4; // April

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("31 days in this month");
    break;
  case 4: case 6: case 9: case 11:
    console.log("30 days in this month");
    break;
  case 2:
    console.log("28 or 29 days in this month");
    break;
  default:
    console.log("Invalid month");
}

console.log("\n--- 4. Clean Guard Clauses & Early Return Pattern ---");
function checkAccess(userAge, hasPass) {
  if (userAge < 18) return "Denied: Underage";
  if (!hasPass) return "Denied: No valid pass";
  return "Access Granted";
}

console.log("Access for 20 with pass:", checkAccess(20, true));
console.log("Access for 16 with pass:", checkAccess(16, true));
