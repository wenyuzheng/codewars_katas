const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  // intervals.forEach((currInterval) => {
  //   if (currInterval)
  // });

  console.log({ intervals });
};

console.log(
  sumIntervals([
    [-10, -6],
    [9, 16],
    [10, 18],
    [-1, 4],
    [13, 22],
    [-17, -8], // 29
    [-3, 7],
    [-1, 6],
  ])
); // 34
