/**
 * Exercise 7: Recreating forEach, map, filter, and reduce
 * Prompt: Write your own forEach, map, filter, and reduce.
 */

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

function myMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}

function myFilter(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) result.push(arr[i]);
  }
  return result;
}

function myReduce(arr, cb, initialValue) {
  let acc = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

const list = [1, 2, 3, 4];
console.log("myMap doubled: ", myMap(list, x => x * 2));
console.log("myFilter evens:", myFilter(list, x => x % 2 === 0));
console.log("myReduce sum:  ", myReduce(list, (a, b) => a + b, 0));
