const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  const firstInterval = intervals.shift();

  let sum = firstInterval[1] - firstInterval[0];
  let max = firstInterval[1];

  intervals.forEach((currInterval) => {
    if (currInterval[0] <= max && max < currInterval[1]) {
      sum += currInterval[1] - max;
      max = currInterval[1];
    } else if (max < currInterval[0]) {
      sum += currInterval[1] - currInterval[0];
      max = currInterval[1];
    }
  });

  return sum;
};

// console.log(
//   sumIntervals([
//     [-10, -6],
//     [9, 16],
//     [10, 18],
//     [-1, 4],
//     [13, 22],
//     [-17, -8], // 29
//     [-3, 7],
//     [-1, 6],
//   ])
// ); // 34

console.log(
  sumIntervals([
    [1, 5],
    [1, 5],
  ])
); // 4

console.log(
  sumIntervals([
    [1, 5],
    [5, 10],
  ])
); // 9
