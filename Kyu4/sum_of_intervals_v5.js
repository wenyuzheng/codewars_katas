const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  console.log({ intervals });
};

const addOneInterval = (intervals, newInterval) => {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }

  intervals.forEach((currInterval) => {});
};

const addIntervals = (intervals) => {
  let result = [];
  while (intervals.length > 0) {
    const newInterval = intervals.shift();
    result = addOneInterval(result, newInterval);
  }
  return result;
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
