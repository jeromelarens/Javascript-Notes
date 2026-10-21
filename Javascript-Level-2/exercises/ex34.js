/**
 * Exercise 34: Immutable Merging with Spread
 * Prompt: Merge two objects and two arrays immutably using spread.
 */

// Array Merging
const frontEndSkills = ["React", "Vue"];
const backEndSkills = ["Node.js", "Express"];
const fullStackSkills = [...frontEndSkills, ...backEndSkills];

// Object Merging (overriding properties safely)
const defaultTheme = { mode: "dark", fontSize: 14, showSidebar: true };
const userOverrides = { fontSize: 16, showSidebar: false };
const mergedSettings = { ...defaultTheme, ...userOverrides };

console.log("Merged Skills:   ", fullStackSkills);
console.log("Merged Settings: ", mergedSettings);
console.log("Originals intact:", frontEndSkills, defaultTheme);
