/**
 * Exercise 16: Object Keys Iteration with for...in
 * Prompt: Loop through an object's keys with for...in and print key: value.
 */

const developerProfile = {
  name: "Jerome Larens",
  experienceYears: 3,
  primaryLanguage: "JavaScript",
  stack: "MERN",
  isEmployed: true
};

for (const prop in developerProfile) {
  console.log(`${prop.padEnd(16)}: ${developerProfile[prop]}`);
}
