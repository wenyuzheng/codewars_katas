function sumIntervals(intervals) {
  let sum = 0;
  intervals.map((pair) => (sum += pair[1] - pair[0]));
  return sum;
}

console.log(sumIntervals([[1, 5]])); // 4
console.log(
  sumIntervals([
    [1, 5],
    [6, 10],
  ])
); // 8
// console.log(
//   sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15],
//   ])
// ); // 9
