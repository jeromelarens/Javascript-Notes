/**
 * Exercise 29: Partial Application vs bind
 * Prompt: Write partial(fn, ...preset) and compare with bind.
 */

function partial(fn, ...preset) {
  return function (...later) {
    return fn(...preset, ...later);
  };
}

function calculateBilling(taxPercent, discountAmount, billAmount) {
  const discounted = billAmount - discountAmount;
  const tax = (discounted * taxPercent) / 100;
  return discounted + tax;
}

// Custom partial
const standardBilling = partial(calculateBilling, 18, 50);
console.log("Via custom partial:", standardBilling(1000)); // (1000 - 50) + 18% = 1121

// Built-in bind
const boundBilling = calculateBilling.bind(null, 18, 50);
console.log("Via native bind:   ", boundBilling(1000));     // 1121
