const addOneIntervals = (intervals, newInterval) => {
  const [startPos, startIndex] = findPosition(intervals, newInterval[0]);
  const [endPos, endIndex] = findPosition(intervals, newInterval[1]);

  if (startPos === "IN" && endPos === "IN") {
    return mergeCase1(intervals, newInterval, startIndex, endIndex);
  }

  if (startPos === "AF" && endPos === "AF") {
    return mergeCase2(intervals, newInterval, startIndex, endIndex);
  }

  if (startPos === "IN" && endPos === "AF") {
    return mergeCase3(intervals, newInterval, startIndex, endIndex);
  }

  if (startPos === "AF" && endPos === "IN") {
    return mergeCase4(intervals, newInterval, startIndex, endIndex);
  }
};

const unionIntervals = (intervals) => {
  let result = [];
  let newInterval;
  while (intervals.length > 0) {
    newInterval = intervals.shift();
    result = addOneIntervals(result, newInterval);
  }
  return result;
};

const findPosition = (intervals, newNum) => {
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= newNum && newNum <= intervals[i][1])
      return ["IN", i];
    if (intervals[i][1] < newNum && newNum < intervals[i + 1][0])
      return ["AF", i];
  }
};

console.log(findPosition([[1, 4]], 2)); // ["IN", 0]
console.log(
  findPosition(
    [
      [1, 3],
      [4, 6],
      [7, 8],
      [9, 11],
      [13, 15],
      [17, 19],
    ],
    5
  )
); // ["IN", 1]
console.log(
  findPosition(
    [
      [1, 3],
      [4, 5],
      [7, 8],
      [9, 11],
      [13, 15],
      [17, 19],
    ],
    16
  )
); // ["AF", 4]

// console.log(addOneIntervals([[1, 4]], [2, 5])); // [[1,5]]
// console.log(addOneIntervals([[5, 6]], [8, 16])); // [[1,5]]
// console.log(addOneIntervals([[5, 6]], [1, 2])); // [[1,5]]
// console.log(addOneIntervals([[4, 6]], [1, 5])); // [[1,5]]
// console.log(
//   addOneIntervals(
// [
//   [1, 3],
//   [4, 6],
//   [7, 8],
//   [9, 11],
//   [13, 15],
//   [17, 19],
// ],
//     [6.1, 18.2]
//   )
// ); // [[1,3],[4,15],[17,19]]
// // start = 5 either inside an existing interval, or outside
// // end = 14 either inside an existing interval, or outside
// // start is IN intervals[1], end is IN intervals[4]
// // => merge intervals[1] to intervas[4] => [start of Int_1, end of Int_4]

// console.log(
//   addOneIntervals(
//     [
//       [1, 3],
//       [4, 5],
//       [7, 8],
//       [9, 11],
//       [13, 15],
//       [17, 19],
//     ],
//     [6, 16]
//   )
// ); // [[1,3],[4,5],[6,16],[17,19]]
// // start is AF intervals[1], end is AF intervals[4]
// // => replace [2] to [4] with newInterval

// console.log(
//   addOneIntervals(
//     [
//       [1, 3],
//       [4, 5],
//       [7, 8],
//       [9, 11],
//       [13, 15],
//       [17, 19],
//     ],
//     [6, 14]
//   )
// ); // [[1,3],[4,5],[6,15],[17,19]]
// // start is BETWEEN intervals[1][2], end is IN intervals[4]
// // => replace [2] to [4] with [newInterval[0], intervals[4][1]]

// console.log(
//   addOneIntervals(
//     [
//       [1, 3],
//       [4, 5],
//       [7, 8],
//       [9, 11],
//       [13, 15],
//       [17, 19],
//     ],
//     [4.5, 16]
//   )
// ); // [[1,3],[4,16],[17,19]]
// // start is IN intervals[1], end is BETWEEN intervals[4][5]
// // => replace [1] to [4] with [intervals[1][0], newInterval[1]]
