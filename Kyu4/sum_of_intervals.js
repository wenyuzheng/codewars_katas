function sumIntervals(intervals) {
  let sum = 0;
  intervals.map((pair) => {
    let start = pair[0];
    let end = pair[1];
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i] === pair) break;
      if (intervals[i][0] < start && start < intervals[i][1]) {
        start = intervals[i][1];
      }
      //   if (intervals[i][0]  start < intervals[i][1]) {
      //     start = intervals[i][1];
      //     console.log({ start });
      //   }
    }
    sum += end - start;
  });
  return sum;

  //   let min = intervals[0][0];
  //   let max = intervals[0][1];
  //   intervals.map((pair) => {
  //     if (pair[0] < min) min = pair[0];
  //     if (pair[1] > max) max = pair[1];
  //   });
  //   return max - min;
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
