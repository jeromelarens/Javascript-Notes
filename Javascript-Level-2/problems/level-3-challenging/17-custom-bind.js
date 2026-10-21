/**
 * Problem 17: Implement Function.prototype.bind (myBind)
 */

Function.prototype.myBind = function (context, ...bound) {
  const fn = this;
  return function (...args) {
    return fn.apply(context, [...bound, ...args]);
  };
};

function formatGreeting(salutation, punctuation) {
  return `${salutation}, ${this.firstName}${punctuation}`;
}

const userObj = { firstName: "Arun" };
const personalizedGreeting = formatGreeting.myBind(userObj, "Vanakkam");

console.log(personalizedGreeting("!")); // Vanakkam, Arun!
