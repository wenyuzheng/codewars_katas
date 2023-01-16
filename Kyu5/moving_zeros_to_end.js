function moveZeros(arr) {
  return arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));
}

// console.log(moveZeros([1])); // [1]
// console.log(moveZeros([0])); // [0]
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(
  moveZeros([
    9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0,
  ]) //[ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
);
