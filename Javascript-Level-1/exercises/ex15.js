/**
 * Exercise 15: for...of with Index
 * Prompt: Loop through an array of 5 skills with for...of and print each with its index.
 */

const skills = ["JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"];

// Using entries() with for...of gives [index, value] pairs cleanly
for (const [index, skill] of skills.entries()) {
  console.log(`Skill #${index + 1}: ${skill}`);
}
