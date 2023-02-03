// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
  if (a.length <= 1 && b.length === 0) return a;
  if (a.length === 0 && b.length <= 1) return b;

  let result = [];
  while (a.length != 0 && b.length != 0) {
    if (a[0] < b[0]) {
      result.push(a.shift());
    } else if (a[0] === b[0]) {
      result.push(a.shift());
      result.push(b.shift());
    } else {
      result.push(b.shift());
    }
  }

  return [...result, ...a, ...b];
}

console.log(mergesorted([], [])); // []
console.log(mergesorted([1], [])); // [1]
console.log(mergesorted([], [1])); // [1]
console.log(mergesorted([1, 2], [1])); // [1,1,2]
console.log(mergesorted([4], [1, 2, 3])); // [1,2,3,4]
console.log(mergesorted([2, 4, 6], [1, 3, 5])); // [1, 2, 3, 4, 5, 6]
