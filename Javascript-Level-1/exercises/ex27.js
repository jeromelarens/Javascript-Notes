/**
 * Exercise 27: isEmpty(value) Utility Function
 * Prompt: Write a function isEmpty(value) that returns true for "", null, undefined, [], and {}.
 */

function isEmpty(value) {
  // Check for null or undefined
  if (value === null || value === undefined) return true;

  // Check for empty string
  if (typeof value === "string" && value.trim().length === 0) return true;

  // Check for empty array
  if (Array.isArray(value) && value.length === 0) return true;

  // Check for empty plain object
  if (typeof value === "object" && Object.keys(value).length === 0) return true;

  return false;
}

// Test Cases
console.log("isEmpty('')        ->", isEmpty(""));         // true
console.log("isEmpty('   ')     ->", isEmpty("   "));      // true
console.log("isEmpty(null)      ->", isEmpty(null));       // true
console.log("isEmpty(undefined) ->", isEmpty(undefined));  // true
console.log("isEmpty([])        ->", isEmpty([]));         // true
console.log("isEmpty({})        ->", isEmpty({}));         // true
console.log("isEmpty('hello')   ->", isEmpty("hello"));    // false
console.log("isEmpty([1, 2])    ->", isEmpty([1, 2]));     // false
console.log("isEmpty({ a: 1 })  ->", isEmpty({ a: 1 }));   // false
console.log("isEmpty(0)         ->", isEmpty(0));          // false (0 is a valid number, not empty)
