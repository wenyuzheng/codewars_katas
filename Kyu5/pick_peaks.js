const pickPeaks = (arr) => {
  console.log({ arr });

  const pos = [];
  const peaks = [];

  let maxReached = false;

  for (let i = 1; i < arr.length - 1; i++) {
    if (!maxReached && arr[i] >= arr[i + 1]) {
      pos.push(i);
      peaks.push(arr[i]);
      maxReached = true;
    }

    if (maxReached && arr[i] < arr[i + 1]) {
      maxReached = false;
    }
  }

  return { pos, peaks };
};

module.exports = pickPeaks;
