/**
 * Exercise 8: Chaining filter -> map -> reduce
 * Prompt: Chain filter -> map -> reduce to compute the total price of in-stock products.
 */

const catalog = [
  { name: "Laptop", price: 60000, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Keyboard", price: 2500, inStock: true },
  { name: "Monitor", price: 15000, inStock: true },
];

const totalInStock = catalog
  .filter(item => item.inStock)
  .map(item => item.price)
  .reduce((sum, price) => sum + price, 0);

console.log("Total price of in-stock items: ₹" + totalInStock); // 60000 + 2500 + 15000 = 77500
