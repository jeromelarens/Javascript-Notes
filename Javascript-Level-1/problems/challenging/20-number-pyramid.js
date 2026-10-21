/**
 * Problem 20: Print a Number Pyramid
 * 
 * Pattern for rows = 4:
 * 1 
 * 1 2 
 * 1 2 3 
 * 1 2 3 4 
 */

function printNumberPyramid(rows = 4) {
  console.log(`Printing Number Pyramid for ${rows} rows:`);
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line.trim());
  }
}

printNumberPyramid(5);
