Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (
    !Array.isArray(this) ||
    !Array.isArray(other) ||
    this.length !== other.length
  )
    return false;

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) !== Array.isArray(other[i])) return false;
    else if (Array.isArray(this[i])) {
      return this[i].sameStructureAs(other[i]);
    }
  }
  return true;
};

console.log([1, 1, 1].sameStructureAs([2, 2, 2])); // true
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])); // true
console.log([1, "[", "]"].sameStructureAs(["[", "]", 1])); // true

console.log([1, [1, 1]].sameStructureAs([[2, 2], 2])); // false
console.log([1, 2].sameStructureAs([[3], 3])); // false
console.log([].sameStructureAs(1)); // false
console.log([].sameStructureAs({})); // false
console.log([[[], []]].sameStructureAs([[1, 1]])); // false
