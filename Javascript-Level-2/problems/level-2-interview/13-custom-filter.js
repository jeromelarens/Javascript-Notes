/**
 * Problem 13: Implement Array.prototype.filter (myFilter)
 */

Array.prototype.myFilter = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log("Original:     ", numbers);
console.log("myFilter evens:", numbers.myFilter(x => x % 2 === 0)); // [2, 4, 6]
