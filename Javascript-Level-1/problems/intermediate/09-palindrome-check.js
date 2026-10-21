/**
 * Problem 9: Palindrome Check
 * 
 * Logic:
 * A string is a palindrome if it reads the same backwards as forwards.
 * (e.g. "racecar", "madam").
 */

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = "";
  for (const ch of clean) {
    reversed = ch + reversed;
  }
  return clean === reversed;
}

// Test Cases
console.log("'Madam' is palindrome?          ->", isPalindrome("Madam")); // true
console.log("'Hello' is palindrome?          ->", isPalindrome("Hello")); // false
console.log("'racecar' is palindrome?        ->", isPalindrome("racecar")); // true
console.log("'A man, a plan, a canal: Panama'->", isPalindrome("A man, a plan, a canal: Panama")); // true
