// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
  if (a.length <= 1 && b.length === 0) return a;
  if (a.length === 0 && b.length <= 1) return b;
}

console.log(mergesorted([], [])); // []
console.log(mergesorted([1], [])); // [1]
console.log(mergesorted([], [1])); // [1]
