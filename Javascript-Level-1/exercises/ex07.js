/**
 * Exercise 7: || vs ?? with 0, "", and null
 * Prompt: Write a program using || and ?? that shows the difference with 0, "", and null.
 */

const cases = [
  { name: "zero (0)", val: 0, defaultVal: 100 },
  { name: "empty string ('')", val: "", defaultVal: "Default Text" },
  { name: "null", val: null, defaultVal: "Default Text" },
  { name: "undefined", val: undefined, defaultVal: "Default Text" }
];

console.log("Value".padEnd(20), "|| operator".padEnd(16), "?? operator");
console.log("-".repeat(50));

cases.forEach(c => {
  const orResult = c.val || c.defaultVal;
  const nullishResult = c.val ?? c.defaultVal;
  console.log(
    c.name.padEnd(20),
    String(orResult).padEnd(16),
    String(nullishResult)
  );
});
