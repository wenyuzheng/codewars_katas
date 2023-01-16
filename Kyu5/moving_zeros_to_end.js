function moveZeros(arr) {
  let countZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      countZero++;
    }
  }
  for (let i = 0; i < countZero; i++) {
    arr.push(0);
  }
  return arr;
}

console.log(moveZeros([1])); // [1]
console.log(moveZeros([0])); // [0]
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
