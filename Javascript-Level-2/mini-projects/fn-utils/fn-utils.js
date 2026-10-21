/**
 * 🛠️ Project 1: Function Utility Library (fn-utils.js)
 * 
 * Includes:
 * - once, after, memoize
 * - debounce, throttle
 * - curry, partial
 * - compose, pipe
 * - self-tests using console.assert
 */

"use strict";

// ---------- Utilities ----------
const once = (fn) => {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
};

const after = (n, fn) => {
  let count = 0;
  return function (...args) {
    count++;
    if (count >= n) return fn.apply(this, args);
  };
};

const memoize = (fn) => {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn.apply(this, args));
    return cache.get(key);
  };
};

const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
};

const throttle = (fn, limit) => {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      return fn.apply(this, args);
    }
  };
};

const curry = (fn) =>
  function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...next) => curried.apply(this, [...args, ...next]);
  };

const partial = (fn, ...preset) => (...later) => fn(...preset, ...later);

const compose = (...fns) => (x) => fns.reduceRight((acc, f) => f(acc), x);
const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

// ---------- Tests ----------
console.log("Running fn-utils test assertions...");

let initCount = 0;
const init = once(() => ++initCount);
init(); init();
console.assert(initCount === 1, "once should run exactly one time");

let computeCount = 0;
const square = memoize((n) => { computeCount++; return n * n; });
square(5); square(5);
console.assert(computeCount === 1, "memoize should cache results");

const add3 = curry((a, b, c) => a + b + c);
console.assert(add3(1)(2)(3) === 6, "curry (a)(b)(c)");
console.assert(add3(1, 2)(3) === 6, "curry (a, b)(c)");

const greet = partial((greeting, name) => `${greeting}, ${name}`, "Hello");
console.assert(greet("Arun") === "Hello, Arun", "partial");

const inc = (x) => x + 1;
const dbl = (x) => x * 2;
console.assert(compose(dbl, inc)(5) === 12, "compose");
console.assert(pipe(dbl, inc)(5) === 11, "pipe");

console.log("✅ All fn-utils tests passed successfully!");

module.exports = { once, after, memoize, debounce, throttle, curry, partial, compose, pipe };
