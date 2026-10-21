/**
 * Problem 9: Implement compose and pipe
 */

const compose = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, f) => f(acc), x);

const inc = x => x + 1;
const dbl = x => x * 2;

console.log("compose(dbl, inc)(5) -> dbl(inc(5)) =", compose(dbl, inc)(5)); // 12
console.log("pipe(dbl, inc)(5)    -> inc(dbl(5)) =", pipe(dbl, inc)(5));    // 11
