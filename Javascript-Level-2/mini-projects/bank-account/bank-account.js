/**
 * 🏦 Project 2: Bank Account System (Closures + Private State)
 * 
 * Goal: Build createAccount(owner, initialBalance) with private balance,
 * transaction history, and validation.
 */

"use strict";

function createAccount(owner, initialBalance = 0) {
  let balance = initialBalance;
  const history = [];

  const record = (type, amount) => {
    history.push({ type, amount, balance, at: new Date().toISOString() });
  };

  return {
    deposit(amount) {
      if (!(amount > 0)) throw new Error("Deposit must be positive");
      balance += amount;
      record("deposit", amount);
      return balance;
    },

    withdraw(amount) {
      if (!(amount > 0)) throw new Error("Withdrawal must be positive");
      if (amount > balance) throw new Error("Insufficient funds");
      balance -= amount;
      record("withdraw", amount);
      return balance;
    },

    getBalance: () => balance,
    getOwner: () => owner,
    getHistory: () => history.map((entry) => ({ ...entry })), // returns immutable defensive copies
  };
}

console.log("==========================================");
console.log("🏦 BANK ACCOUNT SYSTEM TEST RUN");
console.log("==========================================");

const account = createAccount("Arun", 1000);

console.log("Initial Balance: ", account.getBalance()); // 1000
account.deposit(500);
console.log("After Deposit 500:", account.getBalance()); // 1500
account.withdraw(200);
console.log("After Withdraw 200:", account.getBalance()); // 1300

console.log("Transaction History Count:", account.getHistory().length); // 2

try {
  account.withdraw(5000);
} catch (e) {
  console.log("Expected validation error caught:", e.message); // Insufficient funds
}

console.log("Direct property access account.balance is:", account.balance); // undefined (safely encapsulated)
console.log("==========================================\n");

module.exports = { createAccount };
