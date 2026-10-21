/**
 * Problem 5: Reverse a String (Recursion)
 */

const reverse = str => (str === "" ? "" : reverse(str.slice(1)) + str[0]);

console.log("reverse('JavaScript') ->", reverse("JavaScript")); // tpircSavaJ
console.log("reverse('Node.js')     ->", reverse("Node.js"));     // sj.edoN
console.log("reverse('hello')      ->", reverse("hello"));      // olleh
