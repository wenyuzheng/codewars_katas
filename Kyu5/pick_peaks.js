const pickPeaks = (arr) => {
  console.log({ arr });

  const pos = [];
  const peaks = [];

  let max = arr[1];
  let maxReached = false;

  for (let i = 2; i < arr.length; i++) {
    if (maxReached) {
      if (max < arr[i]) {
        maxReached = false;
      }
      max = arr[i];
    } else {
      if (max < arr[i]) {
        max = arr[i];
      } else {
        // console.log(max, arr[i]);
        pos.push(i - 1);
        peaks.push(max);
        maxReached = true;
      }
    }
  }

  return { pos, peaks };
};

module.exports = pickPeaks;
