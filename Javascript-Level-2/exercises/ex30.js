/**
 * Exercise 30: pipe and slugify
 * Prompt: Implement pipe and use it to build a slugify function.
 */

const pipe = (...fns) => (input) => fns.reduce((acc, fn) => fn(acc), input);

const stripSpaces = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const removeSpecial = str => str.replace(/[^a-z0-9\s-]/g, "");
const hyphenate = str => str.replace(/\s+/g, "-");

const slugify = pipe(stripSpaces, toLowerCase, removeSpecial, hyphenate);

const rawTitle = "   JavaScript: Functions, Closures & Modern ES6+ !  ";
console.log("Raw Title: ", rawTitle);
console.log("Slugified: ", slugify(rawTitle));
// javascript-functions-closures-modern-es6
