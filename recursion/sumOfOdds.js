const sumOfOdds = (arr, res = 0) => {
  if (arr.length === 0) return res;
  const e = arr.shift();
  res += e % 2 !== 0 ? e : 0;
  return sumOfOdds(arr, res);
};

console.log(sumOfOdds([1, 2, 3, 4, 5]));
