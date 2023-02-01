var solution = function (firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
      sum += Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2);
    }
    return sum / firstArray.length;
  }
};

console.log(solution([1, 2, 3], [4, 5, 6])); // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(solution([0, -1], [-1, 0])); // 1
