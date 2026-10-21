/**
 * Problem 8: Reverse a String
 * 
 * 1. Using a loop (classic algorithmic approach)
 * 2. Using built-in methods: split("").reverse().join("")
 */

function reverseStringLoop(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseStringBuiltin(str) {
  return str.split("").reverse().join("");
}

console.log("Loop:   ", reverseStringLoop("JavaScript"));  // tpircSavaJ
console.log("Builtin:", reverseStringBuiltin("JavaScript")); // tpircSavaJ
console.log("Loop:   ", reverseStringLoop("Hello World"));  // dlroW olleH
