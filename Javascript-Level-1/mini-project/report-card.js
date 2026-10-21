/**
 * 🎮 Mini Project: Student Report Card Generator (Console App)
 * 
 * Demonstrates:
 * - Variables (const, let)
 * - Data types & type safety
 * - Operators (??, .toFixed, % arithmetic)
 * - Conditional branching (grade boundaries, pass/fail)
 * - Loops & Array methods (.map, .filter, .sort, for...of)
 * - Pure helper functions and arrow functions
 * - Scope integrity and strict mode
 * - Bonus Challenges:
 *    1. Subject-wise highest marks
 *    2. Sorted Rank list
 *    3. Input validation function (addStudent)
 *    4. Star rating using repeat()
 */

"use strict";

const SUBJECT_NAMES = ["Tamil", "English", "Maths", "Science", "Social"];

// 📦 1. Data Store
const students = [
  { name: "Arun",    marks: [85, 90, 78, 92, 88] },
  { name: "Divya",   marks: [95, 89, 94, 91, 97] },
  { name: "Karthik", marks: [60, 45, 70, 30, 55] }, // Has a subject < 35 -> Fail
  { name: "Meena",   marks: [72, 68, 80, 75, 79] },
  { name: "Ravi",    marks: [40, 50, 35, 45, null] }, // Missing mark handled safely!
];

// 🔧 2. Helper Functions
const calculateTotal = (marks) => {
  let total = 0;
  for (const mark of marks) {
    const value = Number(mark ?? 0);          // null/undefined converted to 0
    total += Number.isNaN(value) ? 0 : value; // NaN converted to 0
  }
  return total;
};

const calculateAverage = (total, count) => (count > 0 ? total / count : 0);

const getGrade = (average) => {
  if (average >= 90) return "A+";
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "F";
};

const getStarRating = (grade) => {
  switch (grade) {
    case "A+": return "⭐".repeat(5);
    case "A":  return "⭐".repeat(4);
    case "B":  return "⭐".repeat(3);
    case "C":  return "⭐".repeat(2);
    case "D":  return "⭐".repeat(1);
    default:   return "❌ (No Stars)";
  }
};

const hasFailedAnySubject = (marks, passThreshold = 35) => {
  for (const mark of marks) {
    const cleanMark = Number(mark ?? 0);
    if (Number.isNaN(cleanMark) || cleanMark < passThreshold) {
      return true;
    }
  }
  return false;
};

// 🧮 3. Build & Compute Report
const generateReports = (studentList) => {
  return studentList.map((student) => {
    const total = calculateTotal(student.marks);
    const average = calculateAverage(total, student.marks.length);
    const grade = getGrade(average);
    const isFailed = hasFailedAnySubject(student.marks);

    return {
      name: student.name,
      marks: student.marks,
      total,
      average: Number(average.toFixed(2)),
      grade,
      stars: getStarRating(grade),
      result: isFailed ? "FAIL" : "PASS",
    };
  });
};

const report = generateReports(students);

// 🖨️ 4. Display Report Card
console.log("\n==========================================================================");
console.log("                   🎓 STUDENT REPORT CARD GENERATOR                       ");
console.log("==========================================================================");

console.log(
  "Name".padEnd(10) + " | " +
  "Total".padStart(5) + " | " +
  "Avg".padStart(6) + " | " +
  "Grade".padEnd(5) + " | " +
  "Result".padEnd(6) + " | " +
  "Rating"
);
console.log("-".repeat(74));

for (const row of report) {
  const formattedRow =
    row.name.padEnd(10) + " | " +
    String(row.total).padStart(5) + " | " +
    String(row.average.toFixed(2)).padStart(6) + " | " +
    row.grade.padEnd(5) + " | " +
    row.result.padEnd(6) + " | " +
    row.stars;
  console.log(formattedRow);
}

// 🏆 5. Topper & Statistics
const topper = report.reduce((top, current) => 
  (current.total > top.total ? current : top), report[0]);

const classAverage = (report.reduce((acc, curr) => acc + curr.average, 0) / report.length).toFixed(2);
const passCount = report.filter(r => r.result === "PASS").length;

console.log("\n--------------------------------------------------------------------------");
console.log(`🏆 Class Topper:   ${topper.name} with ${topper.total} marks (Avg: ${topper.average}%)`);
console.log(`📊 Class Average:  ${classAverage}%`);
console.log(`✅ Pass Rate:      ${passCount} / ${report.length} students passed (${((passCount / report.length) * 100).toFixed(1)}%)`);

// 🚀 6. Bonus Challenge 1: Subject-Wise Highest Mark
console.log("\n--- 📚 Bonus 1: Subject-Wise Highest Scores ---");
SUBJECT_NAMES.forEach((subj, subjIndex) => {
  let highest = -1;
  let highestStudent = "";

  students.forEach(student => {
    const mark = Number(student.marks[subjIndex] ?? 0);
    if (mark > highest) {
      highest = mark;
      highestStudent = student.name;
    }
  });

  console.log(`${subj.padEnd(10)}: ${highest} marks (${highestStudent})`);
});

// 🚀 7. Bonus Challenge 2: Sorted Rank List
console.log("\n--- 🎖️ Bonus 2: Student Rank List (Sorted by Total) ---");
const rankedList = [...report].sort((a, b) => b.total - a.total);
rankedList.forEach((student, index) => {
  console.log(`Rank ${index + 1}: ${student.name.padEnd(10)} - Total: ${student.total} [${student.result}]`);
});

// 🚀 8. Bonus Challenge 3: addStudent Validator Function
function addStudent(name, marks) {
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    throw new Error("Validation Error: Student name must be a non-empty string!");
  }
  if (!Array.isArray(marks) || marks.length !== 5) {
    throw new Error("Validation Error: Marks must be an array of exactly 5 numbers!");
  }
  
  students.push({ name: name.trim(), marks });
  console.log(`\n✅ Successfully added student '${name}' to roster!`);
}

addStudent("Priya", [88, 92, 85, 90, 89]);
console.log("Updated Total Students:", students.length);
console.log("==========================================================================\n");
