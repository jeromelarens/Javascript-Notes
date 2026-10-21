/**
 * Exercise 33: Converting 3 Impure Functions to Pure Functions
 * Prompt: Convert 3 impure functions into pure ones (no mutation, inject time/random).
 */

// 1. Array modification
// Impure: arr.push(item)
// Pure:
const addElementPure = (arr, item) => [...arr, item];

// 2. Random number generation
// Impure: const roll = () => Math.random() * 6;
// Pure:
const calculateDiceScore = (seedRandomValue, maxSides = 6) => 
  Math.floor(seedRandomValue * maxSides) + 1;

// 3. System time dependency
// Impure: const getTimestamp = () => new Date();
// Pure:
const formatLogEntry = (message, timestamp) => `[${timestamp}] ${message}`;

console.log("1. Pure array add: ", addElementPure([1, 2], 3));
console.log("2. Pure dice score:", calculateDiceScore(0.75)); // 5
console.log("3. Pure log entry: ", formatLogEntry("Server healthy", "2026-10-21T00:00:00Z"));
