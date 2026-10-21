/**
 * Problem 10: Count Vowels in a String
 * 
 * Vowels: a, e, i, o, u (case-insensitive)
 */

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const ch of str.toLowerCase()) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}

// Test Cases
console.log("countVowels('Interview')  ->", countVowels("Interview"));  // 4 (I, e, i, e)
console.log("countVowels('JavaScript') ->", countVowels("JavaScript")); // 3 (a, a, i)
console.log("countVowels('rhythm')     ->", countVowels("rhythm"));     // 0
