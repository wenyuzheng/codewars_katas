const pickPeaks = (arr) => {
  console.log({ arr });

  const pos = [];
  const peaks = [];

  let maxReached = false;
  let tempMaxPos = -1;

  for (let i = 1; i < arr.length - 1; i++) {
    if (!maxReached) {
      if (tempMaxPos !== -1) {
        if (arr[tempMaxPos] > arr[i + 1]) {
          pos.push(tempMaxPos);
          peaks.push(arr[tempMaxPos]);
          tempMaxPos = -1;
          maxReached = true;
        } else if (arr[tempMaxPos] < arr[i + 1]) {
          tempMaxPos = -1;
        }
      } else if (arr[i] > arr[i + 1]) {
        pos.push(i);
        peaks.push(arr[i]);
        maxReached = true;
      } else if (tempMaxPos === -1 && arr[i] === arr[i + 1]) {
        tempMaxPos = i;
      }
    }

    if (maxReached && arr[i] < arr[i + 1]) {
      maxReached = false;
    }
  }

  return { pos, peaks };
};

module.exports = pickPeaks;
