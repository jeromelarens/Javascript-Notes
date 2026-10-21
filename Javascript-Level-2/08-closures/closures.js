/**
 * 🔒 Module 8: Closures
 * 
 * A closure is a function bundled with references to its surrounding
 * lexical environment, even after the outer function has returned.
 */

console.log("--- 1. Basic Counter Closure ---");
function createCounter(start = 0) {
  let count = start; // Private variable retained by the closure

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter(0);
const counter2 = createCounter(100);

console.log("counter1:", counter1()); // 1
console.log("counter1:", counter1()); // 2
console.log("counter2:", counter2()); // 101 (independent environment)

console.log("\n--- 2. Encapsulating Private State (Bank Account) ---");
function createAccount(owner, initialBalance) {
  let balance = initialBalance; // Cannot be accessed directly from outside!

  return {
    deposit(amount) {
      if (amount <= 0) throw new Error("Deposit must be positive");
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
    getOwner() {
      return owner;
    }
  };
}

const myAccount = createAccount("Arun", 5000);
console.log("Account Owner:       ", myAccount.getOwner());
console.log("Initial Balance:     ", myAccount.getBalance());
console.log("Deposit 1500 ->      ", myAccount.deposit(1500));
console.log("Direct myAccount.balance:", myAccount.balance); // undefined (safe!)

console.log("\n--- 3. Closure in Loops (The Classic Gotcha) ---");
// Solution using block-scoped let creates a new binding per iteration
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    // console.log("let i =", i); // prints 1, 2, 3
  }, 10);
}
console.log("Loop closure with 'let' scheduled properly.");
