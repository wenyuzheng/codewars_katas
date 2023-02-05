const sumConditional = (arr, conditionFunc, res = 0) => {
  if (arr.length === 0) return res;
  const e = arr.shift();
  res += conditionFunc(e) ? e : 0;
  return sumConditional(arr, conditionFunc, res);
};

const isMultipleOf3 = (n) => n % 3 === 0;
console.log(sumConditional([1, 2, 3, 4, 5, 6], isMultipleOf3)); // 3+6 =9
