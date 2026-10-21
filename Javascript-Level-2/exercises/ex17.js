/**
 * Exercise 17: Method Borrowing with call
 * Prompt: Use call to borrow a method from one object for another.
 */

const personA = {
  firstName: "Arun",
  lastName: "Kumar",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const personB = {
  firstName: "Divya",
  lastName: "Priya"
  // Does not have getFullName method!
};

// Borrowing personA's method for personB
const borrowedFullName = personA.getFullName.call(personB);
console.log("Borrowed Full Name:", borrowedFullName); // Divya Priya
