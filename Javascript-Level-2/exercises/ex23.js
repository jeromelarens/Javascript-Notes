/**
 * Exercise 23: Core Recursion Suite
 * Prompt: Write recursive: factorial, power, sumArray, reverseString, isPalindrome.
 */

const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
const power = (base, exp) => (exp === 0 ? 1 : base * power(base, exp - 1));
const sumArray = arr => (arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1)));
const reverseString = str => (str === "" ? "" : reverseString(str.slice(1)) + str[0]);
const isPalindrome = str => {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
};

console.log("factorial(5)         =", factorial(5));           // 120
console.log("power(2, 6)          =", power(2, 6));            // 64
console.log("sumArray([1, 2, 3])  =", sumArray([1, 2, 3]));    // 6
console.log("reverseString('cat') =", reverseString("cat"));   // tac
console.log("isPalindrome('racecar') =", isPalindrome("racecar")); // true
console.log("isPalindrome('hello')   =", isPalindrome("hello"));   // false
