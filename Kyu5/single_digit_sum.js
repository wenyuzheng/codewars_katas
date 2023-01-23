const singleDigitSum = (str) => {
  const sum = str
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
    .toString();
  if (sum.length !== 1) return singleDigitSum(sum);
  return sum;
};

console.log(singleDigitSum("11"));
console.log(singleDigitSum("19"));
console.log(singleDigitSum("34562"));
