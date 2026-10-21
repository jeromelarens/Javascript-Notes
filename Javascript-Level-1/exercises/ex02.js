/**
 * Exercise 2: Object Mutation with const
 * Prompt: Create a const object for a product (name, price, stock). Update stock and print it.
 * Then try reassigning the object and observe the error.
 */

const product = {
  name: "Mechanical Keyboard",
  price: 3499,
  stock: 12
};

console.log("Initial product:", product);

// Updating stock (mutation is allowed on const object properties)
product.stock = 25;
console.log("Updated stock:  ", product.stock);

// Reassignment fails
try {
  // @ts-ignore
  product = { name: "Mouse" };
} catch (err) {
  console.log("Expected TypeError caught:", err.message);
}
