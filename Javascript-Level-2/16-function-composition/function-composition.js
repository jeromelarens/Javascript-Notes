/**
 * 🔗 Module 16: Function Composition
 * 
 * compose: executes right to left (f(g(x)))
 * pipe:    executes left to right (x -> f -> g)
 */

console.log("--- 1. Manual String Transformation ---");
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const slugify = str => str.replace(/\s+/g, "-");

console.log("Manual:", slugify(toLower(trim("  Hello JavaScript World  "))));

console.log("\n--- 2. Generic pipe (Left -> Right) & compose (Right -> Left) ---");
const pipe = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);

const cleanSlugWithPipe = pipe(trim, toLower, slugify);
const cleanSlugWithCompose = compose(slugify, toLower, trim);

console.log("Pipe:   ", cleanSlugWithPipe("   Learn NodeJS Backend   "));
console.log("Compose:", cleanSlugWithCompose("   Learn NodeJS Backend   "));

console.log("\n--- 3. Data Transformation Pipeline with Pipe ---");
const employees = [
  { name: "Arun", age: 24, active: true },
  { name: "Divya", age: 29, active: true },
  { name: "Ravi", age: 17, active: true },
  { name: "Karthik", age: 31, active: false }
];

const filterActive = list => list.filter(e => e.active);
const filterAdults = list => list.filter(e => e.age >= 18);
const extractNames = list => list.map(e => e.name);
const sortAlphabetical = list => [...list].sort();

const getEligibleEmployeeNames = pipe(
  filterActive,
  filterAdults,
  extractNames,
  sortAlphabetical
);

console.log("Eligible:", getEligibleEmployeeNames(employees)); // ["Arun", "Divya"]
