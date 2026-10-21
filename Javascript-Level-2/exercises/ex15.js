/**
 * Exercise 15: Rate Limiter
 * Prompt: Build a rate limiter limitCalls(fn, max) that blocks calls after max invocations.
 */

function limitCalls(fn, max) {
  let calls = 0;

  return function(...args) {
    if (calls < max) {
      calls++;
      return fn.apply(this, args);
    }
    console.warn(`[LIMIT] Call ignored. Max limit of ${max} reached.`);
    return undefined;
  };
}

const sendOtp = limitCalls((phone) => {
  return `OTP sent to ${phone}`;
}, 3);

console.log(sendOtp("9876543210")); // Call 1 - OK
console.log(sendOtp("9876543210")); // Call 2 - OK
console.log(sendOtp("9876543210")); // Call 3 - OK
console.log(sendOtp("9876543210")); // Call 4 - Blocked
