// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
  let result = [];
  while (a.length != 0 && b.length != 0) {
    result.push(a[0] < b[0] ? a.shift() : b.shift());
  }

  return [...result, ...a, ...b];
}

console.log(mergesorted([], [])); // []
console.log(mergesorted([1], [])); // [1]
console.log(mergesorted([], [1])); // [1]
console.log(mergesorted([1, 2], [1])); // [1,1,2]
console.log(mergesorted([4], [1, 2, 3])); // [1,2,3,4]
console.log(mergesorted([2, 4, 6], [1, 3, 5])); // [1, 2, 3, 4, 5, 6]
