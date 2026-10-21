/**
 * Exercise 13: Private Stack Data Structure
 * Prompt: Build createStack() with private storage and push, pop, peek, size.
 */

function createStack() {
  const items = []; // Enclosed private array

  return {
    push(item) {
      items.push(item);
      return items.length;
    },
    pop() {
      if (items.length === 0) return undefined;
      return items.pop();
    },
    peek() {
      return items[items.length - 1];
    },
    size() {
      return items.length;
    }
  };
}

const stack = createStack();
stack.push("Layer 1");
stack.push("Layer 2");
stack.push("Layer 3");

console.log("Peek: ", stack.peek()); // Layer 3
console.log("Pop:  ", stack.pop());  // Layer 3
console.log("Size: ", stack.size()); // 2
console.log("Direct access stack.items:", stack.items); // undefined (safely private!)
