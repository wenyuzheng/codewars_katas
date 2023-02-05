const sumOfEvens = (arr, res = 0) => {
  if (arr.length === 0) return res;
  const e = arr.shift();
  res += e % 2 === 0 ? e : 0;
  return sumOfEvens(arr, res);
};

console.log(sumOfEvens([1, 2, 3, 4]));
