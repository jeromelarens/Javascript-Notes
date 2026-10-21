/**
 * Exercise 9: Grade Calculator
 * Prompt: Grade calculator: marks -> A, B, C, D, or Fail (use if...else if).
 */

function calculateGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "Fail";
}

[95, 82, 67, 45, 32].forEach(m => {
  console.log(`Marks: ${m} -> Grade: ${calculateGrade(m)}`);
});
