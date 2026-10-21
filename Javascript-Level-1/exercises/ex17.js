/**
 * Exercise 17: Inverted Star Pattern
 * Prompt: Print this pattern using nested loops:
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 * *
 */

const totalRows = 5;

for (let r = totalRows; r >= 1; r--) {
  let stars = "";
  for (let c = 1; c <= r; c++) {
    stars += "* ";
  }
  console.log(stars.trim());
}
