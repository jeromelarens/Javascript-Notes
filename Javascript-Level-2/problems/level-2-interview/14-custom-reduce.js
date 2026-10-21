/**
 * Problem 14: Implement Array.prototype.reduce (myReduce)
 */

Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let start = 0;

  if (arguments.length >= 2) {
    acc = initialValue;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
    start = 1;
  }

  for (let i = start; i < this.length; i++) {
    if (i in this) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
};

const nums = [1, 2, 3, 4];
console.log("myReduce sum with init=0: ", nums.myReduce((a, b) => a + b, 0)); // 10
console.log("myReduce sum without init:", nums.myReduce((a, b) => a + b));    // 10
console.log("myReduce multiply:        ", nums.myReduce((a, b) => a * b, 1)); // 24
