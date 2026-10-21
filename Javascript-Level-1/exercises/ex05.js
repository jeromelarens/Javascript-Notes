/**
 * Exercise 5: Number() vs parseInt()
 * Prompt: Convert "123abc" to a number using Number() and parseInt(). Compare the results.
 */

const input = "123abc";

const viaNumber = Number(input);
const viaParseInt = parseInt(input, 10);

console.log("Input:               ", input);
console.log("Number(input):       ", viaNumber, "(requires whole string numeric)");
console.log("parseInt(input, 10): ", viaParseInt, "(parses leading digits until invalid char)");
