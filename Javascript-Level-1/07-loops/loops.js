/**
 * 🔁 Module 7: Loops
 * 
 * for, while, do...while, for...of (values), for...in (keys),
 * break, continue, and nested loop patterns.
 */

console.log("--- 1. Standard for Loop ---");
for (let i = 1; i <= 3; i++) {
  console.log("for iteration:", i);
}

console.log("\n--- 2. while Loop ---");
let count = 1;
while (count <= 3) {
  console.log("while count:", count);
  count++;
}

console.log("\n--- 3. do...while Loop (Guaranteed at least 1 execution) ---");
let conditionFalse = 10;
do {
  console.log("do...while ran once even though condition false! val =", conditionFalse);
  conditionFalse++;
} while (conditionFalse < 5);

console.log("\n--- 4. for...of Loop (Iterates over values of iterables) ---");
const frameworks = ["React", "Vue", "Angular"];
for (const fw of frameworks) {
  console.log("Framework:", fw);
}

console.log("\n--- 5. for...in Loop (Iterates over enumerable keys of an object) ---");
const course = { title: "JavaScript Level 1", duration: "2 weeks", level: "Beginner" };
for (const key in course) {
  console.log(`${key} -> ${course[key]}`);
}

console.log("\n--- 6. break and continue ---");
for (let i = 1; i <= 6; i++) {
  if (i === 3) {
    console.log("Skipping 3 via continue");
    continue;
  }
  if (i === 5) {
    console.log("Stopping at 5 via break");
    break;
  }
  console.log("Step:", i);
}

console.log("\n--- 7. Nested Loop (Star Triangle Pattern) ---");
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let star = 1; star <= row; star++) {
    line += "* ";
  }
  console.log(line);
}
