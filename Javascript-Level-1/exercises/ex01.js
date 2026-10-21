/**
 * Exercise 1: Variables & Template Literals
 * Prompt: Declare variables for your name, age, city, and isStudent. Print them with a template literal.
 */

const fullName = "Arun Kumar";
const age = 21;
const city = "Chennai";
const isStudent = true;

const summary = `Hi, I am ${fullName}, ${age} years old from ${city}. Student status: ${isStudent ? "Yes" : "No"}.`;
console.log(summary);
