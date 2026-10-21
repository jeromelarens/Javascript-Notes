/**
 * Problem 12: Implement Array.prototype.map (myMap)
 */

Array.prototype.myMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4];
console.log("Original:     ", numbers);
console.log("myMap doubled:", numbers.myMap(x => x * 2)); // [2, 4, 6, 8]
