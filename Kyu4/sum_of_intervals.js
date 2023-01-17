function sumIntervals(intervals) {
  //   let sum = 0;
  //   intervals.map((pair) => {
  //     sum += pair[1] - pair[0];
  //   });
  //   return sum;

  let min = intervals[0][0];
  let max = intervals[0][1];
  intervals.map((pair) => {
    if (pair[0] < min) min = pair[0];
    if (pair[1] > max) max = pair[1];
  });
  return max - min;
}

console.log(sumIntervals([[1, 5]])); // 4
console.log(
  sumIntervals([
    [1, 5],
    [6, 10],
  ])
); // 8
console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // 9
console.log(
  sumIntervals([
    [1, 4],
    [3, 5],
  ])
); // 4
