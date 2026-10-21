/**
 * Exercise 19: Default Parameter Function
 * Prompt: Write calculateTax(amount, rate = 18) using a default parameter.
 */

function calculateTax(amount, rate = 18) {
  const tax = (amount * rate) / 100;
  return {
    baseAmount: amount,
    ratePercent: rate,
    taxAmount: Number(tax.toFixed(2)),
    total: Number((amount + tax).toFixed(2))
  };
}

console.log("With default 18% tax:   ", calculateTax(1000));
console.log("With custom 5% tax:      ", calculateTax(1000, 5));
