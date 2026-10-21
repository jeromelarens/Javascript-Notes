/**
 * Problem 17: Character Frequency Counter
 * 
 * Logic:
 * Iterate through the string, building an object map where key is the character
 * and value is the count of occurrences.
 */

function charFrequency(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  return freq;
}

console.log("Frequency for 'hello':", charFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

console.log("Frequency for 'javascript':", charFrequency("javascript"));
