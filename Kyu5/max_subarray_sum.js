var removeLeadOrEndNegatives = function (arr) {
  if (arr[0] <= 0) {
    arr.shift();
    return removeLeadOrEndNegatives(arr);
  }
  if (arr[arr.length - 1] <= 0) {
    arr.pop();
    return removeLeadOrEndNegatives(arr);
  }
  return arr;
};

var joinNumbers = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i] > 0 && arr[i - 1] > 0) ||
      (arr[i] < 0 && arr[i - 1] < 0) ||
      arr[i] + arr[i - 1] > 0
    ) {
      arr.splice(i - 1, 2, arr[i] + arr[i - 1]);
      return joinNumbers(arr);
    }
  }
  return arr;
};

var maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  arr = removeLeadOrEndNegatives(arr);
};

// console.log(maxSequence([])); // 0
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// console.log(
//   removeLeadOrEndNegatives([0, -3, -2, 1, -3, 4, -1, 2, 1, -5, 4, -1, -2])
// );

console.log(joinNumbers([1, -3, -2, 4, 4, 5, -10, -1, 2, 1, -5, 4]));
