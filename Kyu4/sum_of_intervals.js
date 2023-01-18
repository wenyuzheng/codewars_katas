function sumIntervals(intervals) {
  let sum = 0;
  intervals.forEach((pair) => {
    let start = pair[0];
    let end = pair[1];
    for (let i = 0; i < intervals.length; i++) {
      //   if (intervals[i][0] === start && intervals[i][1] === end) {
      //     console.log({ pair });
      //     break;
      //   }
      if (intervals[i] === pair) {
        break;
      }
      if (intervals[i][0] < start && end < intervals[i][1]) {
        start = 0;
        end = 0;
      }
      if (intervals[i][0] <= start && start < intervals[i][1]) {
        start = intervals[i][1];
      }
      if (intervals[i][0] <= end && end < intervals[i][1]) {
        end = intervals[i][0];
      }
      // existing intervals is 2,5; new pair = 1,7
      if (start <= intervals[i][0] && intervals[i][1] <= end) {
        sum += intervals[i][0] - start + (intervals[i][1] - end);
        start = 0;
        end = 0;
      }
    }

    sum += end >= 0 ? end - start : Math.abs(start - end);
  });
  return sum;
}

// console.log(sumIntervals([[1, 5]])); // 4
// console.log(
//   sumIntervals([
//     [1, 5],
//     [6, 10],
//   ])
// ); // 8
// console.log(
//   sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15],
//   ])
// ); // 9
// console.log(
//   sumIntervals([
//     [1, 4],
//     [3, 5],
//   ])
// ); // 4
// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ])
// ); // 7
// console.log(
//   sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11],
//   ])
// ); // 19
// console.log(
//   sumIntervals([
//     [0, 20],
//     [-100000000, 10],
//     [30, 40],
//   ])
// ); // 100000030
// console.log(
//   sumIntervals([
//     [-8, -5],
//     [10, 19],
//     [9, 18],
//     [1, 9],
//     [-14, -8],
//   ])
// ); // 27

// console.log(
//   sumIntervals([
//     [-10, -6],
//     [9, 16],
//     [10, 18],
//     [-1, 4],
//     [13, 22],
//     [-17, -8],
//     [-3, 7],
//     [-1, 6],
//   ])
// ); // 34

console.log(
  sumIntervals([
    [-10, -6],
    [9, 16],
    [10, 18],
    [-1, 4],
    [13, 22],
    [-17, -8], // 29
    [-3, 7],
    // [-1, 6],
  ])
); // 34
