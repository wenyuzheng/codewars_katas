const sumOfNumbers = (arr, res = 0) => {
  if (arr.length === 0) return res;
  res += arr.shift();
  return sumOfNumbers(arr, res);
};

console.log(sumOfNumbers([1, 2, 3]));

// no loops/iteration
