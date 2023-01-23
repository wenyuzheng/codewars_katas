function sumIntervals(intervals) {
  const currIntervals = mergeIntervals([], intervals);
  let sum = 0;
  for (let i = 0; i < currIntervals.length; i++) {
    sum += currIntervals[i][1] - currIntervals[i][0];
  }
  return sum;
}

const isNotDisjoint1 = (newInterval, currInterval) => {
  return (
    currInterval[0] <= newInterval[0] &&
    newInterval[0] < currInterval[1] &&
    currInterval[1] <= newInterval[1]
  );
};

const isNotDisjoint2 = (newInterval, currInterval) => {
  return (
    newInterval[0] <= currInterval[0] &&
    currInterval[0] < newInterval[1] &&
    newInterval[1] <= currInterval[1]
  );
};

const isNotDisjoint3 = (newInterval, currInterval) => {
  return currInterval[0] <= newInterval[0] && newInterval[1] <= currInterval[1];
};

const isNotDisjoint4 = (newInterval, currInterval) => {
  return newInterval[0] <= currInterval[0] && currInterval[1] <= newInterval[1];
};

function mergeIntervals(currIntervals, newIntervals) {
  if (newIntervals.length === 0) {
    return currIntervals;
  }
  if (currIntervals.length === 0) {
    currIntervals.push(newIntervals.shift());
    return mergeIntervals(currIntervals, newIntervals);
  }
  const newInterval = newIntervals.shift();
  for (let i = 0; i < currIntervals.length; i++) {
    const currInterval = currIntervals[i];

    // deal with overlaps
    if (isNotDisjoint1(newInterval, currInterval)) {
      newInterval[0] = currInterval[1];
      return mergeIntervals(currIntervals, [newInterval, ...newIntervals]);
    }
    if (isNotDisjoint2(newInterval, currInterval)) {
      newInterval[1] = currInterval[0];
      return mergeIntervals(currIntervals, [newInterval, ...newIntervals]);
    }
    if (isNotDisjoint3(newInterval, currInterval)) {
      return mergeIntervals(currIntervals, newIntervals);
    }
    if (isNotDisjoint4(newInterval, currInterval)) {
      const newInterval1 = [newInterval[0], currInterval[0]];
      const newInterval2 = [currInterval[1], newInterval[1]];
      return mergeIntervals(currIntervals, [
        newInterval1,
        newInterval2,
        ...newIntervals,
      ]);
    }
  }
  currIntervals.push(newInterval);
  return mergeIntervals(currIntervals, newIntervals);
}

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
);
